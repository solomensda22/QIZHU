<template>
   <main>
    <div class="diamond">
      <p>① nested element</p>
      <div><span>diamond</span></div>
    </div>
    <div class="diamond">
      <p>② pseudo element (recommended)</p>
      <div>diamond</div>
    </div>
    <div class="diamond">
      <div>diamond</div>
      <img src="static/dog2018.jpg" alt="">
    </div>
  </main>
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
 main{
    width: 100%;
    padding: 29px 0 0;
  }
  .diamond{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .diamond > div{
    width: 150px;
    color: white;
    display: inherit;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .diamond:nth-of-type(1) > div{
    transform: skewX(-45deg);
    background: #b4a078;
  }
  .diamond:nth-of-type(1) > div > span{
    transform: skewX(45deg);
  }
  .diamond:nth-of-type(2) > div::before{
    content: "";
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: -1;
    transform: skewX(-45deg);
    background: #b4a078;
  }
  .diamond:nth-of-type(3) > div{
    width: 105px; height: 105px;
    border: 29px solid transparent;
    box-sizing: content-box;
  }
  .diamond:nth-of-type(3) > div::before{
    content: "";
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: -1;
    background: #b4a078;
    transform: rotate(45deg);
  }
  .diamond:nth-of-type(3){
    margin-bottom: 0;
    align-items: center;
    justify-content: space-around;
    border-bottom-color: transparent;
  }
  .diamond:nth-of-type(3) > img{
    width: 300px; height: 150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s clip-path;
  }
  .diamond:nth-of-type(3) > img:hover{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>