
// Create a fuction called fortuneTeller
function fortuneTeller(name, age) {
    let nameWithAge = '';

    if(name.length > 7) {
         nameWithAge = `${name} will marry late in life.` ;
         }
    
     if(name.length < 5) {
        nameWithAge = `${name} will marry within a year.` ;
    }
    
    if(name.length  >= 5 && name.length <= 7) {
        nameWithAge = `${name} will encounter a once-in-a-lifetime opportunity.` ;
        
    }

    if('name [0] is R') {
        nameWithAge = `${name} will be rich.` ;

    }

    if('name letter i') {
        nameWithAge = `${name} will fall in love this week.` ;
    }

    




    
    

    return nameWithAge;
}


let userName = prompt("Insert your name");
let userAge = prompt("Insert your age");

console.log(fortuneTeller(userName, userAge));