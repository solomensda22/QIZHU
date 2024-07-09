<template>
    <main class="main">
        <input ref="range" type="range" value="100">
        <section :style="{ width }">
            <div class="center">Nam aliquam sem et tortor. Neque interdum consectetur libero id.</div>
            <div class="left">left</div>
            <div class="right">right</div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            width: "50%"
        }
    },
    mounted() {
        this.$refs.range.oninput = ({ target: { value } }) => {
            this.width = `${60 + value * .4}%`;
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    width: 92%;
    padding: 39px 29px;
    font-size: 12px;
}

section {
    padding: 0 129px;
    box-shadow: 0 0 0 1px #eee;
}

section::after {
    content: '';
    display: block;
    clear: both;
}

section>div {
    height: 229px;
    line-height: 1.5em;
    padding: 29px 12px;
    text-align: center;
    float: left;
    color: white;
    background: #b4a078;
}

section .left,
section .right {
    position: relative;
    width: 119px;
}

section .left {
    left: -129px;
    margin-left: -99%;
}

section .center {
    width: 92%;
    text-align: justify;
    hyphens: auto;
}

section .right {
    left: 129px;
    margin-left: -119px;
}

/* input range */
input[type="range"] {
    width: 100%;
    cursor: ew-resize;
}
</style>