import Vue from "vue";
import VueRouter from "vue-router";

import paage from "../views/paage.vue";
const Touyuan = () => import("../components/cssYS/xingZhung/tuo-Yuan.vue");

// const DuoBianKuang1 = () => import("../components/cssYS/bei-Jing-Wei-Zhi.vue");

Vue.use(VueRouter);

const routes = [
	//主页面
	{
		path: "/",
		component: paage,
		redirect: "/cssCEShi",
		meta: {
			title: "首页",
		},
		children: [
			{
				path: "/cssCEShi",
				name: "TWcss",
				component: () => import("@/components/cssCEShi"),
				meta: {
					title: "首页",
				},
			},
		],
	},
	//多边框
	{
		path: "/cssYS",
		name: "CssYS",
		component: paage, //父组件必须是显示路由
		redirect: "/cssYS/HomePage",
		meta: {
			title: "多边框",
		},
		children: [
			{
				path: "homePage",
				name: "HomePage",
				component: () =>
					import("@/components/cssYS/ban-Tou-Ming-Bian-Kuang.vue"),
				meta: {
					title: "传值测试",
				},
				children: [
					{
						path: "asa",
						name: "Asa",
						component: () => import("@/components/cssYS/asa.vue"),
						meta: {
							title: "asa",
						},
					},
					{
						path: "bbb",
						name: "Bbb",
						component: () => import("@/components/cssYS/bbb.vue"),
						meta: {
							title: "Bbb",
						},
						// children: [
						// 	{
						// 		path: "ccc",
						// 		name: "Ccc", //name:'ccc/:id',  //:id 是占位符  在parmrs中获取
						// 		component: () => import("@/components/cssYS/ccc.vue"),
						// 		meta: {
						// 			title: "Ccc",
						// 		},
						// 		//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式//传给Detail组件。
						// 		// props:{a:1,b:hello'}
						// 		//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
						// 		// props: true
						// 		//props的第三种写法，值为函数
						// 		// props({query:{id,title}}) {  连续解构赋值
						// 		//   return {
						// 		//     id: query.id,
						// 		//     fitle: query.title
						// 		//   }
						// 		// },
						// 		props($route) {
						// 			return {
						// 				id: $route.query.id,
						// 				fitle: $route.query.title,
						// 			};
						// 		},
						// 	},
						// ],
					},
				],
			},
			{
				path: "DuoBianKuang",
				name: "DuoBianKuang",
				component: () => import("@/components/cssYS/duo-Bian-Kuang.vue"),
				meta: {
					title: "多边框",
				},
			},
			{
				path: "beiJingWeiZhi",
				name: "beiJingWeiZhi",
				component: () => import("@/components/cssYS/bei-Jing-Wei-Zhi.vue"),
				meta: {
					title: "边框位置",
				},
			},
		],
	},

	//形状
	{
		path: "/xingzhuang",
		name: "xingzhuang",
		component: paage, //父组件必须是显示路由
		redirect: "/xingzhuang/Touyuan",
		meta: {
			title: "形状",
		},
		children: [
			{
				path: "Touyuan",
				name: "Touyuan",
				component: Touyuan,
				meta: {
					title: "椭圆",
				},
			},
			{
				path: "ping-Xing-Si-Bian-Xing",
				name: "pingXingSiBianXing",
				component: () =>
					import("@/components/cssYS/xingZhung/ping-Xing-Si-Bian-Xing.vue"),
				meta: {
					title: "平行四边形",
				},
			},
			{
				path: "lou-Kong-Jiao",
				name: "louKongJiao",
				component: () =>
					import("@/components/cssYS/xingZhung/lou-Kong-Jiao.vue"),
				meta: {
					title: "镂空角",
				},
			},
			{
				path: "bing-Tu",
				name: "bingTu",
				component: () => import("@/components/cssYS/xingZhung/bing-Tu.vue"),
				meta: {
					title: "饼图",
				},
			},
			{
				path: "xuan-Ting",
				name: "xuanTing",
				component: () => import("@/components/cssYS/xingZhung/xuan-Ting.vue"),
				meta: {
					title: "悬停",
				},
			},
			{
				path: "duo-Bian-Xing",
				name: "duoBianXing",
				component: () =>
					import("@/components/cssYS/xingZhung/duo-Bian-Xing.vue"),
				meta: {
					title: "多边形",
				},
			},
		],
	},
	//视觉效果
	{
		path: "/shi-Jue-Xiao-Guo",
		name: "shiJueXiaoGuo",
		component: paage, //父组件必须是显示路由
		meta: {
			title: "设计效果",
		},
		children: [
			{
				path: "changJianYinYing",
				name: "changJianYinYing",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/chang-Jian-Yin-Ying.vue"),
				meta: {
					title: "常见阴影效果",
				},
			},
			{
				path: "bu-Gui-Ze-Yin-Ying",
				name: "buGuiZeYinYing",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/bu-Gui-Ze-Yin-Ying.vue"),
				meta: {
					title: "不规则阴影效果",
				},
			},
			{
				path: "mo-Sha-Bo-Li",
				name: "moShaBoLi",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/mo-Sha-Bo-Li.vue"),
				meta: {
					title: "磨砂玻璃效果",
				},
			},
			{
				path: "ban-Ma-Tiao-Wen",
				name: "banMaTiaoWen",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/ban-Ma-Tiao-Wen.vue"),
				meta: {
					title: "半马蹄纹效果",
				},
			},
			{
				path: "wen-Ben-Xiao-Guo",
				name: "wenBenXiaoGuo",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/wen-Ben-Xiao-Guo.vue"),
				meta: {
					title: "文本效果",
				},
			},
			{
				path: "tong-Han-Wen",
				name: "tongHanWen",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/tong-Han-Wen.vue"),
				meta: {
					title: "通函文本效果",
				},
			},
			{
				path: "huan-Hang-Fu",
				name: "huanHangFu",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/huan-Hang-Fu.vue"),
				meta: {
					title: "换行符效果",
				},
			},
			{
				path: "tu-Xiang-Dui-Bi",
				name: "tuXiangDuiBi",
				component: () =>
					import("@/components/cssYS/shi-Jue-Xiao-Guo/tu-Xiang-Dui-Bi.vue"),
				meta: {
					title: "图片对比效果",
				},
			},
		],
	},
	//用户体验
	{
		path: "/yong-Hu-Ti-Yan",
		name: "yongHuTiYan",
		component: paage, //父组件必须是显示路由
		meta: {
			title: "用户体验",
		},
		children: [
			{
				path: "shuBiaoGuangBiao",
				name: "shuBiaoGuangBiao",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/shu-Biao-Guang-Biao.vue"),
				meta: {
					title: "鼠标管理",
				},
			},
			{
				path: "kuo-Da-Ming-Zhing",
				name: "kuoDaMingZhing",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/kuo-Da-Ming-Zhing.vue"),
				meta: {
					title: "夸大命中值",
				},
			},
			{
				path: "zi-Ding-Yi-Fu-Xuan",
				name: "ziDingYiFuXuan",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/zi-Ding-Yi-Fu-Xuan.vue"),
				meta: {
					title: "自定义样式选择",
				},
			},
			{
				path: "dan-Xuan",
				name: "danXuan",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/dan-Xuan.vue"),
				meta: {
					title: "自定义单选",
				},
			},
			{
				path: "kai-Guan",
				name: "kaiGuan",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/kai-Guan.vue"),
				meta: {
					title: "开关",
				},
			},
			{
				path: "shu-Ru-Dui-Qi",
				name: "shuRuDuiQi",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/shu-Ru-Dui-Qi.vue"),
				meta: {
					title: "输入对齐",
				},
			},
			{
				path: "yin-Ying-Jian-Ruo",
				name: "yinYingJianRuo",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/yin-Ying-Jian-Ruo.vue"),
				meta: {
					title: "阴影渐入",
				},
			},
			{
				path: "mo-Hu-Ruo-Hua",
				name: "moHuRuoHua",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/mo-Hu-Ruo-Hua.vue"),
				meta: {
					title: "模糊弱化",
				},
			},
			{
				path: "wen-Ben-xia-Hua",
				name: "wenBenxiaHua",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/wen-Ben-xia-Hua.vue"),
				meta: {
					title: "文本下划线",
				},
			},
			{
				path: "gun-Dong-Tiao",
				name: "gunDongTiao",
				component: () =>
					import("@/components/cssYS/yong-Hu-Ti-Yan/gun-Dong-Tiao.vue"),
				meta: {
					title: "自定义滚动条",
				},
			},
		],
	},
	// 布局与结构
	{
		path: "/jie-Gou-He-Bu-Ju",
		name: "jieGouHeBuJu",
		component: paage, //父组件必须是显示路由
		meta: {
			title: "结构和布局",
		},
		children: [
			{
				path: "houTaiGuDing",
				name: "houTaiGuDing",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/hou-Tai-Gu-Ding.vue"),
				meta: {
					title: "后端固定布局",
				},
			},
			{
				path: "nian-Xing-Ye-Jiao",
				name: "nianXingYeJiao",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/nian-Xing-Ye-Jiao.vue"),
				meta: {
					title: "粘性页脚",
				},
			},
			{
				path: "zhong-Xin",
				name: "zhongXin",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/zhong-Xin.vue"),
				meta: {
					title: "中心布局",
				},
			},
			{
				path: "sheng-Bei",
				name: "shengBei",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/sheng-Bei.vue"),
				meta: {
					title: "圣杯布局",
				},
			},
			{
				path: "lei-Shun-Xu",
				name: "leiShunXu",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/lei-Shun-Xu.vue"),
				meta: {
					title: "类顺序布局",
				},
			},
			{
				path: "Flexbox",
				name: "Flexbox",
				component: () =>
					import("@/components/cssYS/jie-Gou-He-Bu-Ju/flexbox.vue"),
				meta: {
					title: "Flexbox",
				},
			},
		],
	},
	// 过度和动画
	{
		path: "/guo-Du-He-Dong-Hua",
		name: "guoDuHeDongHua",
		component: paage, //父组件必须是显示路由
		meta: {
			title: "过度和动画",
			isShow: true,
		},
		children: [
			{
				path: "daZi",
				name: "daZi",
				component: () =>
					import("@/components/cssYS/guo-Du-He-Dong-Hua/da-Zi.vue"),
				meta: {
					title: "打字",
					isShow: true,
				},
			},
			{
				path: "yao",
				name: "yao",
				component: () =>
					import("@/components/cssYS/guo-Du-He-Dong-Hua/yao.vue"),
				meta: {
					title: "摇",
				},
			},
			{
				path: "yuan-Zhuan",
				name: "yuanZhuan",
				component: () =>
					import("@/components/cssYS/guo-Du-He-Dong-Hua/yuan-Zhuan.vue"),
				meta: {
					title: "圆转",
				},
				// 独享 路由守卫
				beforeEnter(to, from, next) {
					console.log("beforeenter");
					next();
				},
			},
			{
				path: "ping-Hua",
				name: "pingHua",
				component: () =>
					import("@/components/cssYS/guo-Du-He-Dong-Hua/ping-Hua.vue"),
				meta: {
					title: "平滑",
				},
			},
		],
	},
];

const router = new VueRouter({
	mode: "hash", // 默认是hash模式 带/#/不会发送给服务器
	base: process.env.BASE_URL,
	routes,
});
// 全局前置路由守卫 切换路由之前调用，初始化得时候嗲用
router.beforeEach((to, from, next) => {
	console.log("全局前置路由守卫");
	// 执行其他逻辑判断和处理
	// 调用 next() 方法来继续导航流程
	// next(); // 或者 next() 传递其他参数
	if (to.meta.isShow) {
		if (localStorage.getItem("token")) {
			next();
		} else {
			next();
		}
	} else {
		next();
	}
});

router.afterEach((to) => {
	console.log("全局后置路由守卫");
	document.title = to.meta.title;
});

export default router;
