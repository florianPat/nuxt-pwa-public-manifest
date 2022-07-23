import { join } from 'path'
import { defineNuxtModule, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'pwa-public-manifest',
    configKey: 'pwa-public-manifest'
  },
  defaults: {},
  setup (options, nuxt) {
    const pwaManifest = nuxt.options.runtimeConfig.pwaManifest

    if (!pwaManifest) {
      return
    }
    const { nitro, buildDir } = nuxt.options

    const _buildDir = join(buildDir, 'pwa-public-manifest')
    nitro.publicAssets = nitro.publicAssets || []
    nitro.publicAssets.push({ dir: _buildDir, baseURL: '/' })

    addTemplate({
      getContents: () => JSON.stringify(pwaManifest),
      dst: join(_buildDir, 'manifest.json'),
      write: true,
      filename: 'manifest.json'
    })
  }
})
