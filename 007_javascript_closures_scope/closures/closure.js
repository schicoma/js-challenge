const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
};

moneyBox(5); 
moneyBox(10); // saveCoins no guarda el valor anterior

const moneyBoxWithClosure = () => {
    let saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    }

    return countCoins;
};

let myMoneyBox = moneyBoxWithClosure();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(21);
