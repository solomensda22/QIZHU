<template>
    <main>
        <div class="scrollbar-main">
            <span v-for="(row, index) in rows" class="row" :key="index">{{ row }}</span>
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        rows() {
            return Array.from({ length: 56 }).map((v, i) => Array(99).fill(i + 11).join(' '));
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    width: 100%;
    padding: 39px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scrollbar-main {
    width:60%; height: 299px;
    overflow: auto;
  }
  .scrollbar-main .row {
    display: inline-block;
    padding: 12px;
    background: rgba(180,160,120,.1);
    text-align: center;
    white-space: nowrap;
  }
  .scrollbar-main::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  .scrollbar-main::-webkit-scrollbar-corner, /* Scroll bar corner */
  .scrollbar-main::-webkit-scrollbar-thumb,
  .scrollbar-main::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  .scrollbar-main::-webkit-scrollbar-corner,
  .scrollbar-main::-webkit-scrollbar-track { /* Scroll bar track */
    background-color: rgba(180,160,120,.1);
    box-shadow: inset 0 0 1px rgba(180,160,120,.5);
  }
  .scrollbar-main::-webkit-scrollbar-thumb { /* Scroll bar handle */
    background-color: rgb(180,160,120);
  }
</style>