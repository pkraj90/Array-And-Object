// Declare in Curve Bracket
const A = {
    Name: "Raj",
    Age: 32,
    work: "trader"
}

//To print objects: two methods
// 1st method - dot notation
console.log(A.Name);
console.log(A.Age);
console.log(A.work);

//2nd method in square bracket
console.log(A["Name"]);
console.log(A["Age"]);
console.log(A["work"]);

//Declare object using new method (object constructor)
var b = new Object();
b.name - "Prakash";
b.age - "35";
b.occupation -"Police"
console.log(b);


//modify or add objects or delete
//1.dot notation
A.Name = "Rajkumar"; //modify name by dot notation
A["Name"] = "Rajkumar Karunakaran" // modify name by square bracket
A.place ="Madurai" // add place 
delete A.Age// Remove object property.
console.log(A);

// JSON - Array & Object
//JSON Array //const c = ["apple", "banana", "orange"] 
//JSON Object 
const d = '{"name":"Raj","age":"32","place":"madurai"}';
console.log(d);
//JSON.parse() - syntax
var e = JSON.parse(d);
console.log(e);
//JSON.stringify()
console.log(A);
console.log(JSON.stringify(A));

//Nested JSON object
const f = {
   name: "Rajkumar",
    age: 32,
    address: {
        place: "Sivagangai",
        pincode: 630611
    }
}
console.log(f)
console.log(f.address.place)

//Nested JSON Array
const g = [
    {
        name:"Raj",
        age:30
    },
    {
        name:"Prakash",
        age:35
    }
]
console.log(g);
console.log(g[0]);
console.log(g[0].name);
console.log(g[1]);
console.log(g[1].age);

// Array & Object destructuring
const arr = [1,2,3];
const [x,y,z] = arr;
console.log(x);
console.log(y);
console.log(z);

//object destructuring
const obj = {
    name1: "RK",
    age: 30,
    address: {
        place: "Keeladi",
        pin: 625201
    }
   
}
const {name1,age,address:{place,pin}} = obj;
console.log(name1);
console.log(age);
console.log(place);
console.log(pin);

const {Name:Myname,work,year=90} = A;
console.log(Myname);
console.log(work);
console.log(year);
//age deleted in A by modify

//"this"-keyword method
//1."this" alone - referes to global object
console.log(this);

//2.In regular function , refers to global object
const az = function(){
    console.log("Hi Raj");
    console.log(this)
}
az();
//3. In a function in strict mode , "this" is undefined.
"use strict";
const bz = function(){
    console.log("strict mode");
    console.log(this)
}
bz();
//4. In a method, "this" refers to the owner object.
const person = {
    names : "Raja",
    age: 30,
    occupation: "Police",
    detail: function(){
        console.log(`I love ❤ ${this.occupation}`)
    }
}
console.log(person.detail());
