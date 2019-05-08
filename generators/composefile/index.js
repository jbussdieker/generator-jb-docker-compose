'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('docker-compose.yml'),
      { ...this.options }
    );
  }
};
