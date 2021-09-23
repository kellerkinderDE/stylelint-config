# Kellerkinder Stylelint Config

[![npm version](https://badge.fury.io/js/%40kellerkinder%2Fstylelint-config.svg)](https://badge.fury.io/js/%40kellerkinder%2Fstylelint-config)

This package provides the Kellerkinder Stylelint configuration supporting SCSS as well as [TailwindCSS](https://tailwindcss.com).
It is based on the [Stylelint Standard](https://github.com/stylelint/stylelint-config-standard)
with slight alterations.

## Requirements
This config has been developed and tested with the following requirements:
* NodeJS >= 12
* Stylelint >= 13.0.0

## Installation
In order to use this configuration, run the following scripts in your NodeJS project:

```bash
$ npm i -D stylelint stylelint-config-standard @kellerkinder/stylelint-config
```

## Usage
You can use this configuration by creating an `.stylelintrc.json` inside your
project's root directory that is extending this configuration.

```json
{
    "extends": ["@kellerkinder/stylelint-config"]
}
```

You can now execute Stylelint by running the following script:

```bash
$ npx stylelint src/
```

The `src/` directory can be replaced with the directory or file you want to lint.

If you want Stylelint to try to fix the errors it found, execute the following command:

```bash
$ npx stylelint src/ --fix
```

Alternatively, refer to your IDE's documentation to find out, if and how Stylelint
is integrated.

## Changelog
This project adheres to [Semantic Versioning](https://semver.org/). 
Please refer to the [CHANGELOG.md](CHANGELOG.md) for detailed changes and
migration instructions.

## License
MIT
