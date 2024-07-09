<template>
   <main class="main"></main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 main {
    width: 100%; height: 329px;
    display: flex;
    background: url('../../../assets/full-fire-cloud.jpg') repeat-x 0 center/auto 100%;
    animation: smooth 10s linear infinite;
    animation-play-state: running;
  }
  /* main:hover, main:focus {
    animation-play-state: running;
  } */
  @keyframes smooth {
    to {
      background-position: 1970px center;
    }
  }     
</style>