

function currency(goodsInfo) {
    let currency = '';
    for(const item of goodsInfo ){
    currency = item.price.currency;
    
    }
    return currency;
}

module.exports = currency;