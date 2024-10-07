import { onMounted, reactive, toRefs } from 'vue'
export interface StateType {
  pool: string // 随机字符串
  width: number // 展示区域宽度
  height: number // 展示区域高度
  imgCode: string // 保存页面的内容（用来判断输入验证是否满足改code）
}
export function useVerify(verify: any) {
  const state = reactive<StateType>({
    pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', // 随机字符串
    width: 130, // 展示区域宽度
    height: 46, // 展示区域高度
    imgCode: '', // 保存页面的内容（用来判断输入验证是否满足改code）
  })
  // 随机数
  const randomNum = (min: any, max: any) => {
    return Number.parseInt(Math.random() * (max - min + 1) + min)
  }
  // 随机颜色
  const randomColor = (min: any, max: any) => {
    const r = randomNum(min, max)
    const g = randomNum(min, max)
    const b = randomNum(min, max)
    return `rgb(${r},${g},${b})`
  }
  // 绘制随机内容
  const draw = () => {
    /*
       *   一、填充颜色
       * 1、生成画布
       * 2、填充颜色与位置
       * 3、填充位置
       */
    const ctx = verify.value.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, state.width, state.height)

    /*
       *    二、生成6个随机数
       *  1、七扭八歪
       *  2、随机大小
       *　3、画吧柳梢，各种色儿
       */
    let imgCode = ''
    for (let i = 0; i < 4; i++) {
      const text = state.pool[randomNum(0, state.pool.length - 1)]

      const fontSize = randomNum(18, 40)
      const deg = randomNum(-30, 30)
      /*
         *  绘制文字并让四个文字在不同的位置显示的思路 :
         * 1、定义字体
         * 2、定义对齐方式
         * 3、填充不同的颜色
         * 4、保存当前的状态（以防止以上的状态受影响）
         * 5、平移translate()
         * 6、旋转 rotate()
         * 7、填充文字
         * 8、restore出栈
         * */
      ctx.font = `${fontSize}px Simhei`
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillStyle = randomColor(80, 150)

      ctx.save()
      ctx.translate(30 * i + 15, 15)
      ctx.rotate((deg * Math.PI) / 180)

      ctx.fillText(text, 5, 10)
      ctx.restore()
      imgCode += text
    }

    /*
       *   三、随机产生5条干扰线,干扰线的颜色要浅一点
       */
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
      ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
      ctx.strokeStyle = randomColor(180, 230)
      ctx.closePath()
      ctx.stroke()
    }

    /*
       *   四、随机产生40个干扰的小点
       */
    for (let i = 0; i < 40; i++) {
      ctx.beginPath()
      ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fillStyle = randomColor(150, 200)
      ctx.fill()
    }
    return imgCode
  }
  // 初始展示
  onMounted(() => {
    draw()
    state.imgCode = draw()
  })
  // 点击图片重新绘制
  const handleDraw = () => {
    draw()
    state.imgCode = draw()
  }

  return {
    ...toRefs(state),
    handleDraw,
    verify,
  }
}
