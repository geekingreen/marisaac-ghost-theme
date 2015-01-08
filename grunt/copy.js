module.exports = {
	fonts: {
		files: [{
			expand: true,
			cwd: 'theme/',
			src: ['assets/fonts/**'],
			dest: 'dist/'
		},
		{
			expand: true,
			cwd: 'bower_components/fontawesome/',
			src: ['fonts/**'],
			dest: 'dist/assets/'
		}]
	},

	templates: {
		files: [{
			expand: true,
			cwd: 'theme/',
			src: ['**/*.hbs'],
			dest: 'dist/'
		}],
	}
};
