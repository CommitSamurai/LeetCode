/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



let twoSum = function(nums, target) {
    const outputIndices = [];
    
    for(let i = 0; i <= nums.length - 2; i++){
        for(let j = i + 1; j <= nums.length - 1; j++){
            let sum = 0;
            sum = nums[i] + nums[j];
            if (sum === target){
                outputIndices.push(i);
                outputIndices.push(j);
                return outputIndices;
            }
        };
    };
};
