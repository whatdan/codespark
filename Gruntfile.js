module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: { 
      compile: {
          files: [
            {
              expand: true,     // Enable dynamic expansion.
              cwd: './',      // Src matches are relative to this path.
              src: ['**/*.coffee'], // Actual pattern(s) to match.
               dest: '',   // Destination path prefix.
               ext: '.js',   // Dest filepaths will have this extension.
            },
          ],
      }
    },
    watch: {
      scripts: {
        files: ['**/*.coffee'],
        tasks: ['coffee'],
        options: {
          
        },
      },
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  //grunt.registerTask('default', ['uglify','imagemin']);
grunt.registerTask('default', ['coffee:compile']);
grunt.registerTask('watchfile', ['watch']);

};