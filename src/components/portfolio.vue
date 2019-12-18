<template>
  <div id="stocksContainer">   
   <stocksListPortfolio :stocks="stocks"></stocksListPortfolio>
  </div>
</template>

<script> 
  import stocksListPortfolio from './stocksListPortfolio.vue'
  import {mapGetters} from 'vuex'
export default {
  components:{      
      stocksListPortfolio
  },
  computed:{
    ...mapGetters({
      stocks:'stockPortfolio'
    })
  }  
}
</script>

<style>
#stocksContainer{
  margin-top: 10px;
}
</style>