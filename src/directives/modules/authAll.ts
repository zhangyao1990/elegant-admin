/**
 * v-auth-all
 * 按钮权限指令
 */
import type { Directive } from 'vue'

const authAll: Directive = {
  mounted: (el, binding) => {
    if (!useAuth().authAll(binding.value)) {
      el.remove()
    }
  },
}
export default authAll
