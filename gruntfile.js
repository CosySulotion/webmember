module.exports = function(grunt) {
    grunt.initConfig({
        // config �ͧ uncss (����Ҩҡ�����ѡ�ͧ plugin �����)
        uncss: {
            dist: {
                files: {
                    // ���੾���� CSS ����ա�����¡���ԧ� � index.html ��૿����������� css/tidy.css
                    'css/tidy.css': ['./app/views/index.jade']
                }
            }
        }
    });

    // ��Ŵ plugin ������ grunt-uncss ����
    grunt.loadNpmTasks('grunt-uncss');

    // ��˹���� uncss �� default task
    grunt.registerTask('default', ['uncss']);
};
