import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("rolar-dados")
  .setDescription("Rola um dado no formato XdY (ex: 2d6)")
  .addStringOption(opt =>
    opt.setName("dado").setDescription("Exemplo: 1d20").setRequired(true));

export async function execute(interaction) {
  const input = interaction.options.getString("dado");
  const match = input.match(/^(\d+)d(\d+)$/);

  if (!match) return interaction.reply("❌ Use o formato correto: Exemplo `2d6`.");

  const [ , qtd, faces ] = match.map(Number);
  const resultados = Array.from({ length: qtd }, () => Math.floor(Math.random() * faces) + 1);
  const total = resultados.reduce((a, b) => a + b, 0);

  await interaction.reply(`🎲 Rolou **${input}** → ${resultados.join(", ")} (Total: **${total}**)`);
}
