module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svn_fetch: {
            options: {
                // 'type': 'git',
                // svnOptions: {
                //     username: 'giacaceres0711',
                //     password: 'Svdw880711'
                // },
                // 'repository': 'https://bitbucket.org/giacaceres/portfolio/src',
                // 'path': 'docs/'
            },
            docs: {
                map: {
                    'css': 'css', //folder : svnfolder url resolved based on path
                    'js': 'js',
                    'images': 'images'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/mainjs.js',
                dest: 'docs/js/main.min.js'
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'docs/css/style.min.css': 'css/style.css'
                }
            }
        },
        htmlrefs: {
            docs: {
                /** @required  - string including grunt glob variables */
                src: 'docs/index.html',
                /** @optional  - string directory name*/
                dest: 'docs/index.html',
                /** @optional  - references external files to be included */
                // includes: {
                //     analytics: './ga.inc' // in this case it's google analytics (see sample below) 
                // },
                /** any other parameter included on the options will be passed for template evaluation */
                options: {
                    version: '<%= pkg.version %>',
                }
            }
        },
        copy: {
            main: {
                files:
                //includes files within path and its sub-directories
                    [{
                        src: ['index.html'],
                        dest: 'docs/'
                    }, {
                        src: ['favicon.ico'],
                        dest: 'docs/'
                    }, {
                        expand: true,
                        src: 'images/**',
                        dest: 'docs/'
                    }
                    ,{
                        expand:true,
                        src: ['js/vendor/**'],
                        dest: 'docs/'
                    }
                    ,{
                        expand:true,
                        src: ['css/vendor/**'],
                        dest: 'docs/'
                    }
                ]
            }
        }
    });

    //Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-svn-fetch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-htmlrefs');


    //Default Tasks(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'htmlrefs']);

    //grunt.registertask('default', ['svn-fetch', 'uglify', 'copy']);
    //grunt.log.write('Logging some stuff...').ok();
}