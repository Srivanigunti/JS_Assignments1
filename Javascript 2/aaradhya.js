//creating Object for person1
var Amitabh={ fname:"Srivani",
lname:"gunti",
age:21,
skills:["coding","cooking","dancing","singing"],
address:{city:"Karimnagar",pincode:505001},
dateOfBirt:new Date('18-11-1996'),
profession:"Employee",
married:true}
//creating object for person2
var Abishek={fname:"Varun",
age:23,
skills:["eating","sleeping"],
dateOfBirth:new Date('22-09-1994'),
profession:"Software Employee",
married:true}
//creating object for person3
var Aaradhya={fname:"Aaradhya",
age:12,
skills:["playing"],
dateOfBirth:new Date('22-11-2006'),
profession:"Student",
married:false}
console.log(Abishek); //it prints only Abishek details
console.log(Amitabh);  //it prints only Amitabh details
print=function()
{
    var Abishek=Object.create(Amitabh);//By creating object we are accessing properties from person1
    var Aaradhya=Object.create(Amitabh);//By creating object we are accessing properties from person1
    console.log(Amitabh.fname);
    console.log(Abishek.lname);
    console.log(Aaradhya.lname);
    console.log(Abishek.address);
}
print();