<template>
     <main>
    <div class="chart">
      <p>① rotate()</p>
      <div class="pie"></div>
    </div>
    <div class="chart">
      <p>② css animation</p>
      <div class="pie"></div>
    </div>
    <div class="chart">
      <p>④ start animation from the specified location</p>
      <div class="pie"></div>
    </div>
    <div class="chart">
      <p>⑤ SVG change dasharray to percentage</p>
      <svg viewBox="0 0 32 32">
        <circle r="16" cx="16" cy="16"></circle>
      </svg>
    </div>
    <div class="chart">
      <p>⑥ SVG add multiple colors</p>
      <svg viewBox="0 0 32 32">
        <circle r="16" cx="16" cy="16"></circle>
        <circle r="16" cx="16" cy="16"></circle>
        <circle r="16" cx="16" cy="16"></circle>
      </svg>
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
    padding: 60px 0;
  }
  .chart{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 29px;
  }
  .chart > p{
    width: 199px;
  }
  .chart > div{
    width: 100px; 
    height: 100px;
    border-radius: 50%;
    background-color: #E8E2D6;
    background-image: linear-gradient(to right, transparent 50%, #b4a078 0);
  }
  .chart:nth-of-type(1) div::before {
    content: "";
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    background-color: inherit;
    transform-origin: 0 50%;
    transform: rotate(.3turn);
  }
  .chart:nth-of-type(2) div::before{
    content: "";
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    background-color: inherit;
    transform-origin: 0 50%;
    animation: pie-chart-spin1 3s linear 1.6 forwards,
                pie-chart-bg1 3s step-end 1 forwards;
  }
  .chart:nth-of-type(3) > div::before{
    content: "";
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    background-color: inherit;
    transform-origin: 0 50%;
    animation: pie-chart-spin1 3s linear 1.6 forwards,
                pie-chart-bg1 3s step-end 1 forwards;
  }
  .chart:nth-of-type(3) > div::before{
    animation-delay: -1.5s;
  }
  svg{
    width: 100px; height: 100px;
    transform: rotate(-90deg);
    background: #E8E2D6;
    border-radius: 50%;
  }
  .chart:nth-of-type(4) svg > circle{
    fill: #E8E2D6;
    stroke: #b4a078;
    stroke-width: 32;
    stroke-dasharray: 0 100;
    animation: pie-chart-fillup 6s linear infinite;
  }
  .chart:nth-of-type(5) svg > circle:nth-of-type(1){
    fill: #fff;
    stroke: #b4a078;
    stroke-width: 32;
    stroke-dasharray: 0 100; /* 36% */
    stroke-dashoffset: -64;
    animation: pie-chart-per1 2s linear 1 forwards;
  }
  .chart:nth-of-type(5) svg > circle:nth-of-type(2){
    fill: transparent; 
    stroke: #cabca0;
    stroke-width: 32;
    stroke-dasharray: 0 100; /* 32% */
    stroke-dashoffset: -32;
    animation: pie-chart-per2 2s linear 1 forwards;
  }
  .chart:nth-of-type(5) svg > circle:nth-of-type(3){
    fill: transparent; 
    stroke: #e1d9c9;
    stroke-width: 32;
    stroke-dasharray: 0 100; /* 32% */
    stroke-dashoffset: 0;
    animation: pie-chart-per3 2s linear 1 forwards;
  }
  @keyframes pie-chart-spin1 {
    to { transform: rotate(.5turn); }
  }
  @keyframes pie-chart-bg1 {
    to { background: #b4a078; }
  }
  @keyframes pie-chart-spin2 {
    to { transform: rotate(.5turn); }
  }
  @keyframes pie-chart-bg2 {
    50% { background: #b4a078; }
  }
  @keyframes pie-chart-fillup{
    to { stroke-dasharray: 100 100; }
  }
  @keyframes pie-chart-per1{
    to { stroke-dasharray: 37 100; }
  }
  @keyframes pie-chart-per2{
    to { stroke-dasharray: 32 100; }
  }
  @keyframes pie-chart-per3{
    to { stroke-dasharray: 32 100; }
  }
</style>