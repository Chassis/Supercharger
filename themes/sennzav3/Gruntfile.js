module.exports = function( grunt ) {
	'use strict';

	// Load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		jshint: {
			all: [
				'Gruntfile.js',
				'js/**/*.js',
				'!js/**/*.min.js'
			],
			options: {
				curly:   true,
				eqeqeq:  true,
				immed:   true,
				latedef: true,
				newcap:  true,
				noarg:   true,
				sub:     true,
				undef:   true,
				boss:    true,
				eqnull:  true,
				globals: {
					exports: true,
					module:  false,
					"jQuery": true,
					"wp": true,
					"require": true,
					"document": true,
					"window": true,
					"location": true,
					"navigator": true
				}
			}		
		},
		cssmin: {
			minify: {
				expand: true,
				src: ['style.css'],
				ext: '.css'
			}
		},
		cssjanus: {
			dev: {
				options: {
					swapLtrRtlInUrl: false
				},
				src: ['style.css'],
				dest: 'rtl.css'
			}
		},
		uglify: {
			all: {
				files: {
					'js/customizer.min.js': 'js/customizer.js',
					'js/navigation.min.js': 'js/navigation.js',
					'js/skip-link-focus-fix.min.js': 'js/skip-link-focus-fix.js'
				},
				mangle: {
					except: ['jQuery']
				}
			}
		},
		watch:  {
			compass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev', 'cssjanus:dev'],
				options: {
					debounceDelay: 500,
					livereload: true
				}
			},
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'uglify'],
				options: {
					debounceDelay: 500
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'sass',
					cssDir: '.',
					outputStyle: 'compressed'
				}
			}
		}
	});
	
	// Default task.
	grunt.registerTask( 'default', ['compass', 'cssmin', 'cssjanus:dev', 'jshint', 'uglify'] );

	grunt.util.linefeed = '\n';
};