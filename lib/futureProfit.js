// funkcija, kuri apskaiciuoja, uz kiek dar galima suprekiauti is likusiu prekiu



function futureProfit(goodsInfo) {
        let sum = 0;
        let currency = '';
        for(const item of goodsInfo ){
        sum += item.price.value * item.inStock;
        currency = item.price.currency;
        
        }
        return sum;
    }

module.exports = futureProfit;
