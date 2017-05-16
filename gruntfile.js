module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
                options: {
                    configFile: './eslint.json'
                },
                target: ['./src/**/*.js']
            
        },
        sass: {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        './dist/css/style.css': './src/css/style.scss'
                    }
                }
        },
        browserify: {
                dist: {
                    files: {
                        './dist/bundle.js': ['./src/index.js']
                    },
                    options: {
                        transform: [
                            [
                                'babelify', 
                                {
                                    'presets': ["react", "es2015"]
                                }
                            ]
                        ]
                    }
                }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask("default", ["eslint", 'sass', "browserify", /*"uglify"*/]);
};