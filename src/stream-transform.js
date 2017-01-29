'use strict';

const
	os = require('os'),
	readline = require('readline'),

	t = require('./transform');

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
	process.stdout.write(t.transform(line));
	process.stdout.write(os.EOL);
});
