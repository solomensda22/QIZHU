<template>
    <div id="nav">
        <!-- <el-tag v-for="(tag, index) in this.$store.state.activeRoute.Tags" :key="tag.title" closable type="success"
            @close="handelClose(tag)" @click="tabClick(tag, index)"
            :class="{ active: $store.state.activeRoute.tagIndex == index }">
            {{ tag.title }}
        </el-tag> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadlist: []
        }
    },
    //监听
    watch: {

    },
    computed: {

    },
    methods: {
        // increase() {
        //     this.$store.commit('increment')
        //     console.log(this.$store.state.count)
        // }

    },
    created() {
        console.log(this.$store)
    }
}
</script>

<style scoped lang="scss">
.tags {
    text-align: left;

    .el-tag {
        margin-left: 10px;
    }

    .el-tag:first-child {
        margin-left: 0;
    }
}

.el-tag.active {
    background-color: aqua;
    color: #fff;
}
</style>