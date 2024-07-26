<template>
	<header>
		<div class="l-content">
			<hamburger
				:is-active="sidebar.opened"
				class="hamburger-container"
				@toggleClick="toggleSideBar"
			/>
			<breadcrumb class="breadcrumb-container" />
		</div>
		<div class="r-content">
			<el-dropdown trigger="click" size="mini">
				<span class="el-dropdown-link"
					><img :src="userImg" class="user"
				/></span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
export default {
	data() {
		return {
			userImg: require("../assets/images/user.png"),
		};
	},
	components: {
		Hamburger,
		Breadcrumb,
	},
	computed: {
		...mapState({
			current: (state) => state.tab.currentMenu,
		}),
		...mapGetters(["sidebar", "avatar"]),
	},
	methods: {
		//控制左侧菜单是否折叠
		toggleSideBar() {
			this.$store.dispatch("app/toggleSideBar");
		},
		SY() {
			this.$router.push({ path: "/" });
		},
		// //退出登陆
		// logOut() {
		//     location.reload()
		// }
	},
};
</script>

<style lang="scss" scoped>
.hamburger-container {
	line-height: 46px;
	height: 100%;
	float: left;
	cursor: pointer;
	transition: background 0.3s;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		background: rgba(0, 0, 0, 0.025);
	}
}
header {
	display: flex;
	// height: 100%;
	align-items: center;
	justify-content: space-between;
}

.l-content {
	display: flex;
	align-items: center;

	.el-button {
		margin-right: 20px;
	}
}

.r-content {
	.user {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
}
</style>

<style lang="scss">
.el-breadcrumb__item {
	.el-breadcrumb__inner {
		color: #666666;
		font-weight: normal;
	}

	&:last-child {
		.el-breadcrumb__inner {
			color: #ffffff;
		}
	}
}
</style>
