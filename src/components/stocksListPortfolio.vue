<template>
  <div class="listContainer">
  <div v-for="stock in stocks">
    <portfolioStockCard :stock="stock"></portfolioStockCard>
  </div>
  </div>
</template>

<script> 
  import portfolioStockCard from './portfolioStockCard.vue'; 
export default {
  props:["stocks"],
  components:{    
      portfolioStockCard      
  }
}
</script>

<style>
.listContainer{
  display: flex;
  flex-flow: row wrap;
   justify-content: space-around;
    }
</style>