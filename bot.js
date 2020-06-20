const discord = require("discord.js");
const client = new discord.Client();
require('dotenv').config();

client.login(process.env.BOT_TOKEN);