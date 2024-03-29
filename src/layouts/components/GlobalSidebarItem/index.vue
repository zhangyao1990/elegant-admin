<template>
	<div class="sidebar-item">
		<router-link
			v-if="!hasChildren"
			v-slot="{ href, navigate, isActive, isExactActive }"
			custom
			:to="resolveRoutePath(basePath, item.path || '')"
		>
			<a
				:href="isExternalLink(resolveRoutePath(basePath, item.path || '')) ? resolveRoutePath(basePath, item.path || '') : href"
				:class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
				:target="isExternalLink(resolveRoutePath(basePath, item.path || '')) ? '_blank' : '_self'"
				@click="navigate"
			>
				<el-menu-item :title="item.meta.title" :index="resolveRoutePath(basePath, item.path || '')">
					<el-icon v-if="item.meta.icon" class="title-icon">
						<svg-icon :name="item.meta.icon" />
					</el-icon>
					<span class="title">{{ item.meta.title }}</span>
				</el-menu-item>
			</a>
		</router-link>
		<el-sub-menu v-else :title="item.meta.title" :index="resolveRoutePath(basePath, item.path || '')">
			<template #title>
				<el-icon v-if="item.meta.icon" class="title-icon">
					<svg-icon :name="item.meta.icon" />
				</el-icon>
				<span class="title">{{ item.meta.title }}</span>
			</template>
			<template v-for="route in item.children">
				<SidebarItem
					v-if="route.meta.sidebar !== false"
					:key="route.path"
					:item="route"
					:base-path="resolveRoutePath(basePath, item.path || '')"
				/>
			</template>
		</el-sub-menu>
	</div>
</template>
<script lang="ts" setup name="SidebarItem">
import { isExternalLink, resolveRoutePath } from '@/utils';
import type { Menu } from '#/global';

const props = defineProps({
	item: {
		type: Object as () => Menu.recordRaw,
		required: true
	},
	basePath: {
		type: String,
		default: ''
	}
});

const hasChildren = computed(() => {
	let flag = true;
	if (props.item.children && props.item?.children?.length) {
		if (props.item.children.every(item => item.meta.sidebar === false)) {
			flag = false;
		}
	} else {
		flag = false;
	}
	return flag;
});
</script>
<style lang="scss" scoped>
:deep(.el-menu-item),
:deep(.el-menu-item span.title),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu__title span.title) {
	flex: 1;
	vertical-align: inherit;

	@include text-overflow;
}
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
	display: flex;
	align-items: center;
	justify-content: center;
}
:deep(.el-sub-menu),
:deep(.el-menu-item) {
	.title-icon {
		width: 20px;
		font-size: 20px;
		color: unset;
		vertical-align: -0.25em;
		transition: transform 0.3s;
	}
	.title-icon + .title {
		margin-left: 10px;
	}
}
a {
	color: inherit;
	text-decoration: none;
	cursor: pointer;
}
.el-sub-menu__title {
	> .badge {
		&-dot {
			right: 40px;
		}
		&-text {
			right: 40px;
		}
	}
}
</style>

<style lang="scss">
.el-menu--inline {
	.el-menu-item,
	.el-sub-menu > .el-sub-menu__title {
		margin: 5px 10px 0;
		color: var(--g-sub-sidebar-menu-color);
		border-radius: 7px;
		&:hover {
			color: var(--g-sub-sidebar-menu-hover-color) !important;
			background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
		}
	}
}
.el-menu-item,
.el-sub-menu__title {
	margin: 5px 10px 0;
	color: var(--g-sub-sidebar-menu-color) !important;
	background: transparent !important;
	border-radius: 7px;
	&:hover {
		color: var(--g-sub-sidebar-menu-hover-color) !important;
		background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
	}
}
.el-menu-item.is-active,
.el-menu--collapse .el-sub-menu.is-active > .el-sub-menu__title,
.el-sub-menu .el-menu--inline .el-menu-item.is-active {
	margin: 5px 10px 0;
	color: var(--g-sub-sidebar-menu-active-color) !important;
	background-color: var(--g-sub-sidebar-menu-active-bg) !important;
	border-radius: 7px;
	.icon,
	.el-sub-menu__icon-arrow {
		color: unset;
	}
}
</style>
