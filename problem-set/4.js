/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 双指针方法
    let len1=nums1.length;
    let len2=nums2.length;
    let len=len1+len2;
    let p1=0;
    let p2=0;
    let preValue=-1;
    let curValue=-1;
    for(let i=0;i<=Math.floor(len/2);i++){
        preValue=curValue;
        if(p1<len1&&(p2>=len2||nums1[p1]<=nums2[p2])){
            curValue=nums1[p1]
            p1++;
        }else{
            curValue=nums2[p2];
            p2++;
        }
    }
    return len%2===0?(preValue+curValue)/2:curValue;
};
