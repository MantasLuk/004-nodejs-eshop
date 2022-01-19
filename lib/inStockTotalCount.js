// funkcija, kuri skaiciuoja visu likutiniu (neparduotu) prekiu kieki


function inStockTotalCount(goodsInfo) {
    

    let sum = 0;
    for(const item of goodsInfo ){
    sum += item.inStock
    }
    return sum;
}

module.exports = inStockTotalCount;