<template>
	<div id="styCenter">
		<!-- <Tab></Tab> -->
		<Transition name="fade-transform" mode="out-in">
			<router-view :key="key"></router-view>
		</Transition>
	</div>
</template>
<script>
// import Tab from "./CommonTab.vue";
export default {
	components: {
		// Tab,
	},
	data() {
		return {};
	},

	methods: {
		collapseMenu() {
			this.$store.commit("collapseMenu");
		},
	},
	computed: {
		key() {
			return this.$route.path;
		},
	},
};
</script>

<style lang="scss" scoped></style>
