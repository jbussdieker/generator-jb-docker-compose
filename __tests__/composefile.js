'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jb-docker-compose:composefile', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/composefile'))
      .withOptions({ configVersion: '3.7', serviceName: 'foo', imageName: 'ubuntu' });
  });

  it('creates files', () => {
    assert.file(['docker-compose.yml']);
  });
});
