<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            router :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">css样式</span>
                </template>
                <el-menu-item-group>
                    <el-submenu index="1-1">
                        <span slot="title">边框和背景</span>
                        <el-menu-item index="/cssYS/HomePage">半透明边框</el-menu-item>
                        <el-menu-item index="/cssYS/DuoBianKuang">多边框</el-menu-item>
                        <el-menu-item index="/cssYS/beiJingWeiZhi">背景位置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-2">
                        <span slot="title">形状</span>
                        <el-menu-item index="/xingzhuang/Touyuan">椭圆</el-menu-item>
                        <el-menu-item index="/xingzhuang/ping-Xing-Si-Bian-Xing">平行四边形</el-menu-item>
                        <el-menu-item index="/xingzhuang/lou-Kong-Jiao">镂空角</el-menu-item>
                        <el-menu-item index="/xingzhuang/bing-Tu">饼图</el-menu-item>
                        <el-menu-item index="/xingzhuang/xuan-Ting">悬停</el-menu-item>
                        <el-menu-item index="/xingzhuang/duo-Bian-Xing">多边形</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-3">
                        <span slot="title">视觉效果</span>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/changJianYinYing">常见阴影</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/bu-Gui-Ze-Yin-Ying">不规则阴影</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/mo-Sha-Bo-Li">磨砂玻璃效果</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/ban-Ma-Tiao-Wen">斑马条纹效果</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/wen-Ben-Xiao-Guo">文本效果</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/tong-Han-Wen">通函文本</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/huan-Hang-Fu">换行符</el-menu-item>
                        <el-menu-item index="/shi-Jue-Xiao-Guo/tu-Xiang-Dui-Bi">图像对比度小部件</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-4">
                        <span slot="title">用户体验</span>
                        <el-menu-item index="/yong-Hu-Ti-Yan/shuBiaoGuangBiao">鼠标光标</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/kuo-Da-Ming-Zhing">扩大命中区域</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/zi-Ding-Yi-Fu-Xuan">自定义复选框</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/dan-Xuan">自定义单选框</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/kai-Guan">自定义开关</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/shu-Ru-Dui-Qi">输入对齐</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/yin-Ying-Jian-Ruo">阴影减弱背景</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/mo-Hu-Ruo-Hua">模糊弱化背景</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/wen-Ben-xia-Hua">文本下划线</el-menu-item>
                        <el-menu-item index="/yong-Hu-Ti-Yan/gun-Dong-Tiao">自定义滚动条</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-5">
                        <span slot="title">结构和布局</span>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/houTaiGuDing">完整的后台固定内容</el-menu-item>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/nian-Xing-Ye-Jiao">粘性页脚</el-menu-item>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/zhong-Xin">中心</el-menu-item>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/sheng-Bei">圣杯布局</el-menu-item>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/lei-Shun-Xu">类顺序布局</el-menu-item>
                        <el-menu-item index="/jie-Gou-He-Bu-Ju/Flexbox">Flexbox布局</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-6">
                        <span slot="title">过度和动画</span>
                        <el-menu-item index="/guo-Du-He-Dong-Hua/daZi">打字</el-menu-item>
                        <el-menu-item index="/guo-Du-He-Dong-Hua/yao">摇</el-menu-item>
                        <el-menu-item index="/guo-Du-He-Dong-Hua/yuan-Zhuan">圆形旋转</el-menu-item>
                        <el-menu-item index="/guo-Du-He-Dong-Hua/ping-Hua">平滑</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },

    },

}

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 80vh;
    /* min-height: 400px; */
}
</style>