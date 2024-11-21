/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - The merged sorted array.
 */

function merge(arr1, arr2) {
	let merged = [];
	let i = 0,
		j = 0;

	// Compare elements from both arrays and add the smallest to merged array
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	// Add remainging elements from arr1
	while (i < arr1.length) {
		merged.push(arr1[i]);
		i++;
	}

	// Add remaining elements from arr2
	while (j < arr2.length) {
		merged.push(arr2[j]);
		j++;
	}

	return merged;
}

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} - The sorted array.
 */

function mergeSort(arr) {
	// Base case: arrays with 1 or 0 elements are already sorted

	if (arr.length <= 1) return arr;

	// Divide the array into two halves
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	// Recursively sort both halves and merge them
	return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
