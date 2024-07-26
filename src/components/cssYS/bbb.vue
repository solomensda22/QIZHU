<template>
	<div>
		我是bbbb啊{{ id }}
		<br />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "bbb",
	data() {
		return {
			id: this.$route.query.id,
		};
	},
	// mounted() {
	// 	// this.$route 获取当页面所有路由信息
	// 	console.log(this.$route.query.id);
	// },
	activated() {
		console.log("bbb");
	},
	deactivated() {
		// 组件被移除时调用
		console.log("组件被移除时调用");
	},
};
</script>

<style lang="scss" scoped></style>
