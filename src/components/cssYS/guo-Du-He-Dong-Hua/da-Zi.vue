<template>
    <main class="main">
    <span>You-need-to-know-css!</span>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 main {
    width: 100%; height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: inline-block;
    width: 21ch;
    font: bold 200% Consolas, Monaco, monospace;   /*Monospaced font*/
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    border-right: 1px solid transparent;
    animation: typing 10s steps(21), caret .5s steps(1) infinite;
  }
  @keyframes typing{
    from {
        width: 0;
    }
  }
  @keyframes caret{
    50% { border-right-color: currentColor}
  }
</style>