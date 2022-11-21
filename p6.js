let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza",
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami"
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi"
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri"
    }
];
let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand"
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan"
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan"
    }
];
let result = [];
function mixByUid() {
    personData.forEach(x => {
        additionalPersonData.forEach(y => {
            if (x.uid === y.uid) {
                result.push({ ...x, ...y })
            }
        })
    });
    return result
};
mixByUid();
function read() {
    return result
}
function creat(obj) {
    result.forEach(element => {
        let chek = element.uid == obj.uid
        if (chek === true) {
            console.log('duplicate value')
        }
    })
};
function update(uID){
    let Up =  result.map(u => u.uid !== uID.uid ? u : uID)
    return Up
    
}
function deleteObj(uID){
    let del = result.findIndex((obj) => obj.uid === uID.id);
    result.splice(del,1)
    return result
}
//Logs
console.log(read());
console.log(creat({
    uid: 6,
    firstName: 'Morteza',
    lastName: 'Hamedani',
    position: 'Devops',
    city: 'Shiraz'
}));
console.log(update({uid: 6,
    firstName: '[ikqwaoes]',
    lastName: 'Hamedafaswjupewiasvcf[ni',
    position: 'Devopiwhgs',
    city: 'Shiruwoghohaz'}))
console.log(deleteObj(6))