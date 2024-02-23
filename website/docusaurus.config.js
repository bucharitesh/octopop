const path = require('path');

const pkgNames = ['utils'];

const pkgs = pkgNames.map((name) => require(`../packages/${name}/package.json`));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octopop',
  tagline:
    'React library to safely render HTML, filter attributes, autowrap text with matchers, render emoji characters, and much more.',
  url: 'https://octopop.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'octopop',
  projectName: 'octopop',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '..'),
        packages: [...pkgNames.map((pkg) => `packages/${pkg}`)],
        minimal: true,
        readmes: true,
        debug: false,
        tsconfigName: 'tsconfig.docs.json',
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bucharitesh/octopop/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/bucharitesh/octopop/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Octopop',
      logo: {
        alt: 'Octopop',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: `v${pkgs[0].version}`,
          position: 'left',
          items: pkgs.map((pkg) => ({
            label: `v${pkg.version} · ${pkg.name}`,
            href: `https://www.npmjs.com/package/${pkg.name}`,
          })),
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/bucharitesh/octopop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Miles Johnson. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
  },
};

module.exports = config;
