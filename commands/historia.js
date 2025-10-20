import { SlashCommandBuilder } from "discord.js";
import fs from "fs";

const dataPath = "./data/personagens.json";

export const data = new SlashCommandBuilder()
  .setName("historia")
  .setDescription("Mostra a história do seu personagem");

export async function execute(interaction) {
  if (!fs.existsSync(dataPath)) return interaction.reply("❌ Nenhum personagem encontrado.");

  const db = JSON.parse(fs.readFileSync(dataPath));
  const personagem = db[interaction.user.id];

  if (!personagem) return interaction.reply("❌ Você ainda não criou um personagem.");

  await interaction.reply(`📖 **${personagem.nome}** — ${personagem.historia}`);
}
