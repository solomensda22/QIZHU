<template>
	<component :is="type" v-bind="linkProps(to)">
		<slot />
	</component>
</template>

<script>
import { isExternal } from "@/utils/validate1";

export default {
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	computed: {
		isExternal() {
			return isExternal(this.to);
		},
		type() {
			if (this.isExternal) {
				return "a";
			}
			return "router-link";
		},
	},
	methods: {
		linkProps(to) {
			console.log("我在这");
			console.log(to);
			if (this.isExternal) {
				return {
					href: to,
					target: "_blank",
					rel: "noopener",
				};
			}
			return {
				to: to,
			};
		},
	},
};
</script>
