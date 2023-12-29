const { SlashCommandBuilder } = require('discord.js');
const {isCollaborator} = require("../../githubChecker");
const {owner, repo} = require("../../config.json");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('verify if the passed in user is github collab user')
        .addStringOption(option => option.setName('input')
        .setDescription('add github user').setRequired(true)),
	async execute(interaction) {
        const member = interaction.options.getString('input');
        const determine = await isCollaborator(owner, repo, member);
        console.log(determine);
		await interaction.reply(`The user ${member} is a ${determine} collab!`);
	},
};
