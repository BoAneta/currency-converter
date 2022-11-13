let formElement = document.querySelector(".js-form");
let toExchangeElement = document.querySelector(".js-toExchange");
let toGetElement = document.querySelector(".js-toGet");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currencyTo");
let submitElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");

let PLN = 1;
let EUR = 4.67;
let NOK = 0.46;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currencyFromselect;
  let currencyToselect;
  let toExchangeValue = +toExchangeElement.value;
  let result;

  switch (currencyFromElement.value) {
    case "PLN":
      currencyFromselect = PLN;
      break;1
    case "€":
      currencyFromselect = EUR;
      break;
    case "NOK":
      currencyFromselect = NOK;
      break;
  }

  switch (currencyToElement.value) {
    case "PLN":
      currencyToselect = PLN;
      break;
    case "€":
      currencyToselect = EUR;
      break;
    case "NOK":
      currencyToselect = NOK;
      break;
  }

  result = (toExchangeValue * currencyFromselect) / currencyToselect;
  toGetElement.value = result.toFixed(2);

  resultElement.innerHTML = `Wymieniasz <strong>${toExchangeValue.toFixed(2)} ${currencyFromElement.value}</strong> i otrzymasz <strong>${result.toFixed(2)} ${currencyToElement.value}</strong>`;
});
