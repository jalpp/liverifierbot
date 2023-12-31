const { SlashCommandBuilder } = require('discord.js');
const {isCollaborator} = require("../../githubChecker");
const {getUserInfo} = require("../../checkGithubUser");
const {owner, repo} = require("../../config.json");
const {roleId} = require("../../config.json")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('pass in your github username to check if you qualify for contributor role!')
        .addStringOption(option => option.setName('github-user')
        .setDescription('add github user').setRequired(true)),
	async execute(interaction) {
		const discordID =interaction.user.id;
        const member = interaction.options.getString('github-user');
        const determineGithubStatus = await isCollaborator(owner, repo, member);
		const determineDiscordVerification = await getUserInfo(member, discordID);

		if(determineDiscordVerification){

			if(determineGithubStatus){
				 const role = interaction.guild.roles.cache.get(roleId);
				 const discordUser = interaction.guild.members.cache.get(discordID);
				 discordUser.roles.add(role);
                 await interaction.reply('Contributor role granted! Thanks for contributing to Lichess!');
			}else{
				await interaction.reply('Contributor verification failed! Please contribute to Lichess to optain the role!');
			}
			
		}else{
			await interaction.reply(`Github owner verification failed! Please add ${discordID} in your Github bio and run **/verify** again!`);
		}
	
	},
};
