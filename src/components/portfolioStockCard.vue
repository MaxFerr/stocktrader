<template>
  <div id="stocksCardStyle">
    <div class="stockTitleCont">
   <h3 class="stockTitle">{{stock.name}}</h3>
   <p class="stockTitle">(Price :{{stock.price}}$ | Quantity: {{stock.quantity}})</p>
    </div>
   <div id="inputStock">
     <input 
     class="stockInput" 
     v-model="quantity" 
     type="number" 
     placeholder="Quantity"
     :class="{danger:insufficientQuantity} "
     >
     <button 
     class="stockButton" 
     @click="onSellStock" 
     :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(Number(quantity))"
     >
       {{ insufficientQuantity? 'Not enough stock' : 'Sell'}}
     </button>
   </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';  
export default {
props:["stock"],
data(){
    return {
      quantity: 0,      
    }  
  },
  methods:{
    ...mapActions([
        'sellStock'
      ]),
    onSellStock(){
      const order ={
        stockId:this.stock.stock_id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      }
      this.sellStock(order);
      this.quantity=0;
    }
  },
  computed:{
    insufficientQuantity(){
      return this.quantity>this.stock.quantity
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
