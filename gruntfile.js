module.exports = function(grunt) {
    grunt.initConfig({
        // config ของ uncss (เอามาจากเว็บหลักของ plugin ได้เลย)
        uncss: {
            dist: {
                files: {
                    // เอาเฉพาะโค้ด CSS ที่มีการเรียกใช้จริงๆ ใน index.html มาเซฟเป็นไฟล์ใหม่ที่ css/tidy.css
                    'css/tidy.css': ['./app/views/index.jade']
                }
            }
        }
    });

    // โหลด plugin ที่ชื่อ grunt-uncss มาใช้
    grunt.loadNpmTasks('grunt-uncss');

    // กำหนดให้ uncss เป็น default task
    grunt.registerTask('default', ['uncss']);
};
