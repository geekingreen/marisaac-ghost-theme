module.exports = {
  scripts: {
    files: 'theme/**/*.js',
    tasks: ['uglify'],
    options: {
      interrupt: true
    }
  },
  css: {
    files: 'theme/**/*.styl',
    tasks: ['stylus'],
    options: {
      interrupt: true
    }
  },
  html: {
    files: 'theme/**/*.hbs',
    tasks: ['copy:templates'],
    options: {
      interrupt: true
    }
  }
};
