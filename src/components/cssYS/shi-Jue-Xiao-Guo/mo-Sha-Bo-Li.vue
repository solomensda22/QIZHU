<template>
  <main class="main">
    <div>
      "O God, I could be bounded in a nutshell and count myself a king of infinite space, were it not that I have bad
      dreams."<br>
      <footer>——
        <cite>William Shakespeare</cite>
      </footer>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
main {
  // width: 100%;
  margin: auto;
  padding: 59px 29px;
  border-radius: .3em;
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, .3);
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .3em 1em rgba(0, 0, 0, 0.12);
  font: 150%/1.6 Baskerville, Palatino, serif;
}

main,
main>div::before {
  background: url("../../../assets/city-night.jpg") fixed 0 / cover;
}

main>div::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  filter: blur(10px);
  margin: -30px;
}

main>div {
  font-style: italic;
  color: #000;
  padding: 30px;
  hyphens: auto;
  background: hsla(0, 0%, 100%, .5);
  overflow: hidden;
  position: relative;
}

main>div cite {
  font-style: normal;
}

main footer {
  text-align: right;
}
</style>