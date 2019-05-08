'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jb-docker-compose:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      configVersion: '3.7',
      serviceName: 'webapp',
      imageName: 'ubuntu'
    });
  });

  it('creates files', () => {
    assert.file(['docker-compose.yml']);
  });
});
