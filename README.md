# template-loader-lcov-fix

[![Build Status](https://travis-ci.org/brianghig/template-loader-lcov-fix.svg)](https://travis-ci.org/brianghig/template-loader-lcov-fix)
[![Code Climate](https://codeclimate.com/github/brianghig/template-loader-lcov-fix/badges/gpa.svg)](https://codeclimate.com/github/brianghig/template-loader-lcov-fix)
[![Test Coverage](https://codeclimate.com/github/brianghig/template-loader-lcov-fix/badges/coverage.svg)](https://codeclimate.com/github/brianghig/template-loader-lcov-fix/coverage)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Template project for a node module

## Table of Contents

- [Use](#use)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Use
To use this template, install it and integrate it into your code coverage publishing pipeline.

See the gulpfile for tasks related to building the module.

## Install

Install this module globally via `npm install -g template-loader-lcov-fix` or as a devdependency.

## Usage

The intended use of this module is to act as a transform pipe for LCOV files that include paths to
angular2-template-loader outputs. Once it is available on the path, it can accept a file path and output
the fixed / transformed file that includes source paths that do not include the angular2-template-loader
prefix. For example:
```
template-loader-lcov-fix < lcov.original > lcov.fixed
```


## API


## Contribute

PRs accepted.


## License

See LICENSE for details
