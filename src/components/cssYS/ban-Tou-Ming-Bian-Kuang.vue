<template>
	<main>
		<input id="pb" type="checkbox" checked />
		<label for="pb">padding-box(default)</label>
		<div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
		<!-- 第一种传参方式 -->
		<!-- <router-link to="/cssYS/HomePage/bbb?id=123&name=asa">bbb</router-link> -->
		<ul>
			<li v-for="item in list" :key="item.id">
				<!-- 字符串写法 -->
				<!-- <router-link :to="`/cssYS/HomePage/bbb/ccc?id=${item.id}&name=asa`">bbb</router-link> -->
				<!-- 对象写法 -->
				<router-link
					:to="{
						// name: 'bbb', name和路径地址对应 name和path二选一即可
						path: '/cssYS/HomePage/bbb/ccc',
						// params: { // id: item.id,} params传参方式，路径必须使用name
						query: {
							id: item.id,
						},
					}"
				>
					ccc
				</router-link>
			</li>
		</ul>

		<router-link to="/cssYS/HomePage/asa">asa</router-link>
		<div>
			<!-- //<keep-alive :include="['HomePage','bbb']"></keep-alive> 缓存多个组件 -->
			<keep-alive >
				<!-- 添加include="HomePage"会导致路由生命钩子函数失效 -->
				<!-- // 路由缓存 include="HomePage" 缓存组件名字 -->
				<router-view></router-view>
			</keep-alive>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: "123",
					id: "123",
				},
				{
					name: "223",
					id: "223",
				},
			],
		};
	},
	activated() {
		console.log("离开组件HomePage ");
	},
	// 通过路由规则进去才能和触发
	beforeRouteEnter(to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用

		// 不！能！获取组件实例 `this`
		console.log("在渲染该组件的对应路由被 confirm 前调用");
		next();
	},
	
};
</script>

<style scoped lang="scss">
main {
	/* width: 100%; */
	padding: 60px 80px 80px;
	background: #b4a078;
}

div {
	padding: 12px;
	margin: 20px auto;
	background: white;
	border: 10px solid hsla(0, 0%, 100%, 0.5);
}

label {
	color: #f4f0ea;
}

input[id="pb"]:checked ~ div {
	background-clip: padding-box;
}
</style>
<!-- <style lang="scss" >
main {
    width: 100%;
    padding: 60px 80px 80px;
    background: #b4a078;
}

div {
    padding: 12px;
    margin: 20px auto;
    background: white;
    border: 10px solid hsla(0, 0%, 100%, .5);
}

label {
    color: #f4f0ea;
}

// input[id="pb"]:checked~div {
//     // background-clip: padding-box;
// }
</style> -->
