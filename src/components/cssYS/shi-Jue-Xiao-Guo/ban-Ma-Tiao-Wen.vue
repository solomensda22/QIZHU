<template>
    <main class="main">
    <pre>
      <code class="language-js">
        const pull = (arr, ...args) => {
          let argState = Array.isArray(args[0]) ? args[0] : args;
          let pulled = arr.filter((v, i) => !argState.includes(v));
          arr.length = 0;
          pulled.forEach(v => arr.push(v));
        };
        let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
        pull(myArray, 'a', 'c');
        console.log(myArray);
      </code>
    </pre>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
main {
    width: 100%;
  }
  pre {
    width: 100%;
    display: inline-flex;
    background: #f8f8f8;
    background-image: linear-gradient(rgba(18,18,18,.05) 50%, transparent 0);
    background-size: auto 48px;
    background-origin: content-box;
    font: 14px/24px Consolas, Monaco, monospace;
  }
  main pre > code {
    display: inline-block;
    padding: 0;
    color: #34495e;
    background-color: transparent;
    font: inherit;
  }
</style>