const formElement = document.querySelector(".js-form");
const toExchangeElement = document.querySelector(".js-toExchange");
const toGetElement = document.querySelector(".js-toGet");
const currencyFromElement = document.querySelector(".js-currencyFrom");
const currencyToElement = document.querySelector(".js-currencyTo");
const submitElement = document.querySelector(".js-submit");
const resultElement = document.querySelector(".js-result");

const PLN = 1;
const EUR = 4.67;
const NOK = 0.46;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currencyFromselect;
  let currencyToselect;
  let toExchangeValue = +toExchangeElement.value;
  let result;

  switch (currencyFromElement.value) {
    case "PLN":
      currencyFromselect = PLN;
      break;
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
