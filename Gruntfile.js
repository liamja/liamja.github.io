// Generated on 2013-05-30 using generator-jekyllrb 0.2.3. Yo Jekyll!
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
var yeomanConfig = {
  app: 'app',
  dist: 'dist',
  css: 'css',
  cssPre: '_scss',
  js: 'js',
  jsPre: '_src',
  img: 'image',
  fonts: 'fonts'
};

module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    yeoman: yeomanConfig,

    watch: {
      sass: {
        files: ['<%= yeoman.app %>/<%= yeoman.cssPre %>/**/*.{scss,sass}'],
        tasks: ['sass:server']
      },
      stageCss: {
        files: ['<%= yeoman.app %>/<%= yeoman.css %>/**/*.css'],
        tasks: ['copy:stageCss']
      },
      autoprefixer: {
        files: ['.tmp/<%= yeoman.css %>/**/*.css'],
        tasks: ['autoprefixer:server']
      },
      coffee: {
        files: ['<%= yeoman.app %>/<%= yeoman.jsPre %>/**/*.coffee'],
        tasks: ['coffee:server']
      },
      coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      jekyll: {
        files: ['<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
                '!<%= yeoman.app %>/bower_components'],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/<%= yeoman.css %>/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/<%= yeoman.img %>/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change hostname to null to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, '.jekyll'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    // Running Jekyll also cleans all non-git files from the target directory
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: ['.tmp', '.jekyll']
    },
    // Add Sass files you want to compile here
    // TODO: Revise to watch default directories when
    // https://github.com/gruntjs/grunt-contrib-sass/issues/40 is resolved.
    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/bower_components'
      },
      dist: {
        files: {
          '.tmp/<%= yeoman.css %>/main.css': '<%= yeoman.app %>/<%= yeoman.cssPre %>/main.scss',
          '.tmp/<%= yeoman.css %>/syntax.css': '<%= yeoman.app %>/<%= yeoman.cssPre %>/syntax.scss'
        }
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true,
        },
        files: {
          '.tmp/<%= yeoman.css %>/main.css': '<%= yeoman.app %>/<%= yeoman.cssPre %>/main.scss',
          '.tmp/<%= yeoman.css %>/syntax.css': '<%= yeoman.app %>/<%= yeoman.cssPre %>/syntax.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= yeoman.css %>',
          src: '**/*.css',
          dest: '.tmp/<%= yeoman.css %>'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= yeoman.css %>',
          src: '**/*.css',
          dest: '.tmp/<%= yeoman.css %>'
        }]
      }
    },
    coffee: {
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.jsPre %>',
          src: '**/*.coffee',
          dest: '.tmp/<%= yeoman.js %>',
          ext: '.js'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.jsPre %>',
          src: '**/*.coffee',
          dest: '.tmp/<%= yeoman.js %>',
          ext: '.js'
        }]
      }
    },
    jekyll: {
      // TODO: switch config to options style after
      // https://github.com/dannygarcia/grunt-jekyll/pull/14
      dist: {
        bundleExec: true,
        src : '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        server : false,
        auto : false,
        config: '_config.yml,_config.build.yml'
      },
      server: {
        bundleExec: true,
        src : '<%= yeoman.app %>',
        dest: '.jekyll',
        server : false,
        auto : false,
        config: '_config.yml'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '{.tmp,<%= yeoman.app %>}/<%= yeoman.js %>/**/*.js',
        'test/spec/**/*.js',
        '!<%= yeoman.app %>/<%= yeoman.js %>/vendor/**/*',
        '!<%= yeoman.app %>/bower_components/**/*'
      ],
      report: [
        '{.tmp,<%= yeoman.app %>}/<%= yeoman.js %>/**/*.js',
        '!<%= yeoman.app %>/<%= yeoman.js %>/vendor/**/*'
      ]
    },
    // TODO: rewrite for globbing and bundleExec when 5.0 is released
    csscss: {
      options: {
        minMatch: 2,
        ignoreSassMixins: false,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      // Add files to be tested here
      report: {
       src: ['<%= yeoman.app %>/<%= yeoman.cssPre %>/main.scss']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      report: {
        src: ['{.tmp,<%= yeoman.app %>}/<%= yeoman.css %>/**/*.css']
      }
    },
    // UseminPrepare will only scan one page for usemin blocks. If you have
    // usemin blocks that aren't used in index.html, create a usemin manifest
    // page (hackery!) and point this task there.
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
          basedir: '<%= yeoman.dist %>',
          dirs: ['<%= yeoman.dist %>/**/*']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/<%= yeoman.css %>/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          report: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll moves all html and text files
            // Usemin moves css and js files with concat
            // If your site requires it, add other file type patterns here
            // e.g., Bower components that aren't in a usemin block:
            // 'bower_components/jquery.min.js',
            // Copy moves asset files and directories
            '*.{ico,png}',
            '<%= yeoman.js %>/**/*',
            '<%= yeoman.css %>/**/*',
            '<%= yeoman.img %>/**/*',
            '<%= yeoman.fonts %>/**/*'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.css %>',
          src: '**/*.css',
          dest: '.tmp/<%= yeoman.css %>'
        }]
      },
      stageJs: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/<%= yeoman.js %>',
          src: '**/*.js',
          dest: '.tmp/<%= yeoman.js %>'
        }]
      },
      // Copy bower_components assets in case we need them for concatination
      stageComponents: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: 'bower_components/**/*.{css,js}',
          dest: '.tmp/'
        }]
      }
    },
    rev: {
      options: {
        length: 4
      },
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/<%= yeoman.js %>/**/*.js',
            '<%= yeoman.dist %>/<%= yeoman.css %>/**/*.css',
            '<%= yeoman.dist %>/<%= yeoman.img %>/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/<%= yeoman.fonts %>/**/*.{eot*,svg,ttf,woff}'
          ]
        }
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'coffee:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'coffee:dist',
        'copy:dist',
        'copy:stageCss',
        'copy:stageJs',
        'copy:stageComponents'
      ]
    }
  });

  // Load plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Define Tasks
  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  // No real tests yet. Add your own.
  // grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  // ]);

  grunt.registerTask('report', [
    'clean:server',
    'sass:server',
    'jshint:report',
    'csscss:report',
    'csslint:report'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // Jekyll cleans all non-git files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'autoprefixer:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'rev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('default', [
    'report',
    'build'
  ]);
};
