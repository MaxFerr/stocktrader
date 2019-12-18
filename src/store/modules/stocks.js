
//import stocks from '../../data/stocks.js'

const state={
	stocks:[],
	isOpen:false
};
//allows change on the state
const mutations={
	'SET_STOCKS' (state,stocks){
		state.stocks=stocks;
	},
	'RND_STOCKS' (state){
		state.stocks.forEach(stock=>{			
			stock.price=Math.round(Number(stock.price)*(1+Math.random()-0.46));
		})
	},
	'SET_DROPDOWN' (state,value){
		if (value) {
			state.isOpen=false
		}else{
			state.isOpen=!state.isOpen;
		}		
	},	
}

//functions used to make or not change to the state
const actions={
	buyStock:({commit},order)=>{
		commit('BUY_STOCKS',order)
	},
	initStocks:({commit})=>{		
		fetch('http://localhost:3001/')
    	.then(response=>{
          return response.json()
        })
        .then(data=>{          
            commit('SET_STOCKS',data)       
        })
		
	},
	randomizeStocks:({commit})=>{
		commit('RND_STOCKS')
	},
	openCloseDropDw:({commit},value)=>{		
			commit('SET_DROPDOWN',value)		
	},
}

//allows to use those datas in the entire app
const getters={
	stocks: state=>{
		return state.stocks
	},
	isOpen: state=>{
		return state.isOpen
	}
}

export default{
	state,
	mutations,
	getters,
	actions
}