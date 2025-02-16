import pkg from './package.json' with { type: 'json' };

/** @type {import('typedoc').TypeDocOptions} */
const config = {
  name: pkg.title,
  includeVersion: true,
  titleLink: pkg.repository.url.replace(/^git\+/, ''),
  entryPoints: [
    'src/index.ts'
  ],
  out: './docs',
  readme: './README.md',
  tsconfig: './tsconfig.json',
  plugin: [ '@typhonjs-typedoc/typedoc-theme-dmt', 'typedoc-plugin-rename-defaults' ],
  theme: 'default-modern',
  cacheBust: true,
  sort: true,
  useTsLinkResolution: false,
  gitRemote: 'origin',
  logLevel: 'Verbose',

  // @typhonjs-typedoc/typedoc-theme-dmt Configuration
  dmtFavicon: undefined,
  dmtLinksService: {
    GitHub: 'https://github.com/mitsuki31/deepget',
    NPM: 'https://npmjs.com/package/@mitsuki31/deepget'
  },
  dmtNavigation: {
    moduleIcon: true,
    style: 'full'
  },
  dmtSearch: {
    fullName: false,
    limit: 10
  },
  dmtSettings: {
    animation: true
  }
};

export default config;
