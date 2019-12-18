

const state={
	stocks:[],
	funds:10000
};
//allows change on the state
const mutations={
	'BUY_STOCKS' (state,{stockId,quantity,stockPrice}){
		const record=state.stocks.find(element=>element.id===stockId)
		if(record){
			record.quantity+=quantity
		}else{
			state.stocks.push({
				id:stockId,
				quantity:quantity
			})
		}
		state.funds-=stockPrice*quantity
	},
	'SELL_STOCKS' (state,{stockId,quantity,stockPrice}){
		const record=state.stocks.find(element=>element.stock_id===stockId)
		if(record.quantity>quantity){
			record.quantity-=quantity
		}else{
			state.stocks.splice(state.stocks.indexOf(record),1)
		}
		state.funds+=stockPrice*quantity
	},
	'GET_SAVED_STOCKS' (state,data){
		for (var i = 0; i < data.length; i++) {
			data[i]
			const record=state.stocks.find(element=>element.stock_id===data[i].stock_id_foreign)
			if(record){
				record.quantity+=quantity
			}else{
				state.stocks.push({
					id:data[i].stock_id_foreign,
					quantity:data[i].saved_quantity
				})
			}		
		}
		
	},
}

//functions used to make or not change to the state
const actions={
	sellStock:({commit},order)=>{
		commit('SELL_STOCKS',order)
	},
	getSavedStock:({commit},order)=>{
		fetch('http://localhost:3001/loadstocks')
      	.then(response=>{
          return response.json()
        })
        .then(data=>{
        	if(data.length===0){
        		console.log('No saved stocks')
        	}else{        		
        		commit('GET_SAVED_STOCKS',data) 
        	}          
        })		
	},
}

//allows to use those datas in the entire app
const getters={
	stockPortfolio(state,getters){
		return state.stocks.map(stock=>{
			const record=getters.stocks.find(element=> element.stock_id===stock.id)
			console.log(record)
			return {
				id:stock.id,
				quantity:stock.quantity,
				name:record.name,
				price:record.price
			}
		})
	},
	funds(state){
		return state.funds
	}
}

export default{
	state,
	mutations,
	getters,
	actions
}