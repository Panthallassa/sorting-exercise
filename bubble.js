/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} - The sorted array.
 */

function bubbleSort(arr) {
	let n = arr.length;
	let swapped;

	// Outer loop iterates thruogh the array
	do {
		swapped = false; // Track if swap occured
		for (let i = 0; i < n; i++) {
			if (arr[i] > arr[i + 1]) {
				// Swap adjacent elements if they are in the wrong order
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
		// Each pass guarantees the largest element in the unsorted portion is moved to the end
		n--; // Reduce the range of unsorted elements
	} while (swapped);

	return arr;
}

module.exports = bubbleSort;
