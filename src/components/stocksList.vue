<template>
  <div class="listContainer">
  <div v-for="stock in stocks">
    <stocksCard :stock="stock"></stocksCard>
  </div>
  </div>
</template>

<script> 
  import stocksCard from './stocksCard.vue'; 
export default {
  props:["stocks"],
  components:{    
      stocksCard      
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