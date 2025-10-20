import { SlashCommandBuilder } from "discord.js";
import fs from "fs";

const dataPath = "./data/personagens.json";

export const data = new SlashCommandBuilder()
  .setName("xp")
  .setDescription("Adiciona XP ao seu personagem")
  .addIntegerOption(opt =>
    opt.setName("quantidade").setDescription("Quantidade de XP a adicionar").setRequired(true));

export async function execute(interaction) {
  const qtd = interaction.options.getInteger("quantidade");
  const db = JSON.parse(fs.readFileSync(dataPath));
  const personagem = db[interaction.user.id];

  if (!personagem) return interaction.reply("❌ Você ainda não criou um personagem.");

  personagem.xp += qtd;
  fs.writeFileSync(dataPath, JSON.stringify(db, null, 2));

  await interaction.reply(`💥 ${personagem.nome} ganhou **${qtd} XP!** Total: ${personagem.xp}`);
}
