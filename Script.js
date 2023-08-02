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





