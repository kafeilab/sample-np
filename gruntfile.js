/**
 * 
 */
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : configGruntUglify,
//		concat : configGruntConcat,
		copy : configGruntCopy,
		clean : configGruntClean
	});

	// Load the plugin that provides the "uglify" task.
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('default', [ 'clean', 'copy:main' ]);

};


// =========================================================== Config

const configGruntConcat = {
	options : {
		separator : ';'
	},
	dist : {
		src : [ 'src/**/*.js' ],
		dest : 'dist/<%= pkg.name %>.js'
	}
};

const configGruntUglify = {
	options : {
		banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	},
	build : {
		src : 'src/<%= pkg.name %>.js',
		dest : 'dist/<%= pkg.name %>.min.js'
	}
};

const configGruntCopy = {
	main : {
		files : [
			// includes files within path and its sub-directories
			{ expand : true, cwd: 'src/', src : [ '**', '!**/*.ts' ], dest : 'dist/' },

			{
				expand: true,
				flatten: true,
				src: [
					'node_modules/core-js/client/shim.min.js',
					'node_modules/zone.js/dist/zone.js',
					'node_modules/reflect-metadata/Reflect.js',
					'node_modules/systemjs/dist/system.src.js'
				],
				dest: 'dist/'
			}
		]
	},
	module : {
		files: [{ expand : true, cwd: 'node_modules/', src : [ '@angular/**/*.js', 'rxjs/**/*.js' ], dest : 'dist/modules' }]
	}
};

const configGruntClean = {
	build : {
		src : [ "dist/*", "!dist/modules" ]
	}
};
