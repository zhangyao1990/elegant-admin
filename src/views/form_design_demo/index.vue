<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { EDesigner, type PageSchema } from '@/components/FormDesign/core'

const router = useRouter()
const designerRef = ref<InstanceType<typeof EDesigner>>()

const pageSchema = {
  schemas: [
    {
      type: 'page',
      id: 'root',
      label: '页面',
      children: [
        {
          label: '表单',
          type: 'form',
          icon: 'elegant-icon-daibanshixiang',
          componentProps: {
            'layout': 'horizontal',
            'name': 'default',
            'labelWidth': 100,
            'labelLayout': 'fixed',
            'labelCol': {
              span: 5,
            },
            'wrapperCol': {
              span: 19,
            },
            'hideRequiredMark': false,
            'colon': true,
            'labelAlign': 'right',
            'size': 'default',
            'label-position': 'top',
          },
          children: [
            {
              label: '1、您的身份是',
              type: 'radio',
              field: 'radio_xpls3ww4',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '家长',
                    value: 'option_22i498sd',
                  },
                  {
                    label: '学生',
                    value: 'option_b94fenks',
                  },
                ],
                size: 'default',
              },
              id: 'radio_xpls3ww4',
            },
            {
              label: '2、您（或您的孩子）所选择课程是',
              type: 'radio',
              field: 'radio_uonztj0i',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '语文',
                    value: 'option_22i498sd',
                  },
                  {
                    label: '数学',
                    value: 'option_uc1rdff4',
                  },
                  {
                    label: '英语',
                    value: 'option_n96uigyg',
                  },
                ],
                size: 'default',
              },
              id: 'radio_uonztj0i',
            },
            {
              label: '3、授课老师为',
              type: 'select',
              field: 'select_jvojdh2k',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '托尼老师',
                    value: 'option_694vkr5f',
                  },
                  {
                    label: '张三丰老师',
                    value: 'option_1huuovdc',
                  },
                  {
                    label: '张雪峰老师',
                    value: 'option_n9il8y2c',
                  },
                ],
                placeholder: '请选择',
                size: 'default',
                effect: 'light',
                placement: 'bottom-start',
              },
              id: 'select_jvojdh2k',
            },
            {
              label: '4、您有极大可能把我们推荐给身边的朋友',
              type: 'radio',
              field: 'radio_jm1kxy75',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '不可能',
                    value: 'option_22i498sd',

                  },
                  {
                    label: '极有可能',
                    value: 'option_awrynffg',

                  },
                ],
                size: 'default',
              },
              id: 'radio_jm1kxy75',
            },
            {
              label: '请从0到10进行打分',
              type: 'slider',
              field: 'slider_es0mehas',
              input: true,
              componentProps: {
                placement: 'top-start',
                showTooltip: true,
                hidden: true,
                style: {
                  backgroundColor: null,
                },
              },
              id: 'slider_es0mehas',
            },
            {
              label: '5、您对课程的满意程度为？',
              type: 'radio',
              field: 'radio_cdlaku47',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '很不满意',
                    value: 'option_22i498sd',

                  },
                  {
                    label: '非常满意',
                    value: 'option_vzx5c2l3',

                  },
                ],
                size: 'default',
              },
              id: 'radio_cdlaku47',
            },
            {
              label: '请从0到10进行打分',
              type: 'slider',
              field: 'slider_ggjxvqg7',
              input: true,
              componentProps: {
                placement: 'top-start',
                showTooltip: true,
                hidden: true,
                style: {},
              },
              id: 'slider_ggjxvqg7',
            },
            {
              label: '6、上课后，学生成绩是否有所提高？',
              type: 'radio',
              field: 'radio_f8ntslo0',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '明显提高',
                    value: 'option_22i498sd',
                  },
                  {
                    label: '有所提高',
                    value: 'option_umfx0rva',
                  },
                  {
                    label: '没有明显效果',
                    value: 'option_1prpfoag',
                  },
                ],
                size: 'default',
              },
              id: 'radio_f8ntslo0',
            },
            {
              label: '7、您是否愿意继续参加我们的其他课程？',
              type: 'radio',
              field: 'radio_at4xbyag',
              input: true,
              componentProps: {
                options: [
                  {
                    label: '愿意继续参加',
                    value: 'option_22i498sd',
                  },
                  {
                    label: '需要考虑',
                    value: 'option_s48xc4ws',
                  },
                  {
                    label: '不再参加',
                    value: 'option_018npznl',
                  },
                ],
                size: 'default',
              },
              id: 'radio_at4xbyag',
            },
            {
              label: '8、您的意见和建议',
              type: 'textarea',
              field: 'textarea_5im11oab',
              input: true,
              componentProps: {
                placeholder: '请输入',
                type: 'textarea',
                autosize: {
                  maxRows: 5,
                  minRows: 5,
                },
                maxlength: 500,
              },
              id: 'textarea_5im11oab',
            },
          ],
          id: 'form_eifo73no',
        },
      ],
      componentProps: {
        style: {
          padding: '16px',
        },
      },
    },
  ],
  script: 'const { defineExpose, find } = elegant;\n\nfunction test (){\n    console.log(\'test\')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})',
}

onMounted(() => {
  designerRef.value?.setData(pageSchema)
})

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>

<template>
  <EDesigner ref="designerRef" title="调查问卷" @save="handleSubmit">
    <template #header-prefix>
      <div class="header-back ml-10px flex cursor-pointer items-center rounded-4px px-10px py-4px text-18px font-500" @click="router.back()">
        <SvgIcon name="ep:back" />
        <span class="ml-4px text-14px">返回</span>
      </div>
    </template>
  </EDesigner>
</template>

<style lang="scss" scoped>
.header-back {
  &:hover {
    color: var(--g-ui-primary);
    background-color: var(--g-ui-primary-light-8);
  }
}
</style>
