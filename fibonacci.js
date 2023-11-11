//Function using loop to get fibonacci sequence
function fibs(number){
    let arr = [0,1];

    for (let i = 2; i < number; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    
    return arr.slice(0, number);
}
//test function
console.log(fibs(5))


//Function using recursive method
function fibsRecursive(number, arr = [0, 1]) {
    //base
    if (number <= arr.length) {
        return arr.slice(0, number);
    }

    //recursion
    const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextFib);
    return fibsRecursive(number , arr);
}

//test function
console.log(fibsRecursive(5));