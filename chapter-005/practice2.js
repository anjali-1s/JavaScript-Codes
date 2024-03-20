let prices = [250,645,300,900,50];

for(let i = 0; i < prices.length; i++){
     let offer = prices[i]/10;
     prices[i] = prices[i] - offer;
     console.log(prices[i]);
}

console.log(prices);
