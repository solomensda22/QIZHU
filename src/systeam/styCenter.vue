<template>
	<div id="styCenter">
		<Nav></Nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Nav from "./nav.vue";
export default {
	components: {
		Nav,
	},
	data() {
		return {};
	},

	methods: {
		collapseMenu() {
			this.$store.commit("collapseMenu");
    
		},
	},
};
</script>

<style lang="scss" scoped>
.styCenter{
  background-color: #333;
}
</style>
