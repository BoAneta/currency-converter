let formElement = document.querySelector(".js-form");
let toExchangeElement = document.querySelector(".js-toExchange");
let toGetElement = document.querySelector(".js-toGet");
let currency1Element = document.querySelector(".js-currency-1");
let currency2Element = document.querySelector(".js-currency-2");
let submitElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");

let PLN = 1;
let EU = 4.67;
let NOK = 0.46;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency1select;
  let currency2select;
  let toExchangeValue = +toExchangeElement.value;
  let result;

  switch (currency1Element.value) {
    case "PLN":
      currency1select = PLN;
      break;
    case "€":
      currency1select = EU;
      break;
    case "NOK":
      currency1select = NOK;
      break;
  }

  switch (currency2Element.value) {
    case "PLN":
      currency2select = PLN;
      break;
    case "€":
      currency2select = EU;
      break;
    case "NOK":
      currency2select = NOK;
      break;
  }

  result = (toExchangeValue * currency1select) / currency2select;
  toGetElement.value = result.toFixed(2);

  resultElement.innerHTML = `Wymieniasz <strong>${toExchangeValue.toFixed(2)} ${currency1Element.value}</strong> i otrzymasz <strong>${result.toFixed(2)} ${currency2Element.value}</strong>`;
});
