// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

shuffle = function (o) { //v1.0
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

// CREATE KNOWN TRIALS

var knownArrayShuffle = [];

var knownArray1 = [ "A", //0        // possible targets
                    "B", //1
                    "C", //2
                    "D", //3
                    "E", //4
                    "F", //5
                    "G", //6
                    "H", //7
                    "I", //8
                    "J", //9
                    "K", //10
                    "L"] ; //11

shuffle(knownArray1);

for(i=0; i<knownArray1.length; i++){
  if (i%2 === 0) {
    knownArrayShuffle[i] = "<img src='img/" + knownArray1[i] + ".jpg' class='target'>"
  } else {
    knownArrayShuffle[i] = "<img src='img/" + knownArray1[i] + ".jpg' class='image'>"
  }
};


// control
var trial1 = [knownArrayShuffle[0], knownArrayShuffle[1]];
shuffle(trial1);

var trial2 = [knownArrayShuffle[2], knownArrayShuffle[3]];
shuffle(trial2);

var trial3 = [knownArrayShuffle[4], knownArrayShuffle[5]];
shuffle(trial3);

var trial4 = [knownArrayShuffle[6], knownArrayShuffle[7]];
shuffle(trial4);

// experimental
var trial5 = [knownArrayShuffle[0], knownArrayShuffle[5]];
shuffle(trial5);
var trial6 = [knownArrayShuffle[0], knownArrayShuffle[7]];
shuffle(trial6);
var trial7 = [knownArrayShuffle[0], knownArrayShuffle[9]];
shuffle(trial7);
knownArrayShuffle[0] = "<img src='img/"+ knownArray1[0] + ".jpg' class='image'>";
var trial8 = [knownArrayShuffle[6], knownArrayShuffle[0]];
shuffle(trial8);


// CREATE UNKNOWN TRIALS

var unkArrayShuffle = [];

var unkArray1 = [ "1",        // possible targets
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12"] ;

shuffle(unkArray1);


for(i=0; i<unkArray1.length; i++){
  if (i%2 === 0) {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='target'>"
  } else {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='image'>"
  }
};


// control
var trial9 = [unkArrayShuffle[0], unkArrayShuffle[1]];
shuffle(trial9);
var trial10 = [unkArrayShuffle[2], unkArrayShuffle[3]];
shuffle(trial10);
var trial11 = [unkArrayShuffle[4], unkArrayShuffle[5]];
shuffle(trial11);
var trial12 = [unkArrayShuffle[6], unkArrayShuffle[7]];
shuffle(trial12);

// experimental
var trial13 = [unkArrayShuffle[0], unkArrayShuffle[5]];
shuffle(trial13)
var trial14 = [unkArrayShuffle[0], unkArrayShuffle[7]]
shuffle(trial14)
var trial15 = [unkArrayShuffle[0], unkArrayShuffle[9]]
shuffle(trial15)
unkArrayShuffle[0] = "<img src='img/"+ unkArray1[0] + ".jpg' class='image'>";
var trial16 = [unkArrayShuffle[6], unkArrayShuffle[0]];
shuffle(trial16);






/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
