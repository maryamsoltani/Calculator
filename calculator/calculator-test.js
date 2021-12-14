
it ("should calculate the monthly rate correctly", function (){
  expect (
    calculateMonthlyPayment({ amount :1000, years :2, rate: 0.2})
  ).toEqual("50.90");
  expect(calculateMonthlyPayment({ amount: 0, years: 1, rate: 0.1 })).toEqual(
    "0.00"
  );

  it("should return a result with 2 decimal places", function () {
    expect(

    )
  

});
