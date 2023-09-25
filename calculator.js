function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      // Check for valid operation
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject('Both inputs should be numbers.');
      } else if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        reject('Invalid operation. Use +, -, *, or /.');
      } else if (operation === '/' && num2 === 0) {
        reject('Division by zero is not allowed.');
      } else {
        let result;
        switch (operation) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            reject('Invalid operation. Use +, -, *, or /.');
            return;
        }
        resolve(result);
      }
    });
  }
  
  // Example usage:
  calculate(10, 5, '+')
    .then((result) => {
      console.log('Result:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  