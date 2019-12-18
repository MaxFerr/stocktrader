<template>
  <div id="app">
   <headerStock></headerStock> 
   <transition name="slide" mode="out-in" >
    <router-view></router-view>
   </transition>        
  </div>
</template>

<script>
  import headerStock from './components/headerStock.vue';   
export default {
data (){
  return{
    
  }
},  
  components:{
      headerStock      
  },
  created(){
    //initialize the stocks array used in stockStocks.vue
    this.$store.dispatch('initStocks')
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: auto;

}
body{
  padding: 10px;
}

.slide-enter-active{
  animation:slide-in 200ms ease-out forwards;
}

.slide-leave-active{
  animation:slide-out 200ms ease-out forwards;
}

@keyframes slide-in{
  from{
    transform:translateY(30px);
    opacity: 0;
  }
  to{
    transform:translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out{
  from{
    transform:translateY(0);
    opacity: 1;
  }
  to{
    transform:translateY(30px);
    opacity: 0;
  }
}
</style>
