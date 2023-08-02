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
