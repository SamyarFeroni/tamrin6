function OneArray(array){
    return array.join().split(",").map(str =>{
        return Number(str)
    })  
}
console.log(OneArray([1,2,3,[4,5,6],[56,[85]]]))