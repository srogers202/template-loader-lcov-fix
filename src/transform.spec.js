let
	should = require('should'),
	t = require('./transform');

describe('Transform', () => {

	it('should handle empty lines', () => {
		should(t.transform('')).equal('');
	});

	it('should handle basic strings', () => {
		should(t.transform('test string')).equal('test string');
	});

	it('should handle file paths without prefixes', () => {
		should(t.transform('/User/fname/test.log')).equal('/User/fname/test.log');
	});

	it('should handle file paths with prefixes', () => {
		should(t.transform('SF:/User/fname/test.log')).equal('SF:/User/fname/test.log');
	});

    it('should transform file paths with prefixes', () => {
        should(t.transform('SF:/User/fname/test/node_modules/angular2-template-loader/index.js!/User/fname/test.log')).equal('SF:/User/fname/test.log');
    });
});
