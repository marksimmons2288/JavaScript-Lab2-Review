
// Create a fuction called fortuneTeller
function fortuneTeller(name,age){
    let nameWithAge = `Name: ${name} and Age: ${age}`;

    return nameWithAge;
}

let userName = prompt("Insert your name");
let userAge = prompt("Insert your age");

console.log(fortuneTeller('userName', userAge));

