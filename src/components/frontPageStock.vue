<template>
  <div id="frontPageStyle">
   <h1>Trade or View your Portfolio</h1>
   <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day !</p>
    <br>
    <h2><strong>Your Funds : {{funds | currency}}</strong></h2>
  </div>
</template>

<script>  
export default {  
 computed:{
  funds(){
    return this.$store.getters.funds;
  }
 }
}
</script>

<style>
#frontPageStyle{
  text-align: left;
  border:1px solid grey;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

</style>