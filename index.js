// Code your solutions in this file

const names = ["Ada", "Bren"];
const events = "birthday";

function writeCards(names, events) {
  let thankyou = []; 
  for (let i = 0; i < names.length; i++) {
    thankyou.push('Thank you, ${names[i]}, for the wonderful ${events}');
  }
  return thankyou
}

function countdown(countdown) {
  let countdown = 0; 
  
}