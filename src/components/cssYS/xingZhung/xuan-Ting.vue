<template>
   <main>
    <div class="cell poptip--top-left" aria-controls="top-left">top-left</div>
    <div class="cell poptip--top" aria-controls="top">top</div>
    <div class="cell poptip--top-right" aria-controls="top-right">top-right</div>
    <div class="cell poptip--left" aria-controls="left">left</div>
    <div class="cell empty"></div>
    <div class="cell poptip--right" aria-controls="right">right</div>
    <div class="cell poptip--bottom-left" aria-controls="bottom-left">bottom-left</div>
    <div class="cell poptip--bottom" aria-controls="bottom">bottom</div>
    <div class="cell poptip--bottom-right" aria-controls="bottom-right">bottom-right</div>
  </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 main {
    // width: 100%;
    padding: 99px 69px;
    display: flex;
    flex-wrap: wrap;
  }
  .cell {
    width: calc(33.33333% - 8px); height: 52px;
    text-align: center;
    line-height: 52px;
    border-radius: 8px;
    background: #F7F5F1;
    cursor: pointer;
    position: relative;
    border-color: #b4a078;
  }
  .cell.empty {
    background: transparent;
    cursor: default;
    pointer-events: none;
  }
  .cell:not(:nth-of-type(3n)) {
    margin-right: 12px;
    margin-bottom: 12px;
  }
  .cell:hover {
    color: #b4a078;
    font-weight: 900;
  }
  .cell[class*=poptip--]::before,
  .cell[class*=poptip--]::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0,0,0);
    transition: all .3s ease .05s;
  }
  .cell[class*=poptip--]:hover::before,
  .cell[class*=poptip--]:hover::after {
    visibility: visible;
    opacity: 1;
  }
  .cell[class*=poptip--]::before {
    content: '';
    position: absolute;
    width: 0; height: 0;
    border: 6px solid transparent;
  }
  .cell[class*=poptip--]::after {
    content: attr(aria-controls);
    position: absolute;
    background: #b4a078;
    font-size: 12px;
    font-weight: normal;
    color: white;
    line-height: 12px;
    padding: 6px 12px;
    white-space: nowrap;
    border-radius: 2px;
    box-shadow: 0px 0px 3px #b4a078;
  }
  .cell[class*=poptip--top]::before {
    border-top-color: inherit;
  }
  .cell[class*=poptip--right]::before {
    border-right-color: inherit;
  }
  .cell[class*=poptip--bottom]::before {
    border-bottom-color: inherit;
  }
  .cell[class*=poptip--left]::before {
    border-left-color: inherit;
  }
  /* top && bottom */
  .cell[class*=poptip--top]::before,
  .cell[class*=poptip--bottom]::before {
    left: calc(50% - 6px);
  }
  .cell[class*=poptip--top]::after,
  .cell[class*=poptip--bottom]::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .cell[class*=poptip--top]::before {
    top: 0px;
  }
  .cell[class*=poptip--top]:hover::before {
    transform: translateX(0%) translateY(-10px);
  }
  .cell[class*=poptip--top]::after {
    bottom: 100%;
    margin-bottom: -1px;
  }
  .cell[class*=poptip--top]:hover::after {
    transform: translateX(-50%) translateY(-10px);
  }
  .cell[class*=poptip--bottom]::before {
    bottom: 0;
  }
  .cell[class*=poptip--bottom]:hover::before {
    transform: translateX(0%) translateY(10px);
  }
  .cell[class*=poptip--bottom]::after {
    top: 100%;
    margin-top: -1px;
  }
  .cell[class*=poptip--bottom]:hover::after {
    transform: translateX(-50%) translateY(10px);
  }
  /* left && right */
  .cell[class*=poptip--right]::before,
  .cell[class*=poptip--left]::before {
    top: calc(50% - 6px);
  }
  .cell[class*=poptip--right]::after,
  .cell[class*=poptip--left]::after {
    top: 50%;
    transform: translateY(-50%);
  }
  .cell[class*=poptip--right]::before {
    right: 0;
  }
  .cell[class*=poptip--right]:hover::before {
    transform: translateX(10px) translateY(0%);
  }
  .cell[class*=poptip--right]::after {
    left: 100%;
    margin-left: -1px;
  }
  .cell[class*=poptip--right]:hover::after {
    transform: translateX(10px) translateY(-50%);;
  }
  .cell[class*=poptip--left]::before {
    left: 0;
  }
  .cell[class*=poptip--left]:hover::before {
    transform: translateX(-10px) translateY(0%);
  }
  .cell[class*=poptip--left]::after {
    right: 100%;
    margin-right: -1px;
  }
  .cell[class*=poptip--left]:hover::after {
    transform: translateX(-10px) translateY(-50%);;
  }
</style>