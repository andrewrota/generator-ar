'use strict';
/**
 *
 * Much code and examples borrowed from:
 *
 * https://github.com/yeoman/generator
 * https://github.com/yeoman/generator-backbone
 * https://github.com/Snugug/generator-snugug
 *
 */
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var AndrewRotaGenerator = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
        this.option('skip-install', {
            type: Boolean,
            required: false
        });
        this.option('app-path', {
            type: String,
            required: false
        });
        this.option('app-name', {
            type: String,
            required: false
        });
        this.appname = this.options['app-name'] || this.appname;
        this.appPath = this.options['app-path'] || this.appPath || 'src';
        this.appname = this._.classify(this.appname);
        this.config.set('appPath', this.appPath);
        this.config.set('appname', this.appname);
         this.config.defaults({
            appName: this.appname
         });
    },
    writing: {
        git: function() {
            this.copy('gitignore', '.gitignore');
        },
        bower: function() {
            this.copy('_bower.json', 'bower.json');
        },
        jshint: function() {
            this.copy('jshintrc', '.jshintrc');
        },
        editorConfig: function() {
            this.copy('editorconfig', '.editorconfig');
        },
        gulpfile: function() {
            this.template('gulpfile.js');
        },
        scssLint: function() {
            this.copy('scss-lint.yml', '.scss-lint.yml');
        },
        flowconfig: function() {
            this.copy('flowconfig', '.flowconfig');
        },
        preprocessor: function() {
            this.copy('preprocessor.js', 'preprocessor.js');
        },
        csslint: function() {
            this.copy('csslintrc', '.csslintrc');
        },
        readme: function() {
            this.copy('readme', 'README.md');
        },
        packageJSON: function() {
            this.template('_package.json', 'package.json');
        },
        setupEnv: function() {
            this.mkdir(this.config.get('appPath'));
            this.mkdir(this.config.get('appPath') + '/js');
            this.mkdir(this.config.get('appPath') + '/sass');
            this.mkdir(this.config.get('appPath') + '/images');
            this.mkdir(this.config.get('appPath') + '/__tests__');
            this.copy('src/__tests__/init-test.js', this.config.get('appPath') + '/__tests__/init_test.js');
            this.copy('src/js/init.js', this.config.get('appPath') + '/js/init.js');
            this.copy('src/sass/index.scss', this.config.get('appPath') + '/sass/index.scss');
            this.copy('src/index.html', this.config.get('appPath') + '/index.html');
        },
        install: function() {
            if(this.options['skip-install']) {
                this.installDependencies({
                    skipInstall: this.options['skip-install']
                });
            }
        }
    }
});
module.exports = AndrewRotaGenerator;