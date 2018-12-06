//creating Object for person1
var Amitabh={ fname:"Srivani",
lname:"gunti",
age:21,
skills:["coding","cooking","dancing","singing"],
address:{city:"Karimnagar",pincode:505001},
dateOfBirt:new Date('18-11-1996'),
profession:"Employee",
married:false}
//creating object for person2
var Abishek={fname:"Varun",
age:23,
skills:["eating","sleeping"],
dateOfBirth:new Date('22-09-1994'),
profession:"Software Employee",
married:false}
console.log(Abishek);
print=function()
{
    var Abishek=Object.create(Amitabh); //By creating object we are accessing properties from person1
    console.log(Amitabh.fname);
    console.log(Abishek.lname);
    console.log(Abishek.address);
}
print();
