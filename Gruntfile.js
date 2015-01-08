module.exports = function(grunt) {

	// Load configuration from individual files in grunt dir
	require('load-grunt-config')(grunt);

	grunt.registerTask('build', [
		'clean',
		'copy',
		'stylus',
		'uglify',
		'clean:tmp'
	]);

	grunt.registerTask('default', ['build', 'watch']);
};
