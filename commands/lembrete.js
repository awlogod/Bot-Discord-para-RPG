import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("lembrete")
  .setDescription("Marca um lembrete para a próxima sessão")
  .addIntegerOption(opt =>
    opt.setName("minutos").setDescription("Tempo até o lembrete (em minutos)").setRequired(true));

export async function execute(interaction) {
  const minutos = interaction.options.getInteger("minutos");
  await interaction.reply(`⏰ Lembrete marcado! Irei te avisar em ${minutos} minutos.`);

  setTimeout(() => {
    interaction.followUp(`📢 Ei ${interaction.user}, lembrete da sessão de RPG!`);
  }, minutos * 60000);
}
