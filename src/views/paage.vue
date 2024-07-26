<template>
	<div :class="classObj" class="app-wrapper">
		<el-container>
			<el-aside width="auto">
				<styLeft class="sidebar-container"></styLeft>
			</el-aside>
			<el-container>
				<el-main class="main-container">
					<Nav></Nav>
					<styCenter></styCenter>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
import styCenter from "../systeam/styCenter.vue";
import styLeft from "../systeam/styLeft.vue";
import Nav from "@/systeam/nav.vue";
export default {
	components: {
		styCenter,
		styLeft,
		Nav,
	},
	created() {},
	computed: {
		classObj() {
			return {
				hideSidebar: this.$store.state.app.sidebar.opened,
				openSidebar: !this.$store.state.app.sidebar.opened,
				// withoutAnimation: this.sidebar.withoutAnimation,
				// mobile: this.device === "mobile",
			};
		},
	},
};
</script>

<style lang="scss" scoped></style>
