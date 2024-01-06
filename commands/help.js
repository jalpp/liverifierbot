const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('get helpful info on how contributor role verification works'),
	async execute(interaction) {
		await interaction.reply({ content: 'Liverifier gives you contributor role if you are already known contributor [dev, content, broadcast etc] or have contributed to Lichess github repos\n run /verify [your github username] to start the verification path, the bot will give you steps on how to perform the tasks. Note if you are non dev contributor feel free to create a github account if you do not have one.', ephemeral: true });
	},
};
