/*Remove Duplicates from Sorted Array
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]*/
var removeDuplicates = function(nums) {
   let counter=1;
   for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[i-1])
    {
        nums[counter]=nums[i];
        counter++;
    }
   }
   return counter;
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));