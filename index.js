const sumof = (arr)=>{
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
       ans += arr[i];
    }
    return ans;
}
const productof =(arr)=>{
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
       ans *= arr[i];
    }
    return ans;
}


const averageOf = (arr) => {
    const sum = sumOfArray(arr);
    return sum / arr.length;
}

const findMax = (arr) => {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const findMin = (arr) => {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const reverse = (arr) => {
    return arr.reverse();
}

const countOccurrences = (arr, value) => {
    return arr.reduce((count, element) => {
        return count + (element === value ? 1 : 0);
    }, 0);
}

const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

const Duplicates = (arr) => {
    return Array.from(new Set(arr));
}

module.exports = {
    sumof ,
    productof,
    averageOf,
    findMax,
    findMin,
    reverse,
    countOccurrences,
    isSorted,
    Duplicates,
}