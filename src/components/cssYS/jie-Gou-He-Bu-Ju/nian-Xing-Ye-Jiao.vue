<template>
     <main class="main">
    <header>
      <h1>Site Header</h1>
    </header>
    <section>
      <input id="con-1" type="checkbox" checked/>
      <label for="con-1"><b>Toggle contents</b></label>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. Non consectetur a erat nam at lectus urna duis convallis. Urna neque viverra justo nec ultrices dui sapien. At augue eget arcu dictum varius duis. Porta nibh venenatis cras sed felis eget velit.</p>
      <p>Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Elit at imperdiet dui accumsan sit amet. Ornare quam viverra orci sagittis eu volutpat. Viverra mauris in aliquam sem fringilla ut. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nec nam aliquam sem et tortor. In hendrerit gravida rutrum quisque non tellus orci ac. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Arcu dui vivamus arcu felis. Aliquam eleifend mi in nulla posuere. Nibh praesent tristique magna sit amet purus. Dictumst quisque sagittis purus sit amet. Porta non pulvinar neque laoreet. Integer feugiat scelerisque varius morbi. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.</p>
      <p>Amet volutpat consequat mauris nunc congue. Porttitor lacus luctus accumsan tortor posuere ac. Netus et malesuada fames ac turpis egestas integer eget. Ligula ullamcorper malesuada proin libero nunc. Egestas purus viverra accumsan in nisl nisi. Elementum sagittis vitae et leo duis ut diam quam. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Massa tincidunt nunc pulvinar sapien et. Consequat semper viverra nam libero justo laoreet sit amet cursus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
    </section>
    <footer>
      <p>© 2018 LHammer</p>
      <p>CSS Tricks need to know for web developer.</p>
    </footer>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 main{
    width: 100%; height: 392px;
  }
  section input:checked ~ p{ 
    display: none
  }
  .main > header,
  .main > section,
  .main > footer{
    padding: .1em calc(50% - 329px);
    text-align: justify;
    hyphens: auto;
  }
  header{
    text-align: center;
  }
  section {
    box-sizing: border-box;
    min-height: calc(100% - 59px - 107px);
  }
  footer{
    color: white;
    background: #747e7f;
  }
</style>