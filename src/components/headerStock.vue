<template>
  <div id="containerHeader">
  	<ul id="headerStyle">
  		<router-link to='/' tag='li' class="leftLi" active-class="active" exact>Stock Trader</router-link>
  		<router-link to='/portfolio' tag='li' class="leftLi" active-class="active">Portfolio</router-link>
  		<router-link to='/stocks' tag='li'  class="leftLi" active-class="active">Stocks</router-link>
  		<li class="rightLi"><strong>Funds : {{funds | currency}}</strong></li>
  		<li class="rightLi"  v-click-outside='closedrop' @click="isOpenMeth">Save & Load
        <font-awesome-icon v-if="!isOpen" class="headerIcon" icon="sort-down" />
        <font-awesome-icon v-else  icon="sort-up" />
            <ul v-if="isOpen" class="dropDownMenuHeader" >
              <li class='dropDownItem' @click='onSaveData'>Save Data</li>              
              <li class='dropDownItem' @click='onLoadData'>Load Data</li>
            </ul>  
      </li>      
  		<li class="rightLi" @click='onEndDay' >End Day</li>
  	</ul>
    
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
export default {
  data (){
    return{
    isOpen:false      
    }
  },
  methods:{
    ...mapActions([
        'randomizeStocks',
        'getSavedStock'        
      ]),
    onEndDay(){
      this.randomizeStocks()
    },    
    closedrop(){
      this.isOpen=false
    },
    isOpenMeth(){
      this.isOpen=!this.isOpen
    },
    onSaveData(){
      fetch('http://localhost:3001/savedstocks',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        payload: this.$store.getters.stockPortfolio
      })
    })
    .then(response=>{       
      return response.json()
    })
    .then(article=>{
      console.log(article)
        })
    },
    
    onLoadData(){
      this.getSavedStock() 
    }
  },
  computed:{
  funds(){
    return this.$store.getters.funds;
  }
 },
   directives: {
    'click-outside': {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }
          
          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },
      
      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  }
}
</script>

<style>
#containerHeader{

}
.dropDownMenuHeader{
  list-style-type: none;
  margin: 0;    
  overflow: hidden;
  background-color: #333333;
  color: white;
  border-radius: 5px;
  position: absolute;  
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 13px;
  margin-left: -17px;
}
.headerIcon{  
  vertical-align: 0;
  margin-top: -2px;

}
#headerStyle{
  list-style-type: none;
  margin: 0;    
  overflow: hidden;
  background-color: #333333;
  color: white;
  border-radius: 10px;      
}

.leftLi{
	float: left;
	padding: 14px 16px;	
}

.leftLi:hover{
	background-color: grey;
  cursor: pointer;		
}

.rightLi{
	float: right;	
	padding: 14px 16px;		
}

.rightLi:hover{
	background-color: grey;
  cursor: pointer;		
}

.active{
  background-color: grey;
}

ul{
	padding-inline-start: 0px;
}

.dropDownItem{
  padding: 10px;
}

.dropDownItem:hover{
  background-color: grey;
}

@media screen and (max-width: 800px) {
  .leftLi,.rightLi{
  	float: none;
  	padding: 14px 16px; 
  	margin: 0px; 	
  }
  .dropDownMenuHeader{  
  background-color: #333333;
  color: white;
  position: absolute;
  right:38%;
  left:38%;
  border-radius: 5px; 
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  }
}
</style>
