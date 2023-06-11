////// SOLUTIONS OF THE ASSIGNMENT QUESTIONS--11 ///////

//// Question--1 ////

var theSqrt = function(x) {
    if (x < 2) {
        return x;
    }
    
    let left = 1;
    let right = Math.floor(x / 2);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};

console.log(theSqrt(4)); // Output: 2
console.log(theSqrt(8)); // Output: 2


//// Question--2 ////

var peakElementFind = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            // The peak is on the right side
            left = mid + 1;
        } else {
            // The peak is on the left side or the current element is the peak
            right = mid;
        }
    }

    return left;
};

console.log(peakElementFind([1, 2, 3, 1])); // Output: 2
console.log(peakElementFind([1, 2, 1, 3, 5, 6, 4])); // Output: 5


//// Question--3 ////

var missingNumber = function(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    
    for (let num of nums) {
        actualSum += num;
    }
    
    return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8


//// Question--4 ////

var findTheDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    // Move tortoise one step and hare two steps at a time
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
    
    // Reset tortoise to the start and move both tortoise and hare one step at a time
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return hare;
};

console.log(findTheDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findTheDuplicate([3, 1, 3, 4, 2])); // Output: 3


//// Question--5 ////

var intersectionArray = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];
    
    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }
    
    return result;
};

console.log(intersectionArray([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersectionArray([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]


//// Question--6 ////

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11


//// Question--7 ////

var searchRange = function(nums, target) {
    const leftIndex = findLeftIndex(nums, target);
    const rightIndex = findRightIndex(nums, target);
    
    if (leftIndex <= rightIndex) {
        return [leftIndex, rightIndex];
    } else {
        return [-1, -1];
    }
};

function findLeftIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] >= target) {
            right = mid - 1;
            if (nums[mid] === target) {
                leftIndex = mid;
            }
        } else {
            left = mid + 1;
        }
    }
    
    return leftIndex;
}

function findRightIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightIndex = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] <= target) {
            left = mid + 1;
            if (nums[mid] === target) {
                rightIndex = mid;
            }
        } else {
            right = mid - 1;
        }
    }
    
    return rightIndex;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]


//// Question--8 ////

var intersectInteger = function(nums1, nums2) {
    const numCount = {};
    const result = [];

    for (let num of nums1) {
        numCount[num] = (numCount[num] || 0) + 1;
    }

    for (let num of nums2) {
        if (numCount[num] && numCount[num] > 0) {
            result.push(num);
            numCount[num]--;
        }
    }

    return result;
};

console.log(intersectInteger([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
console.log(intersectInteger([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]


/////////////////////////// END /////////////////////////////////////////////////////