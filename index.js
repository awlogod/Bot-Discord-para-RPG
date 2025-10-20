import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

console.log("TOKEN:", process.env.TOKEN ? "✅ carregado" : "❌ não encontrado");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// Carregar todos os comandos da pasta /commands
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// Quando o bot estiver pronto
client.once("ready", () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

// Interações Slash Command
client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: "❌ Ocorreu um erro ao executar o comando.", ephemeral: true });
  }
});

client.login(process.env.TOKEN);
