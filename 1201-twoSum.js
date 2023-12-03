var twoSum = function(nums, target) {
    const obj = {};
    for (let i = 0;  i < nums.length; i++) {
        const compliment = target - nums[i];
        if (!obj.hasOwnProperty(compliment)) {
             obj[nums[i]] = i;
        } else {
            return [obj[compliment], i]
        }
    }
};