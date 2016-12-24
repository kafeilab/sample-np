/**
 * 
 */
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
//		uglify : configGruntUglify,
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
	grunt.registerTask('default', [ 'clean', 'copy' ]);

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
			// includes files within path
			//{expand: true, src: ['src/*'], dest: 'dest/', filter: 'isFile'},

			// includes files within path and its sub-directories
			{ expand : true, cwd: 'src/', src : [ '**' ], dest : 'dist/' }

			// makes all src relative to cwd
			//{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}
		]
	}
};

const configGruntClean = {
	build : {
		src : [ "dist/" ]
	}
};
