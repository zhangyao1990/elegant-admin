import type { RouteRecordRaw, RouteMeta } from 'vue-router';
declare type Nullable<T> = T | null;
/** 枚举的key类型 */
declare namespace EnumType {
	/** 多页签风格 */
	type ThemeTabMode = keyof typeof import('@/enums/common').EnumThemeTabMode;
}
type RecursiveRequired<T> = {
	[P in keyof T]-?: RecursiveRequired<T[P]>;
};

declare namespace Settings {
	interface app {
		/**
		 * 颜色方案
		 * @默认值 `''` 跟随系统
		 * @可选值 `'light'` 明亮模式
		 * @可选值 `'dark'` 暗黑模式
		 */
		colorScheme?: '' | 'light' | 'dark';
		/**
		 * 主题颜色
		 * @默认值 `''`
		 */
		themeColor?: string;
		/**
		 * Element Plus 组件默认尺寸
		 * @默认值 `'default'` 默认
		 * @可选值 `'large'` 大号
		 * @可选值 `'small'` 小号
		 */
		elementSize?: 'default' | 'large' | 'small';
		/**
		 * 是否将 iconify 图标集中的 Element Plus 图标下载到本地，以便在离线环境下使用
		 * @默认值 `false`
		 */
		iconifyOfflineUse?: boolean;
		/**
		 * 是否开启权限功能
		 * @默认值 `false`
		 */
		enablePermission?: boolean;
		/**
		 * 是否开启载入进度条
		 * @默认值 `true`
		 */
		enableProgress?: boolean;
		/**
		 * 是否开启动态标题
		 * @默认值 `false`
		 */
		enableDynamicTitle?: boolean;
		/**
		 * 路由数据来源
		 * @默认值 `'frontend'` 前端
		 * @可选值 `'backend'` 后端
		 */
		routeBaseOn?: 'frontend' | 'backend' | 'filesystem';
	}
	interface home {
		/**
		 * 是否开启控制台页面
		 * @默认值 `true`
		 */
		enable?: boolean;
		/**
		 * 控制台名称
		 * @默认值 `'控制台'`
		 */
		title?: string;
	}

	interface layout {
		/**
		 * 是否开启移动端适配，开启后当页面宽度小于 992px 时自动切换为移动端展示
		 * @默认值 `false`
		 */
		enableMobileAdaptation?: boolean;
	}
	/** 多页签样式 */
	interface tab {
		/** 多页签可见 */
		visible: boolean;
		/** 多页签风格 */
		mode: EnumType.ThemeTabMode;
		/** 多页签风格列表 */
		modeList: themeTabModeList[];
	}

	/** 多页签风格列表 */
	interface themeTabModeList {
		value: EnumType.ThemeTabMode;
		label: import('@/enums/common').EnumThemeTabMode;
	}

	interface menu {
		/**
		 * 导航栏模式
		 * @默认值 `'side'` 侧边栏模式（有主导航）
		 * @可选值 `'head'` 顶部模式
		 * @可选值 `'single'` 侧边栏模式（无主导航）
		 */
		menuMode?: 'side' | 'head' | 'single';
		/**
		 * 切换主导航是否跳转页面
		 * @默认值 `false`
		 */
		switchMainMenuAndPageJump?: boolean;
		/**
		 * 次导航是否只保持一个子项的展开
		 * @默认值 `true`
		 */
		subMenuUniqueOpened?: boolean;
		/**
		 * 次导航是否收起
		 * @默认值 `false`
		 */
		subMenuCollapse?: boolean;
		/**
		 * 是否开启次导航的展开/收起按钮
		 * @默认值 `false`
		 */
		enableSubMenuCollapseButton?: boolean;
		/**
		 * 是否开启主导航切换快捷键
		 * @默认值 `false`
		 */
		enableHotkeys?: boolean;
	}

	interface topbar {
		/**
		 * 是否固定顶栏
		 * @默认值 `true`
		 */
		fixed?: boolean;
	}

	interface toolbar {
		/**
		 * 是否开启全屏
		 * @默认值 `false`
		 */
		enableFullscreen?: boolean;
		/**
		 * 是否开启页面刷新
		 * @默认值 `false`
		 */
		enablePageReload?: boolean;
		/**
		 * 是否开启颜色主题
		 * @默认值 `false`
		 */
		enableColorScheme?: boolean;
		/**
		 * 是否开启应用配置，强烈建议在生产环境中关闭
		 * @默认值 `false`
		 */
		enableAppSetting?: boolean;
	}

	interface breadcrumb {
		/**
		 * 是否开启面包屑导航
		 * @默认值 `true`
		 */
		enable?: boolean;
	}

	interface navSearch {
		/**
		 * 是否开启导航搜索
		 * @默认值 `true`
		 */
		enable?: boolean;
		/**
		 * 是否开启导航搜索快捷键
		 * @默认值 `true`
		 */
		enableHotkeys?: boolean;
	}

	interface copyright {
		/**
		 * 是否开启底部版权，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
		 * @默认值 `true`
		 */
		enable?: boolean;
		/**
		 * 网站运行日期
		 * @默认值 `'2020-2022'`
		 */
		dates?: string;
		/**
		 * 公司名称
		 * @默认值 `'Elegant-admin'`
		 */
		company?: string;
	}

	interface all {
		/** 应用设置 */
		app?: app;
		/** 控制台设置 */
		home?: home;
		/** 布局设置 */
		layout?: layout;
		/** 多页签设置 */
		tab?: tab;
		/** 导航栏设置 */
		menu?: menu;
		/** 顶栏设置 */
		topbar?: topbar;
		/** 工具栏设置 */
		toolbar?: toolbar;
		/** 面包屑导航设置 */
		breadcrumb?: breadcrumb;
		/** 导航搜索设置 */
		navSearch?: navSearch;
		/** 底部版权设置 */
		copyright?: copyright;
	}
}

declare module 'vue-router' {
	interface RouteMeta {
		title: string | Function;
		i18n?: string;
		icon?: string;
		activeIcon?: string;
		defaultOpened?: boolean;
		auth?: string | string[];
		sidebar?: boolean;
		breadcrumb?: boolean;
		activeMenu?: string;
		cache?: boolean | string | string[];
		breadcrumbNeste?: Route.breadcrumb[];
	}
}

declare namespace Route {
	interface recordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
		meta: RouteMeta;
		children?: recordRaw[];
	}

	interface recordMainRaw {
		name: string;
		meta: {
			title?: string | Function;
			icon?: string;
			auth?: string | string[];
		};
		children: recordRaw[];
	}

	interface breadcrumb {
		path: string;
		title?: string | Function;
		hide: boolean;
	}
}

declare namespace Menu {
	/** 原始 */
	interface recordRaw {
		path?: string;
		meta: {
			title: string;
			icon?: string;
			defaultOpened?: boolean;
			auth?: string | string[];
			sidebar?: boolean;
			link?: string;
		};
		children?: recordRaw[];
	}

	/** 主导航 */
	interface recordMainRaw {
		meta: {
			title?: string;
			icon?: string;
			auth?: string | string[];
		};
		children: recordRaw[];
	}
}

/** vue 的defineExpose导出的类型 */
declare namespace Expose {
	interface BetterScroll {
		instance: import('@better-scroll/core').BScrollInstance;
	}
}
interface anyObj {
	[key: string]: any;
}
