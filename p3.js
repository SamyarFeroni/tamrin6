function getArrayDepth(array) {
    let levels = 1;
    let prev_length = 1;
    let curr_length = array.length;
    while (curr_length > prev_length) {
        array = array.flat();
        prev_length = curr_length
        curr_length = array.length;
        levels++
    }
    return levels;
}
let testRy = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12]
console.log(getArrayDepth(testRy));//p3