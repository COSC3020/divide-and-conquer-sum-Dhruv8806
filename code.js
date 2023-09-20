unction divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    } else if (a.length <= 3) {
        return a.reduce(function(sum, num) {
            return sum + num;
        }, 0);
    } else {
        // Find the midpoints for the three sub-arrays
        var mid1 = Math.floor(a.length / 3);
        var mid2 = mid1 * 2;
        // Divide the array into three sub-arrays
        var left = a.slice(0, mid1);
        var middle = a.slice(mid1, mid2);
        var right = a.slice(mid2);
        // Recursively calculate the sum of each sub-array and sum them up
        var sumLeft = divideAndConquerSum(left);
        var sumMiddle = divideAndConquerSum(middle);
        var sumRight = divideAndConquerSum(right);
        var totalSum = sumLeft + sumMiddle + sumRight;

        return totalSum;
    }
} 

// Test with an example array
var result = divideAndConquerSum([-3,4,9,1,56,-23,7]);
console.log("Result: " + result);

/* Sources used: 
Got Help from TA
Talked with Ziyu Wang, since I was a bit lost. But I was able to get on track. 
https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
https://www.quora.com/What-is-a-recursive-divide-and-conquer-procedure-function-that-calculates-the-sum-of-all-values-from-an-integer-array-of-size-N-passed-to-it-as-parameter-Decide-its-base-sizeof-case-carefully
https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/
*/
