module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      bulidJs:{
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'js/',      // Src matches are relative to this path.
            src: ['**/*.js'], // Actual pattern(s) to match.
            dest: 'js/bulid',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
          },
        ],
      },
    },
    cssmin: {
      bulidCss:{
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'css/',      // Src matches are relative to this path.
            src: ['**/*.css'], // Actual pattern(s) to match.
            dest: 'css/bulid',   // Destination path prefix.
            ext: '.min.css',   // Dest filepaths will have this extension.
          },
        ],
      },
    },
    imagemin: {
      bulidImg:{
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'images/',      // Src matches are relative to this path.
            src: ['**/*.{png,gif,jpg}'], // Actual pattern(s) to match.
            dest: 'images/bulid',   // Destination path prefix.
          },
        ],
      },
    },

  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  //grunt.registerTask('default', ['uglify','imagemin']);
grunt.registerTask('default', ['cssmin:bulidCss','uglify:bulidJs']);

};