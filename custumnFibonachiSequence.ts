/* 
  Функция принимает 2 числа и ограничение вычисления. на их основе вычисляеться последовательность 
  чисел по формуле фибоначи Fn = F(n-1) + F(n-2). Из последовательности вычисляеться сумма четных чисел
*/
function custumnFibonachiSequence(
  first: number,
  second: number,
  max: number = 7000000
) {
  let fib_1 = first;
  let fib_2 = second;
  let fibCurrent: number = 0;
  let sum: number = 0;
  while (max > fibCurrent) {
    fibCurrent = fib_1 + fib_2;
    fib_1 = fib_2;
    fib_2 = fibCurrent;
    if (checkEven(fibCurrent)) {
      sum += fibCurrent;
    }
  }

  return sum;
}

// функция принимает число и возвращает true если оно четное
function checkEven(value: number): boolean {
  return value % 2 === 0;
}

console.log(custumnFibonachiSequence(3, 4));
