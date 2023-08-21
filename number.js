function findMaxValue(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
  
    let max = arr[0]; // Initialize max with the first element
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if a larger value is found
      }
    }
  
    return max;
  }
  
  const numbers = [5, 10, 2, 8, 3];
  const maxValue = findMaxValue(numbers);
  console.log("Maximum value:", maxValue);
  