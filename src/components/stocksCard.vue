<template>
  <div id="stocksCardStyle">
    <div class="stockTitleCont">
   <h3 class="stockTitle">{{stock.name}}</h3>
   <p class="stockTitle">(Price :{{stock.price}}$)</p>
    </div>
   <div id="inputStock">
     <input class="stockInput" 
     v-model="quantity" 
     type="number" 
     placeholder="Quantity"
     :class="{danger:insufficientFunds}"
     >
     <button 
     class="stockButton" 
     @click="onBuy" 
     :disabled="insufficientFunds || quantity<=0 || !Number.isInteger(Number(quantity))"
     >{{insufficientFunds? 'Insufficient funds' : 'Buy'}} </button>
   </div>
  </div>
</template>

<script>  
export default {
props:["stock"],
data(){
    return {
      quantity: 0,      
    }  
  },
  methods:{
    onBuy(){
      const order={
        stockId:this.stock.stock_id,
        stockPrice:this.stock.price,
        quantity:Number(this.quantity)
      }
      console.log(order)
      this.$store.dispatch('buyStock',order)
      this.quantity=0;

    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    },
    insufficientFunds(){
      return this.quantity*this.stock.price>this.funds
    }
  }  
}
</script>

<style>
#stocksCardStyle{  
  border:1px solid #ccc;
  border-radius: 5px;
  text-align: left; 
  width:700px;
  margin-bottom: 10px;  
}

#inputStock{
  padding: 10px;
  margin-bottom: 10px;
}

.stockTitle{
  margin-left: 10px;
  display: inline-block;  
}

.stockTitleCont{
  border-bottom: 1px solid #ccc;
  background-color: lightgreen;
}

.stockButton{
  float: right;
  padding: 12px;
  background-color: green;
  color: white;  
  border: 1px solid #ccc;
  border-radius: 5px; 
  text-align: center;
  text-decoration: none;  
  cursor: pointer;
  margin-top: 9px;  
}

.stockButton:disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.stockInput{
  margin-top: 5px;
  padding: 12px 20px;
  margin: 8px 0;  
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
}

.danger{
  border:1px solid red;
}

@media screen and (max-width: 1470px) {
  #stocksCardStyle{  
 
  width:500px;
 
}
}

@media screen and (max-width: 1060px) {
  #stocksCardStyle{  
 
  width:450px;
 
}
}

@media screen and (max-width: 970px) {
  #stocksCardStyle{  
 
  width:400px;
 
}
}
</style>
