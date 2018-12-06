var person1={ fname:"Srivani",
lname:"gunti",
age:21,
skills:["coding","cooking","dancing","singing"],
address:{city:"Karimnagar",pincode:505001},
dateOfBirt:new Date('18-11-1996'),
profession:"Employee",
married:false}
var person2={fname:"Varun",
lname:"gunti",
age:23,
skills:["eating","sleeping"],
address:{city:"Karimnagar", pincode:505001},
dateOfBirth:new Date('22-09-1994'),
profession:"Software Employee",
married:false}
print=function()
{
    console.log("person1 details\n",person1);
    console.log("person2 details\n",person2);
}
print();
