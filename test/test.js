'use strict';

var Mincer = require('mincer');
require('../')(Mincer);

var env = new Mincer.Environment(__dirname);
env.appendPath(__dirname + '/fixtures');

var compiledAsset = env.findAsset('example').toString();

if (compiledAsset.indexOf('<div>') > 0) {
  console.log('OK');
} else {
  console.error('Failed to compile ECO');
  console.log(compiledAsset);
  process.exit(1);
}