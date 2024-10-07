import { pluginManager } from '../utils'

export function setupElementPlus() {
  import('./elementPlus').then(({ setupElementPlus }) => {
    setupElementPlus.bind(null, pluginManager)()
  })
}
