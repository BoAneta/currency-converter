{
  const calculateRate = (currencyFrom, currencyTo, value) => {

    const PLN = 1;
    const EUR = 4.67;
    const NOK = 0.46;

    let currencyFromselect;
    let currencyToselect;

    switch (currencyFrom) {
      case "PLN":
        currencyFromselect = PLN;
        break;
      case "€":
        currencyFromselect = EUR;
        break;
      case "NOK":
        currencyFromselect = NOK;
    };

    switch (currencyTo) {
      case "PLN":
        currencyToselect = PLN;
        break;
      case "€":
        currencyToselect = EUR;
        break;
      case "NOK":
        currencyToselect = NOK;
    };

    return (value * currencyFromselect) / currencyToselect;
  };

  const updateResultText = (toExchangeValue, currencyFromElement, result, currencyToElement) => {
    const resultElement = document.querySelector(".js-result");
    
    resultElement.innerHTML = `Wymieniasz <strong>${toExchangeValue.toFixed(2)}${currencyFromElement.value}</strong> i otrzymasz <strong>${result.toFixed(2)} ${currencyToElement.value}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const toExchangeElement = document.querySelector(".js-toExchange");
    const toGetElement = document.querySelector(".js-toGet");
    const currencyFromElement = document.querySelector(".js-currencyFrom");
    const currencyToElement = document.querySelector(".js-currencyTo");


    const toExchangeValue = +toExchangeElement.value;

    const result = calculateRate(currencyFromElement.value, currencyToElement.value, toExchangeValue);

    toGetElement.value = result.toFixed(2);

    updateResultText(toExchangeValue, currencyFromElement, result, currencyToElement);
  };

  const init = () => {

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
