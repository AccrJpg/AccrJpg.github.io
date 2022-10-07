function fibonacci(num){
  let a = 0;
  let b = 1;
  let temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(2));
  console.log(fibonacci(3));
  console.log(fibonacci(4));
  console.log(fibonacci(5));
  console.log(fibonacci(6));