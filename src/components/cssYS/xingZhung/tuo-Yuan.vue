<template>
   <main>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 main {
    // width: 100%;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div {
    width: 200px; height: 150px;
    background: #b4a078;
    margin-bottom: 30px;
  }
  .ellipse:nth-of-type(1) {
    width: 300px; height: 150px; 
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(2) {
    width: 150px; height: 150px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(3) {
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(4) {
    width: 100px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(5) {
    width: 300px;
    border-radius: 50% / 0 100%;
  }
  .ellipse:nth-of-type(6) {
    width: 300px;
    border-radius: 50% / 100% 0;
  }
</style>