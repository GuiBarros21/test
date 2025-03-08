function findPairs(nums1, nums2, k) {
	// Function to find the index of the smallest element (pivot) in a rotated sorted array
	function findPivot(arr) {
		let left = 0,
			right = arr.length - 1;
		while (left < right) {
			let mid = Math.floor((left + right) / 2);
			if (arr[mid] > arr[right]) left = mid + 1;
			else right = mid;
		}
		return left;
	}

	// Function to rotate back to a sorted array
	function sortedArray(arr) {
		let pivot = findPivot(arr);
		return arr.slice(pivot).concat(arr.slice(0, pivot));
	}

	// Convert nums1 and nums2 to sorted order
	let sortedNums1 = sortedArray(nums1);
	let sortedNums2 = sortedArray(nums2);

	// Two-pointer approach
	let left = 0,
		right = sortedNums2.length - 1;
	let result = [];

	while (left < sortedNums1.length && right >= 0) {
		let sum = sortedNums1[left] + sortedNums2[right];

		if (sum === k) {
			result.push([sortedNums1[left], sortedNums2[right]]);
			left++; // Move forward to find other pairs
			right--; // Move backward to find other pairs
		} else if (sum < k) {
			left++; // Increase sum
		} else {
			right--; // Decrease sum
		}
	}

	return result;
}

// Test case
let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

console.log(findPairs(nums1, nums2, k));
