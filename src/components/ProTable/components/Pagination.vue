<script setup lang="ts">
defineOptions({
  name: 'Pagination',
})
withDefaults(defineProps<PaginationProps>(), {
  pageLayout: 'total, sizes, prev, pager, next',
})

interface Pageable {
  pageNum: number
  pageSize: number
  total: number
}

interface PaginationProps {
  pageable: Pageable
  handleSizeChange: (size: number) => void
  handleCurrentChange: (currentPage: number) => void
  pageLayout?: string
}
</script>

<template>
  <!-- 分页组件 -->
  <el-pagination
    :current-page="pageable.pageNum"
    :page-size="pageable.pageSize"
    :background="true"
    :page-sizes="[10, 25, 50, 100]"
    :total="pageable.total"
    :layout="pageLayout"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
