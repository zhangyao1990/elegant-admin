import { createHtmlPlugin } from 'vite-plugin-html';

const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;';
const copyright_main_style = `${copyright_common_style} background: #707070;`;
const copyright_sub_style = `${copyright_common_style} background: #707070;`;

export default function createHtml(env: any, isBuild: any) {
	const { VITE_APP_TITLE, VITE_APP_DEBUG_TOOL, VITE_APP_MODE } = env;
	let copyrightScript = `
<script>
if ((navigator.language || navigator.browserLanguage).toLowerCase() === 'zh-cn') {
  console.info('%c由%cElegant-admin%c提供技术支持', '${copyright_sub_style}', '${copyright_main_style}', '${copyright_sub_style}', '\\nhttps://github.com/zhangyao1990/elegant-admin');
} else {
  console.info('%cPowered by%cElegant-admin', '${copyright_sub_style}', '${copyright_main_style}', '\\nhttps://github.com/zhangyao1990/elegant-admin');
}
</script>
  `;
	if (VITE_APP_MODE === 'prod') {
		copyrightScript += `
<script>
  const _hmt = _hmt || [];
  _hmt.push(['_requirePlugin', 'UrlChangeTracker', {
    shouldTrackUrlChange: function(newPath, oldPath) {
      return newPath && oldPath;
    }
  }]);
  (function() {
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c31a3e8267162de8420bc73e06d62463";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
</script>
    `;
	}
	let devtoolScript = '';
	switch (VITE_APP_DEBUG_TOOL) {
		case 'eruda':
			devtoolScript = `
<script src="//unpkg.com/eruda/eruda.js"></script>
<script>
  eruda.init()
</script>
      `;
			break;
		case 'vconsole':
			devtoolScript = `
<script src="//unpkg.com/vconsole/dist/vconsole.min.js"></script>
<script>
  new VConsole()
</script>
      `;
			break;
	}
	const loadingScript = `
<script>
(function(){
  if(!!window.ActiveXObject || "ActiveXObject" in window) {
    document.getElementById('browser-upgrade').style.display = 'block'
  } else {
    const Loading = document.querySelector('.loading-box');
    Loading.classList.add('animate')
    Loading.addEventListener('animationend', function() {
      setTimeout(function() {
        Loading.classList.remove('animate')
      }, 600)
      setTimeout(function() {
        Loading.classList.add('animate')
      }, 1000)
    })
  }
})()
</script>
  `;
	const html = createHtmlPlugin({
		inject: {
			data: {
				title: VITE_APP_TITLE,
				copyrightScript,
				loadingScript,
				devtoolScript
			}
		},
		minify: isBuild
	});
	return html;
}
