<template>
	<main>
		<div class="block1">background-position scheme</div>
		<div class="block2">background-origin scheme</div>
		<div class="block3">calc scheme</div>
	</main>
</template>

<script>
export default {
	activated() {
		console.log("aasdasdasdasdas");
	},
	beforeMount() {
		console.log("beforeMount");
	},
};
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	padding: 80px 0px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

div {
	width: 229px;
	height: 139px;
	margin: auto;
	color: #f4f0ea;
	padding: 16px 29px 28px 20px;
	background: #b4a078 url("../../assets/player_logo@2x.png") no-repeat bottom
		right / 78px 21px;
}

div:nth-of-type(1) {
	background-position: right 29px bottom 28px;
}

div:nth-of-type(2) {
	background-origin: content-box;
	margin: 29px 0;
	/* Vertical alignment for the mobile */
}

div:nth-of-type(3) {
	background-position: calc(100% - 29px) calc(100% - 28px);
}
</style>
