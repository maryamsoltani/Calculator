window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");

  loanAmount.value = 1000;
  loanYears.value = 1;
  loanRate.value = 0.2;

  updateMonthly(
    calculateMonthlyPayment({
      amount: loanAmount.value,
      years: loanYears.value,
      rate: loanRate.value,
    })
  );

}

function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  if (getCurrentUIValues().rate > 1) {
    alert(
      "A rate greater than 1 was entered"
    );
  }
  if (getCurrentUIValues().years <= 1 / 12) {
    alert(
      "Entered time is a month or less; the loan must be repaid in full the first month."
    );
  }
}

function calculateMonthlyPayment(values) {
  if (values.rate <= 1 / 12) {
    return values.amount.toFixed(2);
  }
  let payment =
    (values.amount * values.rate) / 12 /
    (1 - Math.pow(1 + values.rate / 12, -12 * values.years));
  return payment.toFixed(2);

}
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}
