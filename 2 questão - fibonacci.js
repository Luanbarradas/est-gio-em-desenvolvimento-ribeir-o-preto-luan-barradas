const isFibonacci = (value) => {
  let previous = 0;
  let next = 1;

  while (next <= value) {
    if (next === value) {
      return true;
    }
    let sum = previous + next;
    previous = next;
    next = sum;
  }

  return false;
};

const number = 34;

if (isFibonacci(number)) {
  console.log(`O número ${number} pertence à sequência de Fibonacci`);
} else {
  console.log(`O número ${number} não pertence à sequência de Fibonacci`);
}
