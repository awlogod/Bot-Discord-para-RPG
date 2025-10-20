# Bot-Discord-para-RPG
🎭 RPG Bot — Sistema de RPG para Discord

Um bot completo de RPG desenvolvido em JavaScript (Node.js) com Discord.js v14, feito para gerenciar personagens, rolar dados, marcar sessões e controlar atributos diretamente no Discord através de Slash Commands (/).

⚙️ Funcionalidades

🧙 Criação de Personagens:
Crie seu personagem com nome, classe, atributos iniciais e lore automática.

/criar-personagem nome:<nome> classe:<classe>

📖 História do Personagem:
Veja a história gerada automaticamente.

/historia

🎲 Rolagem de Dados:
Role dados no formato XdY (ex: 2d6, 1d20).

/rolar-dados dado:<quantidade>d<faces>

⏰ Lembrete de Sessão:
Marque um lembrete para lembrar os jogadores de uma sessão.

/lembrete minutos:<tempo_em_minutos>

💥 Sistema de Experiência (XP):
Adicione experiência ao personagem.

/xp quantidade:<número>

🧩 Estrutura de Pastas

rpg_bot/
├── commands/
│   ├── criarPersonagem.js
│   ├── historia.js
│   ├── rolarDados.js
│   ├── lembrete.js
│   └── xp.js
├── data/
│   └── personagens.json
├── index.js
├── deploy-commands.js
├── .env
├── package.json
└── README.md

💾 Banco de Dados

Os dados são armazenados em um arquivo JSON simples:

{
  "123456789012345678": {
    "nome": "Awlogod",
    "classe": "Guerreiro",
    "xp": 120,
    "atributos": {
      "forca": 5,
      "agilidade": 5,
      "inteligencia": 5
    },
    "historia": "Um(a) Guerreiro misterioso(a) chamado(a) Dedé."
  }
}


🧠 Tutorial: Criando o Bot no Discord Developer Portal
1️⃣ Acesse o portal

Vá para: https://discord.com/developers/applications

Faça login na sua conta.

2️⃣ Crie uma nova aplicação

Clique em "New Application".

Dê um nome ao bot (ex: Rpg Bot) e clique em Create.

3️⃣ Ative o Bot

No menu lateral esquerdo, clique em "Bot".

Clique em "Add Bot" → Yes, do it!

4️⃣ Copie o Token

Ainda na aba Bot, clique em "Reset Token" → copie o Token.
⚠️ Ele é a “senha” do seu bot. Guarde com cuidado.

5️⃣ Dê as permissões certas

Role até “Privileged Gateway Intents” e marque:

✅ PRESENCE INTENT

✅ SERVER MEMBERS INTENT

✅ MESSAGE CONTENT INTENT

Clique em Save Changes.

6️⃣ Gere o link de convite

Vá em OAuth2 → URL Generator

Marque:

Scopes: bot e applications.commands

Bot Permissions:

Send Messages

Read Message History

Use Slash Commands

Copie o link gerado e cole no navegador para adicionar o bot ao seu servidor.

👨‍💻 Desenvolvido por

André Wilckay
💼 Empresa: Awlo LTDA
🚀 Linguagem: JavaScript (Node.js)
🧰 Framework: Discord.js v14
