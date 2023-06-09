////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--9 ///////

//// Question--1 ////

function PowerOfTwo(n) {
    if (n <= 0) {
        return false; // Negative numbers and zero are not powers of two
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // If n is not divisible by 2, it's not a power of two
        }
        n /= 2; // Divide n by 2 until it becomes 1 (if it's a power of two)
    }

    return true;
}

// Testing the function
console.log(PowerOfTwo(1));  // true
console.log(PowerOfTwo(16)); // true
console.log(PowerOfTwo(3));  // false
 ///Output: true,true,false


//// Question--2 ////

function sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2;
}

// Testing the function
console.log(sumOfFirstNNumbers(3)); // 6
console.log(sumOfFirstNNumbers(5)); // 15
  ///Output:6 ; 15


//// Question--3 ////

function factorial(N) {
    if (N === 0 || N === 1) {
        return 1; // Factorial of 0 and 1 is 1
    }

    let result = 1;
    for (let i = 2; i <= N; i++) {
        result *= i;
    }

    return result;
}

// Testing the function
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24


//// Question--4 ////

function computeExponentiation(N, P) {
    return Math.pow(N, P);
}

// Testing the function
console.log(computeExponentiation(5, 2)); // 25
console.log(computeExponentiation(2, 5)); // 32


//// Question--5 ////

function findMax(arr, index) {
    // Base case: When index reaches the end of the array
    if (index === arr.length - 1) {
        return arr[index];
    }

    // Recursive case: Compare the current element with the maximum of the remaining elements
    const current = arr[index];
    const maxOfRemaining = findMax(arr, index + 1);

    return Math.max(current, maxOfRemaining);
}

// Testing the function
console.log(findMax([1, 4, 3, -5, -4, 8, 6], 0)); // 8
console.log(findMax([1, 4, 45, 6, 10, -8], 0));  // 45


//// Question--6 ////

function findNthTerm(a, d, N) {
    return a + (N - 1) * d;
}

// Testing the function
console.log(findNthTerm(2, 1, 5));  // 6
console.log(findNthTerm(5, 2, 10)); // 23


//// Question--7 ////

function generatePermutations(S) {
    const result = [];
    permute(S, 0, S.length - 1, result);
    return result;
}

function permute(S, left, right, result) {
    if (left === right) {
        result.push(S); // Found a permutation
    } else {
        for (let i = left; i <= right; i++) {
            S = swapCharacters(S, left, i); // Swap characters
            permute(S, left + 1, right, result); // Recurse for remaining characters
            S = swapCharacters(S, left, i); // Backtrack (undo the swap)
        }
    }
}

function swapCharacters(S, i, j) {
    const charArray = S.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
}

// Testing the function
console.log(generatePermutations('ABC')); // ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(generatePermutations('XY'));  // ["XY", "YX"]


//// Question--8 ////

function productOfArrayElements(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}

// Testing the function
console.log(productOfArrayElements([1, 2, 3, 4, 5])); // 120
console.log(productOfArrayElements([1, 6, 3]));       // 18


/////////////////////////////// END ///////////////////////////////////////////////





