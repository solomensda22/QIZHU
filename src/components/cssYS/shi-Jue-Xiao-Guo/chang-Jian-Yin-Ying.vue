<template>
    <main>
    <div class="projection">
      <p>① Offset projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>② One-sided projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>③ Adjacent edge projection</p>
      <div></div>
    </div>
    <div class="projection">
      <p>④ Projection on both sides</p>
      <div></div>
    </div>
    <div class="projection">
      <p>⑤ 1px projection</p>
      <div></div>
    </div>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
main {
    width: 100%;
    padding: 20px 0 0 0;
  }
  .projection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .projection > div {
    width: 180px; height: 120px;
    background: rgba(180,160,120,.2);
  }
  .projection:not(:first-child:last-child) > div {
    border: 2px solid transparent;
    background-clip: content-box;
  }
  .projection:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
  .projection:nth-of-type(1) > div {
    margin-left: -6px;
    box-shadow: 0 0 6px rgba(180,160,120,.8);
  }
  .projection:nth-of-type(2) > div {
    border-bottom: 0;
    box-shadow: 0px 6px 5px -5px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(3) > div {
    border-right: 0;
    border-bottom: 0;
    box-shadow: 5px 5px 5px -4px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(4) > div {
    border-right: 0;
    border-left: 0;
    box-shadow: 6px 0 5px -5px rgba(180,160,120,.6), -6px 0 5px -5px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(5) > div {
    box-shadow: 0 0 0 1px rgba(180,160,120,.6);
  }
</style>