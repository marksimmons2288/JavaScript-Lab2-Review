
// Create a fuction called fortuneTeller
function fortuneTeller(name, age) {
    let nameWithAge = "";
    let nameFortune ="";
    let ageFortune ="";
    
    

// Name Fortune

    if(name.length > 7) {
         nameFortune = "will marry late in life." ;
         }
    
     else if(name.length < 5) {
        nameFortune =  "will marry within a year." ;
    }
    
    else if(name.length  >= 5 && name.length <= 7) {
        nameFortune =  "will encounter a once-in-a-lifetime opportunity." ;
        
    }

    if(name[0].toUpperCase() === "R") {
        nameFortune += " will be rich.";

    }

     if(name.toLowerCase().includes("i")){
        nameFortune += "will fall in love this week." ;
    }

// Age Fortune
    
    if (age < 18) {
        ageFortune = "will visit Egypt." ;
        
    }

    else if (age >=18 && age <=30) {
        ageFortune =  "will be a leader of many." ;
        
    }

    else if (age > 30) {
        ageFortune = "will change a life.";
        
    }
 

    return `Hello ${name}, your age is ${age}, and your name fortune is ${nameFortune} and your age fortune ${ageFortune}`
    
}


let userName = prompt("Insert your name");
let userAge = prompt("Insert your age");
