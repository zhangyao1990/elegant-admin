/*
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *       ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                     ~-._      `''        /-~-~
 *                        `\              /  /
 *                           |         ,   | |
 *                            |  '        /  |
 *                             \/;          |
 *                              ;;          |
 *                              `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                            |)     \~-'      |
 *                             |      | \      '
 *                             |      |  \    :
 *                              \     |  |    |
 *                               |    )  (    )
 *                                \  /;  /\  |
 *                                |    |/   |
 *                                |    |   |
 *                                 \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                 |       |
 *                                  |       |
 *
 * @Description: 指令
 * @version:
 * @Date: 2023-02-07
 * @LastEditors:  97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */
import type { App } from 'vue'
import copy from './modules/copy'
import waterMarker from './modules/waterMarker'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import auth from './modules/auth'
import authAll from './modules/authAll'
import resizeObserver from './modules/resizeObserver'

const directivesList: any = {
  // Custom directives
  copy,
  auth,
  authAll,
  waterMarker,
  draggable,
  debounce,
  throttle,
  resizeObserver,
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  },
}

export default directives
