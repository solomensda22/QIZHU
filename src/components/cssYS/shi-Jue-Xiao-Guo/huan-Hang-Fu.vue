<template>
    <main class="main">
    <span class="key">👦🏿Name:</span>
    <span class="bold">LHammer</span>
    <span class="key br">👨🏼‍💻GitHub:</span>
    <span class="bold">https://github.com/l-hammer</span>
    <span class="bold">https://gitee.com/lhammer</span>
    <span class="key br">🌎Juejin:</span>
    <span class="bold">https://juejin.im/user/57a3dbb2d342d300574d8369</span>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
main{
    padding: 52px 39px;
    background: rgba(180,160,120,.1);
  }
  span.key {
    padding-right: 6px;
  }
  span.bold {
    line-height: 2em;
    font-weight: bold;
  }
  span.br::before {
    content: "\A";
    white-space: pre;
  }
  span.bold + span.bold::before {
    content: ", ";
    font-weight: 500;
    margin-left: -.25em;
  }    
</style>