<template>
	<!-- 列设置 -->
	<el-drawer title="列设置" v-model="drawerVisible" size="500px">
		<div class="flex align-center justify-center" ref="colTableRef">
			<el-table :data="colSetting" :border="true" row-key="prop" default-expand-all :tree-props="{ children: '_children' }">
				<el-table-column prop="label" align="center" label="列名" />
				<el-table-column width="100" prop="isShow" align="center" label="显示" v-slot="scope">
					<el-switch v-model="scope.row.isShow"></el-switch>
				</el-table-column>
				<el-table-column width="100" prop="sortable" align="center" label="排序" v-slot="scope">
					<el-switch v-model="scope.row.sortable"></el-switch>
				</el-table-column>
				<template #empty>
					<div class="table-empty">
						<el-empty description="暂无数据" />
					</div>
				</template>
			</el-table>
		</div>
	</el-drawer>
</template>

<script setup lang="ts" name="colSetting">
import { ref } from 'vue';
import { ColumnProps } from '@/components/ProTable/interface';

defineProps<{ colSetting: ColumnProps[] }>();

const drawerVisible = ref<boolean>(false);
// 打开列设置
const openColSetting = () => {
	drawerVisible.value = true;
};

defineExpose({
	openColSetting
});
</script>

<style scoped lang="scss">
.cursor-move {
	cursor: move;
}
</style>
