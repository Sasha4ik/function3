// Function

function createPerson(){
     let person = {};

     person.name = prompt("What's your name?");
     person.age = +prompt("How old are you?");
     person.gender = prompt("M/F?");
     person.isLogin = true;

     return person;
    }
    
    let newPerson = createPerson();
    console.log(newPerson);