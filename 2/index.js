// alert('Hey...');

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then( res =>{
//     console.log("Response, WAITING TO pARSE", res)
//     RETURN res.JSON()
// })
// .then( data =>{
//     console.log("Data Parsed..".data)
// })
// .catch ( e => {
//     console.log("Oh no!", e)  
// })

// below one would be with Async
const fetchBitcoinPrice = async () => {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data.ticker.price)
}