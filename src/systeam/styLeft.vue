<template>
	<!-- <el-scrollbar >
		<el-menu
			:default-active="$route.path"
			class="el-menu-vertical-demo"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			@select="changeMenu"
			router
			:collapse="state"
		>
			<h3 v-show="state">骑猪</h3>
			<h3 v-show="!state">骑猪后台管理系统</h3>
			<el-submenu index="/">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">css样式</span>
				</template>
				<el-menu-item-group>
					<el-submenu index="/cssYS">
						<span slot="title">边框和背景</span>
						<el-menu-item index="/cssYS/HomePage">半透明边框</el-menu-item>
						<el-menu-item index="/cssYS/DuoBianKuang">多边框</el-menu-item>
						<el-menu-item index="/cssYS/beiJingWeiZhi">背景位置</el-menu-item>
					</el-submenu>
					<el-submenu index="1-2">
						<span slot="title">形状</span>
						<el-menu-item index="/xingzhuang/Touyuan">椭圆</el-menu-item>
						<el-menu-item index="/xingzhuang/ping-Xing-Si-Bian-Xing"
							>平行四边形</el-menu-item
						>
						<el-menu-item index="/xingzhuang/lou-Kong-Jiao"
							>镂空角</el-menu-item
						>
						<el-menu-item index="/xingzhuang/bing-Tu">饼图</el-menu-item>
						<el-menu-item index="/xingzhuang/xuan-Ting">悬停</el-menu-item>
						<el-menu-item index="/xingzhuang/duo-Bian-Xing"
							>多边形</el-menu-item
						>
					</el-submenu>
					<el-submenu index="1-3">
						<span slot="title">视觉效果</span>
						<el-menu-item index="/shi-Jue-Xiao-Guo/changJianYinYing"
							>常见阴影</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/bu-Gui-Ze-Yin-Ying"
							>不规则阴影</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/mo-Sha-Bo-Li"
							>磨砂玻璃效果</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/ban-Ma-Tiao-Wen"
							>斑马条纹效果</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/wen-Ben-Xiao-Guo"
							>文本效果</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/tong-Han-Wen"
							>通函文本</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/huan-Hang-Fu"
							>换行符</el-menu-item
						>
						<el-menu-item index="/shi-Jue-Xiao-Guo/tu-Xiang-Dui-Bi"
							>图像对比度小部件</el-menu-item
						>
					</el-submenu>
					<el-submenu index="1-4">
						<span slot="title">用户体验</span>
						<el-menu-item index="/yong-Hu-Ti-Yan/shuBiaoGuangBiao"
							>鼠标光标</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/kuo-Da-Ming-Zhing"
							>扩大命中区域</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/zi-Ding-Yi-Fu-Xuan"
							>自定义复选框</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/dan-Xuan"
							>自定义单选框</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/kai-Guan"
							>自定义开关</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/shu-Ru-Dui-Qi"
							>输入对齐</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/yin-Ying-Jian-Ruo"
							>阴影减弱背景</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/mo-Hu-Ruo-Hua"
							>模糊弱化背景</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/wen-Ben-xia-Hua"
							>文本下划线</el-menu-item
						>
						<el-menu-item index="/yong-Hu-Ti-Yan/gun-Dong-Tiao"
							>自定义滚动条</el-menu-item
						>
					</el-submenu>
					<el-submenu index="1-5">
						<span slot="title">结构和布局</span>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/houTaiGuDing"
							>完整的后台固定内容</el-menu-item
						>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/nian-Xing-Ye-Jiao"
							>粘性页脚</el-menu-item
						>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/zhong-Xin"
							>中心</el-menu-item
						>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/sheng-Bei"
							>圣杯布局</el-menu-item
						>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/lei-Shun-Xu"
							>类顺序布局</el-menu-item
						>
						<el-menu-item index="/jie-Gou-He-Bu-Ju/Flexbox"
							>Flexbox布局</el-menu-item
						>
					</el-submenu>
					<el-submenu index="1-6">
						<span slot="title">过度和动画</span>
						<el-menu-item index="/guo-Du-He-Dong-Hua/daZi">打字</el-menu-item>
						<el-menu-item index="/guo-Du-He-Dong-Hua/yao">摇</el-menu-item>
						<el-menu-item index="/guo-Du-He-Dong-Hua/yuan-Zhuan"
							>圆形旋转</el-menu-item
						>
						<el-menu-item index="/guo-Du-He-Dong-Hua/ping-Hua"
							>平滑</el-menu-item
						>
					</el-submenu>
				</el-menu-item-group>
			</el-submenu>
			
		</el-menu>
	</el-scrollbar> -->
	<!-- <el-scrollbar> -->
	<el-menu
		:default-active="activeMenu"
		:collapse="state"
		background-color="#304156"
		text-color="#fff"
		:unique-opened="false"
		active-text-color="#409EFF"
		:collapse-transition="false"
		mode="vertical"
	>
		<sidebar-item
			v-for="route in routes"
			:key="route.path"
			:item="route"
			:base-path="route.path"
		/>
	</el-menu>
	<!-- </el-scrollbar> -->
</template>

<script>
import SidebarItem from "@/systeam/SidebarItem/SidebarItem.vue";
import variables from "@/assets/scss/variables.scss";
export default {
	data() {
		return {};
	},
	components: {
		SidebarItem, // 注册 SidebarItem 组件
	},
	computed: {
		variables() {
			return variables;
		},
		state() {
			console.log(this.$store.state.app.sidebar.opened);
			return this.$store.state.app.sidebar.opened;
		},
		routes() {
			return this.$router.options.routes;
		},
		activeMenu() {
			const route = this.$route;
			const { meta, path } = route;
			if (meta.activeMenu) {
				return meta.activeMenu;
			}
			return path;
		},
	},
	methods: {
		changeMenu(item) {
			console.log(item);
			this.$store.commit("selectMenu", item);
			this.$router.push({ path: item.name });
		},
	},
};
</script>

<style scoped>
/* .el-menu {
	height: 100vh;
	border: none;
	h3 {
		color: #ffffff;
		text-align: center;
		line-height: 48px;
	}
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	height: 100vh;
	min-height: 100vh;
} */
</style>
