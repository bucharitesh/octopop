<div align="center">
  <h1>@hideoo/prettier-config 📐</h1>
  <p>HiDeoo's Prettier configuration</p>
</div>

<div align="center">
  <a href="https://github.com/HiDeoo/prettier-config/blob/main/LICENSE">
    <img alt="License" src="https://badgen.net/github/license/hideoo/prettier-config" />
  </a>
  <br /><br />
</div>

## Usage

### Install

```shell
$ pnpm add -D prettier @hideoo/prettier-config
```

### Configure

Reference the configuration in your `package.json` file:

```json
{
  "prettier": "@hideoo/prettier-config"
}
```

Alternatively, you can also extends the configuration through a [configuration file](https://prettier.io/docs/en/configuration.html). This is particularly useful when using some [Prettier plugins](https://prettier.io/docs/en/plugins.html), e.g. with a `.prettierrc.cjs` file:

```js
const baseConfig = require('@hideoo/prettier-config')

/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  ...baseConfig,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro'],
}

module.exports = prettierConfig
```

_As of 07/19/2023, Prettier v3 does support [ESM configuration files](https://prettier.io/docs/en/configuration.html#configuration-file) but using an `import` statement will result in [an error](https://github.com/prettier/prettier-vscode/issues/3066) in the VSCode Prettier extension._

### Run

Add a script in your `package.json` file to run Prettier:

```json
{
  "scripts": {
    "lint": "prettier -c --cache ."
  }
}
```

## License

Licensed under the MIT License, Copyright © HiDeoo.

See [LICENSE](https://github.com/HiDeoo/prettier-config/blob/main/LICENSE) for more information.
