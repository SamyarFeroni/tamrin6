let personData = [
    {
        uid : 1,
        firstName : 'samyar',
        lastName : 'feroni',
    },
    {
        uid : 2,
        firstName : 'mahyar',
        lastName : 'feroni'
    },
];
let additionalPersonData = [
    {
        uid : 1,
        postion : "Back-End Developer",
        city : "Tehran"
    },
    {
        uid :2,
        postion: "Front-End Developer",
        city : "Qeshm"
    },
];
function mixByUid(array1,array2){
    let list = []
    array1.forEach(x => {
        array2.forEach(y =>{
            if(x.uid === y.uid){
                list.push({...x,...y})
            }
        })
    });
    return list
};
console.log(mixByUid(personData,additionalPersonData));