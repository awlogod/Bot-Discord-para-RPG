import { SlashCommandBuilder } from "discord.js";
import fs from "fs";

const dataPath = "./data/personagens.json";

export const data = new SlashCommandBuilder()
  .setName("criar-personagem")
  .setDescription("Cria um novo personagem de RPG")
  .addStringOption(opt => 
    opt.setName("nome").setDescription("Nome do personagem").setRequired(true))
  .addStringOption(opt => 
    opt.setName("classe").setDescription("Classe do personagem").setRequired(true));

export async function execute(interaction) {
  const nome = interaction.options.getString("nome");
  const classe = interaction.options.getString("classe");

  let db = {};
  if (fs.existsSync(dataPath)) db = JSON.parse(fs.readFileSync(dataPath));

  db[interaction.user.id] = {
    nome,
    classe,
    xp: 0,
    atributos: { forca: 5, agilidade: 5, inteligencia: 5 },
    historia: `Um(a) ${classe} misterioso(a) chamado(a) ${nome}.`
  };

  fs.writeFileSync(dataPath, JSON.stringify(db, null, 2));
  await interaction.reply(`🎭 Personagem **${nome}** da classe **${classe}** criado com sucesso!`);
}
