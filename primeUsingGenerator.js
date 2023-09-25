function* generatePrimes(limit) {
    if (limit < 2) {
      return;
    }
  
    yield 2;
  
    const primes = [2];
  
    for (let number = 3; number <= limit; number += 2) {
      let isPrime = true;
  
      for (let prime of primes) {
        if (prime * prime > number) break;
        if (number % prime === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(number);
        yield number;
      }
    }
  }
  
  // Usage example: Generate prime numbers up to a specified limit
  const limit = 50;
  const primeGenerator = generatePrimes(limit);
  
  for (const prime of primeGenerator) {
    console.log(prime);
  }
  