//using IIFE to make variables private
let fnc=(function(){
    let bankBalance;
    function setBankBalance(val){
        bankBalance=val;
    }

    function checkBankBalance(){
        return bankBalance;
    }

    function withdrawBalance(val){
        bankBalance-=val;
        return bankBalance;
    }

    return{
        setBankBalance,
        checkBankBalance,
        withdrawBalance
    }
})();

fnc.setBankBalance(12000);
console.log(`current bank balance is : ${fnc.checkBankBalance()}`);
console.log(`after withdrawing 11000 the current balance is ${fnc.withdrawBalance(200)}`);
