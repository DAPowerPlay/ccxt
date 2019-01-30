const ccxt      = require ('../../ccxt.js')
const log       = require ('ololog').configure ({ locate: false })

let tokens = new ccxt.tokens  ({ 
        'apiKey': process.env.TOKENS_NET_API_KEY, 
        'secret': process.env.TOKENS_NET_SECRET
    })

tokens.fetchMarkets().then(function(r){
	log(r)
})

tokens.fetchOrderBook('DPP/ETH').then(function(r){
	log(r)
})

tokens.fetchTrades('DPP/ETH').then(function(r){
	log(r)
})

tokens.fetchBalance('ETH').then(function(r){
	log(r)
})

// emulated, this 'attacks' tokens.net with multiple requests in sequence as tokens.net does not have a single route to get all balances in one call
tokens.fetchBalance().then(function(r){
	log(r)
})