function fizzbuzz(number) {
  const divisibleBy = (divider, number) => number % divider === 0;

  if (divisibleBy(15, number)) {
    return "fizzbuzz";
  }

  if (divisibleBy(3, number)) {
    return "fizz";
  }

  if (divisibleBy(5, number)) {
    return "buzz";
  }

  return number;
}

module.exports = fizzbuzz;
