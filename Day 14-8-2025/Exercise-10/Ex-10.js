function sumNumbers(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log("Sum 1:", sumNumbers(1, 2, 3));         
console.log("Sum 2:", sumNumbers(10, 20));          
console.log("Sum 3:", sumNumbers(5, 15, 25, 35));  
