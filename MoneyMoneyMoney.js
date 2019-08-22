function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) {
    return 0;
  }
  let years = 0;
  while (principal < desired) {
    let AfterInterest = principal * interest;
    let taxedMoney = AfterInterest * tax;
    principal = principal + (AfterInterest - taxedMoney);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);
