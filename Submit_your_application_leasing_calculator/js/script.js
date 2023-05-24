"strict mode";

document.addEventListener("DOMContentLoaded", () => {
  const price = document.querySelector("#price");
  const contribution = document.querySelector("#contribution");
  const skrok = document.querySelector("#skrok");

  const rangevalue = document.querySelector("#rangevalue");
  const rangeval = document.querySelector("#rangeval");
  const rang = document.querySelector("#rang");

  const priceSumma = document.querySelector("#priceSumma");
  const resultat = document.querySelector("#resultat");

  const inputsRange = document.querySelectorAll(".promo__forma__input");
  const inputsNamber = document.querySelectorAll(".promo__forma__value");

  const assignValue = () => {
    rangevalue.value = price.value;
    rangeval.value = contribution.value;
    rang.value = skrok.value;
  };

  assignValue();

  const assingValueRevers = () => {
    price.value = rangevalue.value;
    contribution.value = rangeval.value;
    skrok.value = rang.value;
  };

  assingValueRevers();

  for (let input of inputsRange) {
    input.addEventListener("input", () => {
      assignValue();
      calculationLizing(rangevalue.value, rangeval.value, rang.value);
    });
  }

  for (let input of inputsNamber) {
    input.addEventListener("input", () => {
      assingValueRevers();
      calculationLizing(rangevalue.value, rangeval.value, rang.value);
    });
  }

  function formatNumber(number) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(number);
  }

  const calculationLizing = (rangevalue, rangeval, rang) => {
    const lounAmount = rangevalue - rangeval;

    const monthlyPayment = lounAmount / parseInt(rang, 10);

    const monthlyPaymentArounded = Math.round(monthlyPayment);

    if (monthlyPaymentArounded < 0 || lounAmount < 0) {
      return false;
    } else {
      priceSumma.innerHTML = formatNumber(lounAmount);
      resultat.innerHTML = formatNumber(monthlyPaymentArounded);
      console.log(monthlyPaymentArounded);
    }
  };
});

// function handleChange(selctor, event) {
//   selctor.value = event.target.value;
// }

// function enterChange(event, selctor) {
//   event.value = selctor.target.value;
// }

// rangevalue.addEventListener("input", (selctor) =>
//   enterChange(price, selctor)
// );
// rangeval.addEventListener("input", (selctor) =>
//   enterChange(contribution, selctor)
// );
// rang.addEventListener("input", (selctor) => enterChange(skrok, selctor));

// price.addEventListener("input", (event) => handleChange(rangevalue, event));
// contribution.addEventListener("input", (event) =>
//   handleChange(rangeval, event)
// );
// skrok.addEventListener("input", (event) => handleChange(rang, event));
