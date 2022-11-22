let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];
let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];
let result = [];
(function () {
  personData.forEach((x) => {
    additionalPersonData.forEach((y) => {
      if (x.uid === y.uid) {
        result.push({ ...x, ...y });
      }
    });
  });
  return result;
})();

function read() {
  return result;
}

function creat(obj) {
  let findByUid = result.find((item) => item.uid == obj.uid);
  if (findByUid) return console.error("duplicate value");
  result.push(obj);
}

function update(obj) {
  result = result.map((item) => (item.uid !== obj.uid ? item : obj));
  return result;
}

function deleteObj(id) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid == id) {
      result.splice(i, 1);
    }
  }
}

//Logs

creat({
  uid: 6,
  firstName: "Morteza",
  lastName: "Hamedani",
  position: "Devops",
  city: "Shiraz",
});

update({
  uid: 6,
  firstName: "[ikqwaoes]",
  lastName: "Hamedafaswjupewiasvcf[ni",
  position: "Devopiwhgs",
  city: "Shiruwogh***ohaz",
});

deleteObj(4);

console.log(read());
