<template>
    <div class="box">
        <div id="options">
            <div class="option-item">
                <h2 title="主轴方向">flex-direction</h2>
                <input type="radio" name="flex-direction" id="fd1" checked="checked" @click="handleFlexDirection">
                <label title="主轴为水平方向，起点在左端" for="fd1" @click="handleFlexDirection">row</label>
                <input type="radio" name="flex-direction" id="fd2" @click="handleFlexDirection">
                <label title="主轴为水平方向，起点在右端" for="fd2" @click="handleFlexDirection">row-reverse</label>
                <input type="radio" name="flex-direction" id="fd3" @click="handleFlexDirection">
                <label title="主轴为水平方向，起点在右端" for="fd3" @click="handleFlexDirection">column</label>
                <input type="radio" name="flex-direction" id="fd4" @click="handleFlexDirection">
                <label title="主轴为垂直方向，起点在下沿" for="fd4" @click="handleFlexDirection">column-reverse</label>
            </div>
            <div class="option-item">
                <h2 title="轴线是否换行">flex-wrap</h2>
                <input type="radio" name="flex-wrap" id="fw1" checked="checked" @click="handleFlexDirection">
                <label title="（默认）不换行" for="fw1" @click="handleFlexDirection">nowrap</label>
                <input type="radio" name="flex-wrap" id="fw2" @click="handleFlexDirection">
                <label title="换行，第一行在上方" for="fw2" @click="handleFlexDirection">wrap</label>
                <input type="radio" name="flex-wrap" id="fw3" @click="handleFlexDirection">
                <label title="换行，第一行在下方" for="fw3" @click="handleFlexDirection">wrap-reverse</label>
            </div>
            <div class="option-item">
                <h2 title="定义了项目在主轴上的对齐方式">justify-content</h2>
                <input type="radio" name="justify-content" id="jc1" checked="checked" @click="handleFlexDirection">
                <label title="（默认值）：左对齐" @click="handleFlexDirection" for="jc1">flex-start</label>
                <input type="radio" name="justify-content" id="jc2" @click="handleFlexDirection">
                <label title="右对齐" @click="handleFlexDirection" for="jc2">flex-end</label>
                <input type="radio" name="justify-content" id="jc3" @click="handleFlexDirection">
                <label title="居中" @click="handleFlexDirection" for="jc3">center</label>
                <input type="radio" name="justify-content" id="jc4" @click="handleFlexDirection">
                <label title="两端对齐，项目之间的间隔都相等。" @click="handleFlexDirection" for="jc4">space-between</label>
                <input type="radio" name="justify-content" id="jc5" @click="handleFlexDirection">
                <label title="每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。" @click="handleFlexDirection" for="jc5">space-around</label>
            </div>
            <div class="option-item">
                <h2 title="定义项目在交叉轴上如何对齐">align-items</h2>
                <input type="radio" name="align-items" id="ai1" @click="handleFlexDirection">
                <label title="交叉轴的起点对齐" @click="handleFlexDirection" for="ai1">flex-start</label>
                <input type="radio" name="align-items" id="ai2" @click="handleFlexDirection">
                <label title="交叉轴的终点对齐" @click="handleFlexDirection" for="ai2">flex-end</label>
                <input type="radio" name="align-items" id="ai3" @click="handleFlexDirection">
                <label title="交叉轴的中点对齐" @click="handleFlexDirection" for="ai3">center</label>
                <input type="radio" name="align-items" id="ai4" @click="handleFlexDirection">
                <label title="项目的第一行文字的基线对齐" @click="handleFlexDirection" for="ai4">baseline</label>
                <input type="radio" name="align-items" id="ai5" @click="handleFlexDirection" checked="checked">
                <label title="如果项目未设置高度或设为auto，将占满整个容器的高度" @click="handleFlexDirection" for="ai5">stretch</label>
            </div>
            <div class="option-item">
                <h2 title="定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用">align-content</h2>
                <input type="radio" name="align-content" id="ac1" @click="handleFlexDirection">
                <label title="与交叉轴的起点对齐" @click="handleFlexDirection" for="ac1">flex-start</label>
                <input type="radio" name="align-content" id="ac2" @click="handleFlexDirection">
                <label title="与交叉轴的终点对齐" @click="handleFlexDirection" for="ac2">flex-end</label>
                <input type="radio" name="align-content" id="ac3" @click="handleFlexDirection">
                <label title="与交叉轴的中点对齐" @click="handleFlexDirection" for="ac3">center</label>
                <input type="radio" name="align-content" id="ac4" @click="handleFlexDirection">
                <label title="与交叉轴两端对齐，轴线之间的间隔平均分布" @click="handleFlexDirection" for="ac4">space-between</label>
                <input type="radio" name="align-content" id="ac5" @click="handleFlexDirection">
                <label title="每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍" @click="handleFlexDirection" for="ac5">space-around</label>
                <input type="radio" name="align-content" id="ac6" @click="handleFlexDirection" checked="checked">
                <label title="轴线占满整个交叉轴" @click="handleFlexDirection" for="ac6">stretch</label>
            </div>
        </div>
        <div id="items">
            <div id="item-head">
                <div>
                    <span>项目数量：
                        <button @click="addItem()">+</button>
                        <span id='count'>{{ count }}</span>
                        <button @click="subItem()">-</button>
                    </span>
                </div>
                <div>
                    <span style="display:inline-block; width:150px">项目宽度：
                        <span id='itemWidth'>85</span>px</span>
                    <input id='widthRange' type="range" name="points" min="50" max="250" value='85' v-model="rval">
                </div>
            </div>
            <div id="item-body">
                <div class="item" v-for="index in itemCount" :key="index">
                    <div class="number">{{ index }}</div>
                    <input @change="updateStyle" title="定义项目的排列顺序。数值越小，排列越靠前，默认为0" placeholder="order" type="text">
                    <input @change="updateStyle" title="属性定义项目的放大比例，默认为0" placeholder="flex-grow" type="text">
                    <input @change="updateStyle" title="属性定义了项目的缩小比例，默认为1" placeholder="flex-shrink" type="text">
                    <input @change="updateStyle" title="属性定义了在分配多余空间之前，项目占据的主轴空间。" placeholder="flex-basis" type="text">
                    <select @change="updateStyle" name="align-self" title="align-self 允许不一样的对齐方式，可覆盖`align-items`属性">
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="space-between">space-around</option>
                        <option value="stretch">stretch</option>
                        <option selected="selected" value="auto">auto</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 4,
            rval: 85,
            itemCount: 4
        }
    },
    mounted() {
    },
    methods: {
        handleFlexDirection(event) {
            const item_body = document.getElementById('item-body');
            const target = event.target || event.srcElement;
            if (target.matches('label')) {
            let rid = document.getElementById(target.getAttribute('for'));
            if (!rid.checked) rid.checked = 'checked';
            let val = target.innerText;
            let attributeName = rid.getAttribute('name');
            item_body.style[attributeName] = val;
            }

        },
        // 右侧项目下拉选项
        updateStyle(event) {
            const target = event.target;
            if (target.matches('input') || target.matches('select')) {
                target.parentNode.style[target.placeholder || target.name] = target.value;
            }
        },
        addItem() {
            if (this.count >= 20) {
                alert("不能再加了！再加挤爆了了");
                return;
            }
            this.itemCount++;
        },
        subItem() {
            if (this.itemCount <= 1) {
                alert("不能再删了！再删玩儿坏了");
                return;
            }
            this.itemCount--
        },
        setWidth() {
            const widthRange = document.getElementById('widthRange');
            const itemWidth = document.getElementById('itemWidth');
            widthRange.addEventListener('input');

            if (widthRange.value !== this.rval) {
                this.rval = widthRange.value;
                itemWidth.innerText = widthRange.value;
                let items = document.getElementsByClassName('item');
                for (let i = 0; i < items.length; i++) {
                    items[i].style.width = this.rval + 'px';
                }
            }
        },
    },
    watch: {
        rval() {
            this.setWidth();
        }
    }
}
</script>

<style lang="scss" scoped>
html,
body,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
}

ol,
ul,
li {
    list-style: none;
}

a {
    color: initial;
    text-decoration: none;
}

img {
    border: none;
    display: block;
}

.clearfloat {
    zoom: 1;
}

.clearfloat::after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}

@media only screen and (max-width:576px) {
    #options {
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .option-item {
        flex-grow: 1;
    }

    .box {
        flex-direction: column;
    }

    .option-item h2 {
        height: 35px;
        font-size: 16px;
    }

    .option-item label {
        font-size: 14px;
    }
}

@media only screen and (max-width:768px) and (min-width:576px) {
    .box {
        flex-direction: column;
    }

    .option-item h2 {
        height: 35px;
        font-size: 16px;
    }

    .option-item label {
        font-size: 14px;
    }
}

@media only screen and (max-width:992px) and (min-width:768px) {
    #options {
        width: 47.5%;
        /* font-size: 12px; */
        flex-wrap: wrap;
    }

    #items {
        width: 47.5%;
    }

    .option-item {
        flex-grow: 1;
    }

    .option-item h2 {
        height: 30px;
        font-size: 14px;
    }

    .option-item label {
        font-size: 12px;
    }
}

@media only screen and (min-width:992px) {
    #options {
        width: 47.5%;
        font-size: 12px;
    }

    #items {
        width: 47.5%;
    }

    .option-item h2 {
        font-size: 16px;
        height: 40px;
    }

    .option-item label {
        font-size: 14px;
    }
}

/* 整体效果部分 */
body {
    width: 100%;
    min-width: 320px;
    color: #2C3E50;
    background: #ECF0F1;
}

h1 {
    text-align: center;
}

.box {
    margin: 10px;
    border: #aaa solid 1px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #fdfdfd;
}


/* 左边选项部分 */
#options {
    display: flex;
    justify-content: space-around;
}

.option-item {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.option-item input {
    display: none;
    /* position: absolute; */
    /* opacity: 0; */
}

.option-item label {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 5px 0;
    padding: 5px;
    border: solid 1px;
    border-radius: 5px;
    color: #33cccc;
}

input[type="radio"]:checked+label {
    background: #33cccc;
    color: #fff
}

/* 右边显示部分 */
#item-head {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 5px;
}

#item-head input {
    vertical-align: text-bottom;
}

#item-head button {
    width: 25px;
    height: 25px;
    border: #ccc solid 1px;
    border-radius: 5px;
    outline: none;
    background: #fff;
}

#item-head button:hover {
    background: #eee;
}

#item-body {
    display: flex;
    padding: 5px;
    background: #33cccc;
    border-radius: 5px;
    min-height: 400px;
}

/* 项目效果部分 */

.item {
    margin: 2px;
    padding: 5px;
    border: #aaa solid 1px;
    border-radius: 5px;
    width: 85px;
    font-size: 12px;
    height: auto;
    background: #fff;
}

.item .number {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    border-radius: 50%;
    background: #33cccc;
    line-height: 20px;
    color: #fff;
    text-align: center;
}

.item input {
    outline: none;
    background: none;
    border: none;
    margin: 5px 0;
    width: 100%;
    border-bottom: #ddd solid 2px;
}

.item select {
    outline: none;
    background: none;
    border: none;
    padding: 0;
    margin: 5px 0;
    width: 100%;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-bottom: #ddd solid 2px;
}

footer {
    width: 100%;
    text-align: center;
}

footer a {
    text-decoration: none;
}
</style>