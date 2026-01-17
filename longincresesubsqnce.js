 /*Longest Continuous Increasing Subsequence
 Input: nums = [1,3,5,4,7]
Output: 3
Input: nums = [2,2,2,3,2]
Output: 1*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max=1;
    let counter=1;
    if(nums.length==0){
        return 0;
    }
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            counter++;
            max=Math.max(max,counter);
        }else{
            counter=1;
            
        }

    }
    return max;

};
console.log(findLengthOfLCIS([2,2,2,3,2]));