// 快排写法

// let findKthLargest = function (nums, k) {
//     function quickSelect(array, l, r, k) {
//         // 随机选取l到r之间的一个整数作为pivot
//         let pivot = Math.floor(Math.random() * (r - l + 1) + l);
//         [array[pivot], array[r]] = [array[r], array[pivot]];
//         let quick = l;
//         let slow = l;
//         while (quick !== r) {
//             if (array[quick] < array[r]) {
//                 [array[quick], array[slow]] = [array[slow], array[quick]];
//                 slow++;
//             }
//             quick++;
//         }
//         [array[slow], array[r]] = [array[r], array[slow]];
//         if (slow === array.length - k) {
//             return array[slow];
//         } else {
//             if (slow < array.length - k) {
//                 return quickSelect(array, slow + 1, r, k);
//             } else {
//                 return quickSelect(array, l, slow - 1, k);
//             }
//         }
//     }
//
//     return quickSelect(nums, 0, nums.length - 1, k)
// };
//
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
