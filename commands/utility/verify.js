const { SlashCommandBuilder } = require('discord.js');
const {getUserInfo} = require("../../checkGithubUser");
const {owner} = require("../../config.json");
const {roleId, collabUsersIds} = require("../../config.json")
const {isCollabAcrossRepos} = require("../../iscollab")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('pass in your github username to check if you qualify for contributor role!')
        .addStringOption(option => option.setName('github-user')
        .setDescription('add github user').setRequired(true)),
	async execute(interaction) {
		const discordID =interaction.user.id;
        if(collabUsersIds.includes(discordID)){
			const role = interaction.guild.roles.cache.get(roleId);
			const discordUser = interaction.guild.members.cache.get(discordID);
			discordUser.roles.add(role);
            await interaction.reply('You are already a Lichess Contributor! Contributor role granted! Thanks for contributing to Lichess.');
		}else{

        const member = interaction.options.getString('github-user');
		const determineDiscordVerification = await getUserInfo(member, discordID);
		const checkCollabRepos = await isCollabAcrossRepos(owner, member);

		if(determineDiscordVerification){

			if(checkCollabRepos){
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

	}
	
	},
};
