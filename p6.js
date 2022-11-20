let result = [{ uid: 3 ,firstName: '', lastName: '', },{ uid: 2, firstName: 'souhfaseofamyar', lastName: 'ferofeiwqahphani', }]





function creat(Obj) {
    let list1 = []
    let array = {}
    for (let i = 0; i < result.length; i++) {
        let list2 = result[i].uid;
        list1.push(list2);
        result.push(Obj);
        
        };
       

}








// function containsDuplicates(array) {
//     const result = array.some(element => {
//         if (array.indexOf(element) !== array.lastIndexOf(element)) {
//             return true;
//         }

//         return false;
//     });


//     let chek = containsDuplicates(array);
//     if (chek) {
//         return 'error'
//     } else {
//         result.push(personData);
//         console.log(result)
//         return true
//     };
// };




// function update(Obj) {

// };





// function Delete(uid) {

// };



 console.log(creat({ uid: 1, firstName: 'sam11yar', lastName: 'fe21roni', }));




// Delete(1);
