function addArray(array1, array2) {
    let list = []
        for(let i = 0;i<array1.length;i++){
            array1.reverse()
            console.log(i)
            list.push((`${i+1}${array1[i]} choice is ${array2[i]}`))
    }
    return list
};
let o = ['rd','th','nd','st'];
let color = ['Blue','Green','Red',"Black","Yellow","Orange", "White","Purple","Violet","Indigo', 'Gray","Pink"];
console.log(addArray(o,color));
