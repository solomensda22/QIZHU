<template>
   <main class="main">
    <header>
      <h2 class="title">You-need-to-know-css-tricks</h2>
    </header>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <footer>
      <p>&copy; 2018 LHammer</p>
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
    width: 100%;
  }
  h2.title {
    color: white;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  header{
    background: #b4a078;
    color: white;
  }
  footer{
    background: rgba(180,160,120,.05);
  }
  .main > header,
  .main > section,
  .main > footer{
      padding: .1em calc(50% - 329px);
      text-align: justify;
      hyphens: auto;
  }
</style>