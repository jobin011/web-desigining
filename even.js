function countEvenNumbers(arr) {
    let count = 0; // Initialize the count of even numbers
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++; // Increment the count if the current number is even
      }
    }
  
    return count;
  }
  
  const integers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenCount = countEvenNumbers(integers);
  console.log("Number of even numbers:", evenCount);
  