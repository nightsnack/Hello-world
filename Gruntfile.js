module.exports = function (grunt) {
	grunt.initConfig({
		watch : {
			options : {
				nospawn : true,
				livereload : true
			},
			handlebars : {
				files : [
					'app/templates/**/*.hbs'
				],
				tasks : ['handlebars']
			},
			css : {
				files : [
					'app/styles/**/*.css'
				],
				tasks : ['jst']
			},
			livereload : {
				files : [
					'*.html',
					'app/styles/{,*/}*.css',
					'app/scripts/{,*/}*.js',
				]
			}
		},
		clean : {
			dist : ['build'],
		},
		jshint : {
			all : [
				'Gruntfile.js',
				'app/**/*.js',
				'app/modules/**/*.js',
			]
		},
		requirejs : {
			compile : {
				options : {
					baseUrl : "app",
					mainConfigFile : "app/main.js",
					include : "main",
					name : "../bower_components/almond/almond",
					out : "dist/app.min.js"
				}
			}
		},
		cssmin : {
			dist : {
				files : {
					'dist/main.min.css' : [
						'build/styles/{,*/}*.css',
						'app/styles/{,*/}*.css'
					]
				}
			}
		},
		fileblocks : {
			options : {
				templates : {
					'js' : '<script data-main="app/main" src="${file}"></script>',
					'css' : '<link rel="stylesheet" href="${file}">'
				},
				removeFiles : true
			},
			prod : {
				src : 'index.html',
				blocks : {
					'styles' : {
						src : 'dist/**/*.css'
					},
					'app' : {
						src : 'dist/app.min.js'
					}
				}
			},
			develop : {
				src : 'index.html',
				blocks : {
					'styles' : {
						src : 'app/styles/**/*.css'
					},
					'app' : {
						src : 'bower_components/requirejs/require.js'
					}
				}
			},
		},
		docco : {
			debug : {
				src : ['app/**/*.js'],
				options : {
					output : 'dist/docs'
				}
			}
		},
		imagemin : { // Task
			dynamic : { // Another target
				options : { // Target options
					optimizationLevel : 1,
					svgoPlugins : [{
							removeViewBox : false
						}
					]
				},
				files : [{
						expand : true, // Enable dynamic expansion
						cwd : 'app/images/', // Src matches are relative to this path
						src : ['**/*.{png,jpg,gif}'], // Actual patterns to match
						dest : 'app/img/' // Destination path prefix
					}
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-file-blocks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-docco');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('build', [
			'requirejs',
			'cssmin',
			'imagemin'
		]);

	grunt.registerTask('develop', ['build', 'fileblocks:develop', 'watch']);

	grunt.registerTask('release', ['build', 'fileblocks:prod']);
};
