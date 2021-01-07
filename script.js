let selectOne = document.getElementById('select-one');
let selectTwo = document.getElementById('select-two');
let amountOne = document.getElementById('amount-one');
let amountTwo = document.getElementById('amount-two');

let swapBtn = document.getElementById('swap-btn');
let rate = document.getElementById('rate');

function calculate(){
        let currency_one = selectOne.value;
    let currency_two = selectTwo.value;
    // console.log(currency_one, currency_two);

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json()).then(data => {
       const rates = data.rates[currency_two];
       rate.innerText = `1${currency_one}=${rates}${currency_two}`;

       amountTwo.value = (amountOne.value * rates).toFixed(2);
    })
}
calculate()

selectOne.addEventListener('change', calculate);
selectTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swapBtn.addEventListener('click',()=>{
    let temp = selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = temp;
    calculate();
})