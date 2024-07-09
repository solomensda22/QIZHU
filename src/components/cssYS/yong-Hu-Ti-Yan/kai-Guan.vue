<template>
    <main>
    <input type="checkbox" id="switch" checked hidden>
    <label for="switch"></label>
    <input type="checkbox" id="switch-disabled" disabled hidden>
    <label for="switch-disabled" disabled></label>
    <input type="checkbox" id="switch-checked-disabled" checked disabled hidden>
    <label for="switch-checked-disabled" disabled></label>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    user-select: none;
    font: 12px / 1 Helvetica, sans-serif;
  }
  label {
    position: relative;
    width: 48px;
    height: 20px;
    background: lightgrey;
    border-radius: 10px;
    cursor: pointer;
    transition: background .3s;
  }
  label[disabled] {
    cursor: not-allowed;
    opacity: .5;
  }
  label::before,
  label::after {
    transition: all .3s;
    position: absolute;
  }
  label::before {
    content: 'OFF';
    top: 4px;
    left: 21px;
    color: white;
    transform: scale(.7);
    font-weight: 700;
  }
  label::after {
    content: '';
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: white;
  }
  input[type="checkbox"]:checked + label {
    background: #b4a078;
  }
  input[type="checkbox"]:checked + label::before {
    content: 'ON';
    left: 6px;
  }
  input[type="checkbox"]:active + label::after {
    width: 23px;
  }
  input[type="checkbox"]:checked + label::after {
    left: 29px;
  }
  input[type="checkbox"]:checked:active + label::after {
    left: 24px;
  }
</style>