// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency >10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if(currency<=0){
        return{};
    }
    var Answear = {};
    if (currency>= 50){
        Answear.H = parseInt(currency/50)|| undefined;
        currency = currency % 50;
    }
    if (currency>= 25){
        Answear.Q = parseInt(currency/25)|| undefined;
        currency = currency % 25;
    }
    if (currency>= 10){
        Answear.D = parseInt(currency/10)|| undefined;
        currency = currency % 10;
    }
    if (currency>= 5){
        Answear.N = parseInt(currency/5)|| undefined;
        currency = currency % 5;
    }
    if (currency>= 1){
        Answear.P = currency;
    }
    return Answear;
}
