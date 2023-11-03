"use strict"

function solveEquation(a, b, c) {

  const arr = [];

  const d = (b * b - 4 * a * c);

  if (d > 0) {

    const x1 = (-b + Math.sqrt(d) )/(2*a);
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {

    const x = (-b/(2*a));
    arr.push(x);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const percentMonth = percent / 100 / 12;

  const body = (amount - contribution);

  const monthlyPayment = body * (percentMonth + percentMonth / (((1 + percentMonth) ** countMonths) - 1));

  const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return totalAmount

}