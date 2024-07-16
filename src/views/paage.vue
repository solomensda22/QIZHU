<template>
	<el-container>
		<el-aside width="auto" >
			<styLeft></styLeft>
		</el-aside>
		<el-container>
			<el-main>
				<styCenter></styCenter>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import styCenter from "../systeam/styCenter.vue";
import styLeft from "../systeam/styLeft.vue";
export default {
	components: {
		styCenter,
		styLeft,
	},
};
</script>

<style lang="scss" scoped>
.el-main{
    background-color: #b5b0b0;
}
</style>
