'use strict';

const regex = /(SF:)(.*?)(\/angular2-template-loader\/index.js!)/,
	replace = 'SF:';

module.exports = {
    transform: (input) => {
        return input.replace(regex, replace);
    }
};
