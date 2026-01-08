//[0,1,5,7]
/*target=6 so here  1+5 means 6 */
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j];
            }
        }
    }
    return [];
}
let ans=twoSum([0,1,2,4,6],3);
console.log(ans);