module.exports = function(grunt) {

  // Load tasks provided by each plugin
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-jade");

  // Project configuration
  grunt.initConfig({
    coffee: {
      build: {
        src: "src/scripts/app.coffee",
        dest: "build/js/app.js"
      }
    },
    stylus: {
      build: {
        src: "src/styles/app.styl",
        dest: "build/css/app.css"
      }
    },
    jade: {
      build: {
        options: {
          pretty: true
        },
        src: "src/views/app.jade",
        dest: "build/app.html"
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['coffee','stylus','jade']);
};
