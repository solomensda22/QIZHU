<template>
    <div>
        <el-container>
            <el-aside style="width: auto;">
                <styLeft></styLeft>
            </el-aside>
            <el-main style="width: auto;">
                <styCenter></styCenter>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import styCenter from '../systeam/styCenter.vue';
import styLeft from '../systeam/styLeft.vue';
export default {
    components: {
        styCenter,
        styLeft,
    }
}
</script>

<style lang="scss" scoped></style>