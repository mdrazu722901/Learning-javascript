var students = {name: "razu", ID: 71, phone: 01745197309};
// there are three way to get odject property
var info = "ID";
var phoneNumber1 = students.phone;
var idNum = students[info];
var youName = students["name"];

console.log(youName);
console.log(phoneNumber1);
console.log(idNum);

// there are three way to set object property in js
var idInfo = "ID";
students.name = "Md.Rakib";
students[idInfo] = 168671;
students['phone']= 01858324176;
console.log(students);

//also there are three way to setup new property in js Object
var startInfo = 'Session';
students['Semester'] = "7th semester";
students.departments = "Computer";
students[startInfo] = '2018-2019';
console.log(students);