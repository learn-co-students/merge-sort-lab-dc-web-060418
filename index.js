
//write helper function for merging
function merge(array1, array2) {
    //calls on findMinAndRemoveSorted
    let sortedArray = []
    while(array1.length > 0 && array2.length > 0) {
        if(array1[0]<= array2[0]) {
            sortedArray.push(findMinAndRemoveSorted(array1))
        } else {
            sortedArray.push(findMinAndRemoveSorted(array2))
        }
    }
    return sortedArray.concat(array1).concat(array2)
}
//write function for finding the first (min) value of a sorted array, removes it
function findMinAndRemoveSorted(array) {
    return array.shift()
}
//write algorithm that uses these
function mergeSort(array) {
    
    //you'll need to keep splitting until you reach arrays of length 1
    //call recursively on mergeSort to keep getting smaller arrays, splitting and merging them
    if(array.length === 1) {
        return array
    } else {
        //split in half
        let midpoint = array.length/2;
        let firstHalf = array.slice(0, midpoint);
        let secondHalf = array.slice(midpoint);
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}