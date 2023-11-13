function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array in two
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    //console.log(left, right);

    // Recursive sort of ech half
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right)

    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    
    // Compare elements from left and right and merge sorted
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++
        }
    }

   

    result = result.concat(left.slice(i), right.slice(j));
    console.log(result);
    return result;

}

const unsortedArray = [4, 23, 45, 2, 1, 9, 3, 27, 22];

mergeSort(unsortedArray);