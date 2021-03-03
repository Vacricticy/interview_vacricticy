/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    //   如果当前元素已经大于了0，则直接退出循环
    if (nums[i] > 0) break;
    // 如果当前元素与上一个元素相同，则跳过当前循环
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    var low = i + 1;
    var high = nums.length - 1;
    while (low < high) {
      var sum = nums[i] + nums[low] + nums[high];
      if (sum == target) {
        res.push([nums[i], nums[low], nums[high]]);
        //   如果low的值与low+1相同，则往下继续走
        while (nums[low] == nums[low + 1] && low < high) {
          low++;
        }
        while (nums[high] == nums[high - 1] && low < high) {
          high--;
        }
        low++;
        high--;
      } else if (sum > target) {
        high--;
      } else {
        low++;
      }
    }
  }
  return res;
}; 
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
console.log(threeSum([-1, 0, 1, 2, -1, -4], 1));
console.log(threeSum([-1, 0, 1, 2, -1, -4], 2));
console.log(threeSum([-1, 0, 1, 2, -1, -4], 3));
