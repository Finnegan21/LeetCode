// 287. Find the Duplicate Number
// var findDuplicate = function(nums) {
//   let arr = new Set();
//   for (let i = 0; i < nums.length; i++) {
//       if(arr.has(nums[i]) === true) {
//           return nums[i];
//       } else (arr.add(nums[i]))
//   }
// };

// 58. Length of Last Word
// var lengthOfLastWord = function(s) {
//   // s.trim();
//   // s = s.split(" ");
//   //  for (let i = 1; i <= s.length; i++) {
//   //   if ((s[s.length - i]).length !== 0) {
//   //     return (s[s.length - i]).length;
//   //   }
//   //  }
//   s = s.trim();
//   let arr = s.split(' ');
//   return arr[arr.length - 1].length
// };
// console.log(lengthOfLastWord("a"));

// 283. Move Zeroes
// var moveZeroes = function(nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[j], nums[i]] = [nums[i], nums[j]];
//       j++;
//     }
//   }
//     return nums
// };
// console.log(moveZeroes([0,1,0,3,12]));

// 349. Intersection of Two Arrays
// var intersection = function(nums1, nums2) {
//     let arr = new Set(nums1);
//     let result = [];
//     for (let i = 0; i < nums2.length; i++) {
//         if (arr.has(nums2[i])) {
//             result.push(nums2[i])
//             arr.delete(nums2[i])
//         }
//     }
//     return result
// };
// console.log(intersection([4,9,5], [9,4,9,8,4]));

