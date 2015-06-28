module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svn_fetch: {
            options: {
                'type': 'git',
                svnOptions: {
                    username: 'giacaceres',
                    password: 'Svdw880711'
                },
                'repository': 'https://bitbucket.org/giacaceres/giaportfolio/src',
                'path': 'dist/'
            },
            dist: {
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
                src: 'js/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                files:
                //includes files within path and its sub-directories
                    [{
                    expand: true,
                    src: ['css/**'],
                    dest: ['dist/css/']
                }]
            }
        }
    });

    //Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-svn-fetch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    //Default Tasks(s).
      grunt.registerTask('default', ['svn_fetch','uglify', 'copy']);

    //grunt.registertask('default', ['svn-fetch', 'uglify', 'copy']);
    //grunt.log.write('Logging some stuff...').ok();
}