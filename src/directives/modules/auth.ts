/**
 * v-auth
 * 按钮权限指令
 */
import type { Directive } from 'vue'

const auth: Directive = {
  mounted: (el, binding) => {
    if (!useAuth().auth(binding.value)) {
      el.remove()
    }
  },
}
export default auth
