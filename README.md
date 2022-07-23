# Nuxt 3 module for manifest file generation from pwa module

- The Nuxt PWA Module generates the /manifest.json Route as a server side route, but in "no-ssr" mode their is no node server, which could produce the file. As the file just contains, as JSON-contents, of the icon and manifest configuration, this module creates the file at build time and outputs it into the build directory, so that the file is available in "no-ssr" mode.

## Setup

- Edit your `nuxt.config.ts` file to add the module after the PWA module:


```ts
{
  modules: [
    '@kevinmarrec/nuxt-pwa',
    'nuxt-pwa-public-manifest',
  ]
}
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
