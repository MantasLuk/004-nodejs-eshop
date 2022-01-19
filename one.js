
let num = '45385593107843568'

function fakeBin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
    }

console.log(fakeBin(num))