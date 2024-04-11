module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'main.min.js' : 'main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'clean', 'uglify']);
}