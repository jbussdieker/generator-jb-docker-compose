'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the priceless ${chalk.red('generator-jb-docker-compose')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'configVersion',
        message: 'What config file version would you like to use?',
        default: '3.7'
      },
      {
        type: 'input',
        name: 'serviceName',
        message: 'What would you like to name the service?',
        default: 'webapp'
      },
      {
        type: 'input',
        name: 'imageName',
        message: 'What docker image name would you like to use?',
        default: 'ubuntu'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('../composefile'), {
      ...this.props
    });
  }
};
