module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8787,
          hostname: '0.0.0.0',
          open: true,
          debug: true,
          middleware: function (connect, options) {
            return [
              require('connect-livereload')({ port: 35353 }),
              connect.static(options.base)
            ];
          }
        }
      }
    },

    watch: {
      reload: {
        files: ['*.js','index.html'],
        tasks: [],
        options: {
          livereload: 35353
        }
      },
      scss: {
        files: ['*.scss'],
        tasks: ['compass'],
        options: {
          livereload: 35353
        }
      }
    },

    compass: {
      build: {
        options: {
          relativeAssets: true,
          sassDir: '.',
          cssDir: '.',
          imagesDir: '.',
          environment: 'development',
          outputStyle: 'expanded'
        }
      }
    }

  });

  // Load task modules.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', 'server');
  grunt.registerTask('server', ['connect','watch']);

};