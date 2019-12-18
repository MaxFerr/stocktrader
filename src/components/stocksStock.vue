<template>
  <div id="stocksContainer">   
   <stocksList :stocks="stocks"></stocksList>
  </div>
</template>

<script> 
  import stocksList from './stocksList.vue'
export default {
  components:{      
      stocksList
  },
  computed:{
    stocks(){
      //getting the stocks array from the store
      return this.$store.getters.stocks
    }
  }  
}
</script>

<style>
#stocksContainer{
  margin-top: 10px;
}
</style>