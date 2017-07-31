module.exports = {
  package: {
    files: [{
      src: ['package.json'],
      dest: 'dist/',
    }],
  },

  templates: {
    files: [{
      expand: true,
      cwd: 'theme/',
      src: ['**/*.hbs'],
      dest: 'dist/',
    }],
  },
};
