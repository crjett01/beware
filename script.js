
var name; 
var verb; 
var verbGuess = false; 
var article; 
var articleGuess; 
var descriptor; 
var descriptorGuess; 
var truth; 
var truthGuess; 
var e = '!'; 

name = prompt('What is your name?'); 
document.write(name.toUpperCase()); 

 do {
     verb = prompt('Two letter passive verb');
     if (verb.toUpperCase() === 'IS' ) {
        verbGuess = true; 
        break; 
     } else {
         alert('Ha. You suck. Try again if you like failing things'); 
     }
 } while ( ! verbGuess )

 document.write(' ' + verb.toUpperCase() + ' '); 

 do {
     article = prompt('First letter of the alphabet'); 
     if (article.toUpperCase()=== 'A') {
         articleGuess = true; 
         break
    } else {
        alert('I think this test may be too hard for you... but if you insist on the truth: try again'); 
    }
 } while ( ! articleGuess )

 document.write(article.toUpperCase() + ' '); 

 do {
    descriptor = prompt('A word that usually has a negative connotation... except when it doesn\'t'); 
    if (descriptor.toUpperCase()=== 'BAD') {
        descriptorGuess = true; 
        break
   } else {
       alert('Mwahahaha. You\'ll surely fail'); 
   }
} while ( ! descriptorGuess )

document.write(descriptor.toUpperCase() + ' '); 

do {
    truth = prompt('The last word in Molly Weasley\'s famous fight quote against Bellatrix LaStrange'); 
    if (truth.toUpperCase()=== 'BITCH') {
        truthGuess = true; 
        break
   } else {
       alert('This was the last puzzle. Just give up earthling.'); 
   }
} while ( ! truthGuess )

document.write(truth.toUpperCase()); 

while ( e.length < 4 ) {
    alert('Let\'s add some emphasis, eh? (You\'re gonna have to click me 3 times, K?'); 
    e += '!'; 
    document.write(e); 
}

