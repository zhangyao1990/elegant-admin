<!--
 * @Descripttion: 表格选择器组件
 * @version: 1.3
 * @Author: 97972619@qq.com
 * @Date: 2023年01月11日10:04:07
 * @LastEditors:
 * @LastEditTime:
-->
<template>
	<el-select
		ref="selectRef"
		class="w-full"
		v-model="state.defaultValue"
		v-if="state.defaultValue"
		:size="size"
		:clearable="clearable"
		:multiple="multiple"
		:collapse-tags="collapseTags"
		:collapse-tags-tooltip="collapseTagsTooltip"
		:placeholder="placeholder"
		:disabled="disabled"
		:filter-method="filterMethod"
		@remove-tag="handleRemoveTag"
		@visible-change="visibleChange"
		@clear="handleClear"
	>
		<template #empty>
			<div class="close-icon">
				<el-icon class="el-dialog__close cursor-pointer" @click="selectRef.blur()">
					<svg-icon name="ep:close-bold" />
				</el-icon>
			</div>
			<div class="ele-table-select__table" :style="{ width: tableWidth + '' }" v-loading="state.loading">
				<div class="ele-table-select__header">
					<slot name="header" :form="state.formData" :submit="formSubmit"></slot>
				</div>
				<el-table
					ref="tableRef"
					:data="state.tableData"
					:height="245"
					:highlight-current-row="!multiple"
					@row-click="handleTableClick"
					@select="handleSelect"
					@select-all="handleSelectAll"
					border
				>
					<el-table-column v-if="multiple" type="selection" width="60"></el-table-column>
					<el-table-column v-else type="index" width="60" label="#" align="center">
						<template #default="scope"
							><span>{{ scope.$index + (state.currentPage - 1) * state.pageSize + 1 }}</span></template
						>
					</el-table-column>
					<slot></slot>
				</el-table>
				<div class="ele-table-select__page flex justify-between">
					<el-pagination
						small
						background
						layout="prev, pager, next, total"
						:total="state.total"
						:page-size="state.pageSize"
						v-model:currentPage="state.currentPage"
						@current-change="reload"
					></el-pagination>
					<div v-if="multiple" @click="selectRef.blur()">
						<el-button type="primary">确 认</el-button>
					</div>
				</div>
			</div>
		</template>
	</el-select>
</template>

<script lang="ts" name="ProTableSelect" setup>
import config from './index.ts';
interface PaginationProps {
	requestApi: (params: any) => Promise<any>; // 请求表格数据的api ==> 必传
	modelValue: any;
	propsObj?: object;
	placeholder?: string;
	size?: any;
	clearable?: boolean;
	multiple?: boolean;
	collapseTags?: boolean;
	collapseTagsTooltip?: boolean;
	disabled?: boolean;
	tableWidth?: string;
	params: object;
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<PaginationProps>(), {
	modelValue: null,
	placeholder: '请选择',
	size: 'default',
	clearable: true,
	multiple: false,
	collapseTags: false,
	collapseTagsTooltip: false,
	disabled: false,
	tableWidth: '600px'
});
const state = reactive<any>({
	loading: false,
	keyword: null,
	defaultValue: [],
	tableData: [],
	pageSize: config.pageSize,
	total: 0,
	currentPage: 1,
	defaultProps: {
		label: config.props.label,
		value: config.props.value,
		page: config.request.page,
		pageSize: config.request.pageSize,
		keyword: config.request.keyword
	},
	formData: {}
});
watch(
	() => props.modelValue,
	newVal => {
		state.defaultValue = newVal;
		autoCurrentLabel();
	},
	{ deep: true }
);
const emits = defineEmits(['update:modelValue', 'changeEmit']);
onMounted(() => {
	state.defaultProps = Object.assign(state.defaultProps, props.propsObj);
	if (props.multiple) {
		state.defaultValue = props.modelValue || [];
	} else {
		state.defaultValue = props.modelValue || {};
	}
	autoCurrentLabel();
});
//表格显示隐藏回调
function visibleChange(visible: any) {
	if (visible) {
		state.currentPage = 1;
		state.keyword = null;
		state.formData = {};
		getData();
	} else {
		autoCurrentLabel();
	}
}
//获取表格数据
const tableRef = ref();
const getData = async () => {
	state.loading = true;
	let reqData = {
		[state.defaultProps.page]: state.currentPage,
		[state.defaultProps.pageSize]: state.pageSize,
		[state.defaultProps.keyword]: state.keyword
	};
	Object.assign(reqData, props.params, state.formData);
	let res = await props.requestApi(reqData);
	let parseData = config.parseData(res);
	state.tableData = parseData.data.records ? parseData.data.records : parseData.data;
	state.total = parseData.data.total;
	state.loading = false;
	//表格默认赋值
	await nextTick(() => {
		//表格默认赋值
		if (props.multiple) {
			state.defaultValue.forEach((row: any) => {
				let setRow = state.tableData.filter((item: any) => item[state.defaultProps.value] === row[state.defaultProps.value]);
				if (setRow.length > 0) {
					nextTick(() => {
						tableRef.value.toggleRowSelection(setRow[0], true);
					});
				}
			});
		} else {
			let setRow = state.tableData.filter(
				(item: any) => item[state.defaultProps.value] === state.defaultValue[state.defaultProps.value]
			);
			if (setRow.length > 0) {
				nextTick(() => {
					tableRef.value.setCurrentRow(setRow[0]);
				});
			}
		}
		tableRef.value.setScrollTop(0);
	});
};
//插糟表单提交
function formSubmit() {
	state.currentPage = 1;
	state.keyword = null;
	getData();
}
//分页刷新表格
function reload() {
	getData();
}
//自动模拟options赋值
const selectRef = ref();
const autoCurrentLabel = () => {
	nextTick(() => {
		if (props.multiple) {
			if (selectRef.value) {
				selectRef.value.selected.forEach((item: any) => {
					item.currentLabel = item.value[state.defaultProps.label];
				});
			}
		} else {
			if (state.defaultValue && state.defaultValue[state.defaultProps.label]) {
				selectRef.value.selectedLabel = state.defaultValue[state.defaultProps.label];
			}
		}
	});
};
//表格勾选事件
const handleSelect = (rows: any, row: any) => {
	const isSelect = rows.length && rows.indexOf(row) !== -1;
	if (isSelect) {
		state.defaultValue.push(row);
	} else {
		state.defaultValue.splice(
			state.defaultValue.findIndex((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]),
			1
		);
	}
	autoCurrentLabel();
	emits('update:modelValue', state.defaultValue);
	emits('changeEmit', state.defaultValue);
};
//表格全选事件
function handleSelectAll(rows: any) {
	const isAllSelect = rows.length > 0;
	if (isAllSelect) {
		rows.forEach((row: any) => {
			const isHas = state.defaultValue.find((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]);
			if (!isHas) {
				state.defaultValue.push(row);
			}
		});
	} else {
		state.tableData.forEach((row: any) => {
			const isHas = state.defaultValue.find((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]);
			if (isHas) {
				state.defaultValue.splice(
					state.defaultValue.findIndex((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]),
					1
				);
			}
		});
	}
	autoCurrentLabel();
	emits('update:modelValue', state.defaultValue);
	emits('changeEmit', state.defaultValue);
}
//点击表格行
function handleTableClick(row: any) {
	if (props.multiple) {
		//处理多选点击行
		tableRef.value.toggleRowSelection(row);
		const isHas = state.defaultValue.find((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]);
		if (isHas) {
			state.defaultValue.splice(
				state.defaultValue.findIndex((item: any) => item[state.defaultProps.value] == row[state.defaultProps.value]),
				1
			);
		} else {
			state.defaultValue.push(row);
		}
	} else {
		state.defaultValue = row;
		selectRef.value.blur();
		autoCurrentLabel();
	}
	emits('update:modelValue', state.defaultValue);
	emits('changeEmit', state.defaultValue);
}
//tags删除后回调
function handleRemoveTag(tag: any) {
	const row = findRowByKey(tag[state.defaultProps.value]);
	tableRef.value.toggleRowSelection(row, false);
	emits('update:modelValue', state.defaultValue);
	emits('changeEmit', state.defaultValue);
}
// 关键值查询表格数据行
function findRowByKey(value: any) {
	return state.tableData.find((item: any) => item[state.defaultProps.value] === value);
}
//清空后的回调
function handleClear() {
	if (props.multiple) {
		state.defaultValue = [];
	} else {
		state.defaultValue = {};
	}
	emits('changeEmit', state.defaultValue);
	emits('update:modelValue', state.defaultValue);
}
const filterMethod = (keyword: any) => {
	if (!keyword) {
		keyword = null;
		return false;
	}
	state.keyword = keyword;
	getData();
};
// 触发select隐藏
function handleBlur() {
	selectRef.value.blur();
}
// 触发select显示
function handleFocus() {
	selectRef.value.focus();
}
</script>

<style lang="scss" scoped>
.ele-table-select__table {
	padding: 12px;
	.ele-table-select__header {
		:deep(.el-form-item) {
			margin-right: 10px;
		}
		:deep(.el-form-item__content) {
			width: 200px;
		}
	}
}
.ele-table-select__page {
	padding-top: 12px;
	.el-pagination {
		:deep(.el-pagination__total) {
			margin-left: 10px;
		}
	}
}
:deep(.el-table__row) {
	cursor: pointer;
}
.close-icon {
	padding-top: 10px;
	padding-right: 10px;
	text-align: right;
}
</style>
