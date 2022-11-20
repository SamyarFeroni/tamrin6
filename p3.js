// function typeOf(value) {
//     var s = typeof value;
//     if (s === 'object') {
//         if (value) {
//             if (value instanceof Array) {
//                 s = 'array';
//             }
//         } else {
//             s = 'null';
//         }
//     }
//     return s;
// };
// function DeepArray(array){
//     // console.log(typeOf(array))
//     for(let i = 0;i<array.length;i++){
//         if(typeOf(array[i]) === typeOf(array)){
//         console.log(array[i])
//         }
//     }
// };
// console.log(DeepArray([10,[25,13],[14,[55]],2]))
function getArrayDepth(ry){
    // number of levels: how deep is the array
    let levels = 1;
    // previous length
    let prev_length = 1;
    // current length
    let curr_length = ry.length;
    //if the resulting array is longer than the previous one  add a new level
    while(curr_length > prev_length){
    ry = ry.flat();
    prev_length = curr_length
    curr_length = ry.length;
    levels ++
    }
    return levels;
  }
  
  
  
  let testRy = [1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]
  
  console.log(testRy);
  
  console.log(getArrayDepth(testRy))
  
  console.log(testRy);