shuffle = function (o) { //v1.0
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

// CREATE KNOWN TRIALS

var allKnown = [];
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
                    "L", //11
                    "M", //12
                    "N"] ; //13

shuffle(knownArray1);

for(i=0; i<knownArray1.length; i++){
  if (i%2 === 0) {
    knownArrayShuffle[i] = "<img src='img/" + knownArray1[i] + ".jpg' class='target'>"
  } else {
    knownArrayShuffle[i] = "<img src='img/" + knownArray1[i] + ".jpg' class='image'>"
  }
};

var practice1 = ["<img src = 'img/practiceTarget1.jpg' class='target'>", "<img src='img/practiceDistractor1.jpg' class='image'>"];
var practice2 = ["<img src='img/practiceDistractor2.jpg' class='image'>", "<img src ='img/practiceTarget2.jpg' class='target'>"];

// CREATE UNKNOWN TRIALS

var allUnk= [];
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
                  "12",
                  "15",
                  "16"] ;

shuffle(unkArray1);


for(i=0; i<unkArray1.length; i++){
  if (i%2 === 0) {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='target'>"
  } else {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='image'>"
  }
};

// known trials

// control
var trial1 = [knownArrayShuffle[0], unkArrayShuffle[1]];
shuffle(trial1);
allKnown.push(trial1);

var trial2 = [knownArrayShuffle[1], unkArrayShuffle[0]];
shuffle(trial2);
allKnown.push(trial2);

var trial3 = [knownArrayShuffle[3], unkArrayShuffle[2]];
shuffle(trial3);
allKnown.push(trial3);

var trial4 = [knownArrayShuffle[2], unkArrayShuffle[3]];
shuffle(trial4);
allKnown.push(trial4);

// experimental
var trial5 = [knownArrayShuffle[4], unkArrayShuffle[5]];
shuffle(trial5);
allKnown.push(trial5);

var trial6 = [knownArrayShuffle[4], unkArrayShuffle[7]];
shuffle(trial6);
allKnown.push(trial6);

var trial7 = [knownArrayShuffle[4], unkArrayShuffle[9]];
shuffle(trial7);
allKnown.push(trial7);

knownArrayShuffle[4] = "<img src='img/"+ knownArray1[4] + ".jpg' class='image'>";
var trial8 = [unkArrayShuffle[4], knownArrayShuffle[4]];
shuffle(trial8);
allKnown.push(trial8);


// unknown trials

// control
var trial9 = [unkArrayShuffle[6], knownArrayShuffle[5]];
shuffle(trial9);
allUnk.push(trial9);

var trial10 = [unkArrayShuffle[11], knownArrayShuffle[6]];
shuffle(trial10);
allUnk.push(trial10);

var trial11 = [unkArrayShuffle[8], knownArrayShuffle[7]];
shuffle(trial11);
allUnk.push(trial11);

var trial12 = [unkArrayShuffle[13], knownArrayShuffle[8]];
shuffle(trial12);
allUnk.push(trial12);

// experimental
var trial13 = [unkArrayShuffle[10], knownArrayShuffle[9]];
shuffle(trial13);
allUnk.push(trial13);

var trial14 = [unkArrayShuffle[10], knownArrayShuffle[11]]
shuffle(trial14);
allUnk.push(trial14);

var trial15 = [unkArrayShuffle[10], knownArrayShuffle[13]]
shuffle(trial15);
allUnk.push(trial15);

unkArrayShuffle[10] = "<img src='img/"+ unkArray1[10] + ".jpg' class='image'>";
var trial16 = [knownArrayShuffle[10], unkArrayShuffle[10]];
shuffle(trial16);
allUnk.push(trial16);

// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

// consent to participate.
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

// generate table
var pic1 = "/experiments/negation/img/A.jpg";
var pic2 = "/experiments/negation/img/1.jpg";
var pic3 = "/experiments/negation/img/B.jpg";
var pic4 = "/experiments/negation/img/2.jpg";
var pic5 = "/experiments/negation/img/C.jpg";
var pic6 = "/experiments/negation/img/3.jpg";
var pic7 = "/experiments/negation/img/D.jpg";
var pic8 = "/experiments/negation/img/4.jpg";
var pic9 = "/experiments/negation/img/E.jpg";
var pic10 = "/experiments/negation/img/5.jpg";
var pic11 = "/experiments/negation/img/F.jpg";
var pic12 = "/experiments/negation/img/6.jpg";
var pic13 = "/experiments/negation/img/G.jpg";
var pic14 = "/experiments/negation/img/7.jpg";
var pic15 = "/experiments/negation/img/H.jpg";
var pic16 = "/experiments/negation/img/8.jpg";
var pic17 = "/experiments/negation/img/I.jpg";
var pic18 = "/experiments/negation/img/9.jpg";
var pic19 = "/experiments/negation/img/J.jpg";
var pic20 = "/experiments/negation/img/10.jpg";
var pic21 = "/experiments/negation/img/K.jpg";
var pic22 = "/experiments/negation/img/11.jpg";
var pic23 = "/experiments/negation/img/L.jpg";
var pic24 = "/experiments/negation/img/12.jpg";

var pic25 = "/experiments/negation/img/practiceDistractor1.jpg";
var pic26 = "/experiments/negation/img/practiceTarget1.jpg";
var pic27 = "/experiments/negation/img/practiceDistractor2.jpg";
var pic28 = "/experiments/negation/img/practiceTarget2.jpg";

var pic29 = "/experiments/negation/img/13.jpg";
var pic30 = "/experiments/negation/img/14.jpg";

var pic31 = "/experiments/negation/img/15.jpg";
var pic32 = "/experiments/negation/img/M.jpg";
var pic33 = "/experiments/negation/img/16.jpg";
var pic34 = "/experiments/negation/img/N.jpg";
var pic35 = "/experiments/negation/img/filler.jpg";


var names = [];

names[0] = "alex ";
names[1] = "james ";
names[2] = "mary ";
names[3] = "john ";
names[4] = "robert ";
names[5] = "jenn ";
names[6] = "michael ";
names[7] = "will ";
names[8] = "liz ";
names[9] = "david ";
names[10] = "sarah ";
names[11] = "chris ";
names[12] = "emily ";
names[13] = "mark ";
names[14] = "paul ";
names[15] = "kim ";
names[16] = "tom ";
names[17] = "amy ";
names[18] = "anna ";
names[19] = "emma ";

shuffle(names);

var matcher = names[0];


// Create timeline
var timeline = [];

// Welcome screen
var welcome = {
  type:'external-html',
    url: "external_page.html",
    cont_btn: "start",
    check_fn: check_consent,
  on_finish: function(){
    jsPsych.setProgressBar(1/31);
  }
};

timeline.push(welcome)

var instructions = {
     type: "html-keyboard-response",
     stimulus: "<br /><br /><br /><br />" +
               "This is a communication game between you and a partner. You will be assigned to one of two roles: the <strong style='color:maroon;'> Director </strong> or the <strong style='color:teal;'> Matcher</strong>." +
               "<br /><br />" +
               'You will both see the same two objects, not necessarily in the same order.' +
               "<br /><br />" +
               "The <strong style='color:maroon;'> Director's </strong> goal is to type a message into the textbox below the objects that will help the <strong style='color:teal;'> Matcher </strong> pick the <b> target object</b>." +
               "<br /><br />" +
               "The <strong style='color:maroon;'>Director's </strong> screen will show the <b>target object</b> in a <strong style='color:blue;'> blue box</strong>." +
               "<br /><br />" +
               "The <strong style='color:teal;'> Matcher's </strong> goal is to correctly choose between the two objects, using the <strong style='color:maroon;'> Director's </strong> message." +
               "<br /><br /><br /><br /><br /><br />" +
               "<center><b>Press any key to continue. </b></center>",
     post_trial_gap: 200,
     on_finish: function(){
        jsPsych.setProgressBar(2/31);
    }
};

timeline.push(instructions);

var images = {
     type: "html-keyboard-response",
     stimulus: "<p>These are objects about which you will communicate in this experiment. Some may appear more than others. </p>" +
              "<table align = center><tr>" +
                "<td><img src='" + pic1 + "' height ='100'></td>" +
                "<td><img src='" + pic2 + "' height ='100'></td>" +
                "<td><img src='" + pic3 + "' height ='100'></td>" +
                "<td><img src='" + pic4 + "' height ='100'></td>" +
                "<td><img src='" + pic5 + "' height ='100'></td>" +
                "<td><img src='" + pic6 + "' height ='100'></td>" +
                "<td><img src='" + pic7 + "' height ='100'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic8 + "' height ='100'></td>" +
                "<td><img src='" + pic9 + "' height ='100'></td>" +
                "<td><img src='" + pic10 + "' height ='100'></td>" +
                "<td><img src='" + pic11 + "' height ='100'></td>" +
                "<td><img src='" + pic12 + "' height ='100'></td>" +
                "<td><img src='" + pic13 + "' height ='100'></td>" +
                "<td><img src='" + pic14 + "' height ='100'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic15 + "' height ='100'></td>" +
                "<td><img src='" + pic16 + "' height ='100'></td>" +
                "<td><img src='" + pic17 + "' height ='100'></td>" +
                "<td><img src='" + pic18 + "' height ='100'></td>" +
                "<td><img src='" + pic19 + "' height ='100'></td>" +
                "<td><img src='" + pic20 + "' height ='100'></td>" +
                "<td><img src='" + pic21 + "' height ='100'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic22 + "' height ='100'></td>" +
                "<td><img src='" + pic23 + "' height ='100'></td>" +
                "<td><img src='" + pic24 + "' height ='100'></td>" +
                "<td><img src='" + pic25 + "' height ='100'></td>" +
                "<td><img src='" + pic26 + "' height ='100'></td>" +
                "<td><img src='" + pic27 + "' height ='100'></td>" +
                "<td><img src='" + pic28 + "' height ='100'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic29 + "' height ='100'></td>" +
                "<td><img src='" + pic30 + "' height ='100'></td>" +
                "<td><img src='" + pic31 + "' height ='100'></td>" +
                "<td><img src='" + pic32 + "' height ='100'></td>" +
                "<td><img src='" + pic33 + "' height ='100'></td>" +
                "<td><img src='" + pic34 + "' height ='100'></td>" +
                "<td><img src='" + pic35 + "'height = '100'></td></tr>",
     choices: jsPsych.NO_KEYS,
     trial_duration: 5000,
     on_finish: function(){
        jsPsych.setProgressBar(3/31);
    }
};

timeline.push(images);


var giveExample1 = {
    type: 'survey-text',
    preamble: '<center><b>This the <strong style="color:maroon;">Director</strong> screen.</center></b><br /><br />' +
              "The <strong style='color:maroon;'>Director's</strong> goal is to send a message to the <strong style='color:teal;'>Matcher</strong> so they choose the target object.<br /><br />" +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr><br /><br /><br /><br />" +
              "Try it out! Type <i><b>bird</b></i> into the textbox and press continue.<br /><br />",
    questions: [{prompt:"<p>Type a message to the Matcher:</p>", required: true}],
      on_finish: function(data){
      if(data.Q0 != "bird") {
        alert("You did not type bird. Please be sure to pay attention.")
     } else {
        jsPsych.setProgressBar(4/31)
      }
    }
  };

timeline.push(giveExample1);

var matcherExample1 = {
    type: 'html-button-response',
    stimulus: '<center><b>This the <strong style="color:teal;">Matcher</strong> screen.</center></b><br /><br />' +
              "The <strong style='color:teal;'>Matcher's</strong> goal is to use the <strong style='color:maroon;'>Director's</strong> message to choose the target object.<br /><br /><br />" +
              '<strong style="color:red;">The Director said: <i> bird </i></strong><br /> <br />' +
              '<center>Which is the <b> target object</b>?</center><br /> <br />',
    choices: ['<center><img src="' + pic25 + '" class="image"></center>', '<center><img src="' + pic26 + '" class="image"></center>'],
  response_ends_trial: true,
  on_finish: function(){
    jsPsych.setProgressBar(5/31)
  }
};

timeline.push(matcherExample1);

var giveExample2 = {
    type: 'survey-text',
    preamble: '<center><b>Here is another <strong style="color:maroon;">Director</strong> example.</center></b><br /><br />' +
              "<tr><td><img src='" + pic29 + "' class='image'></td><td><img src='" + pic30 + "' class ='target'></td></tr><br /><br />" +
              'Type <i><b>art</b></i> into the textbox and press continue. </center><br /><br />' +
              '&nbsp&nbsp&nbsp <i> Other Directors have sent: </i> <br /><br />' +
              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp weird shaped vase<br />' +
              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp smooth sculpture<br />' +
              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp not spiky <br />'+
              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp fish decoration<br /><br />' ,
    questions: [{prompt: "<p>Type a message to the Matcher:</p>", required: true}],
    on_finish: function(data){
      if(data.Q0 != "art") {
        alert("You did not type art. Please be sure to pay attention.")
     } else {
        jsPsych.setProgressBar(6/31)
      }
    }
  };

timeline.push(giveExample2);


var matcherExample2 = {
    type: 'html-button-response',
    stimulus: '<center><b>This the <strong style="color:teal;">Matcher</strong> screen.</center></b><br /><br />' +
              "The <strong style='color:teal;'>Matcher's</strong> goal is to use the <strong style='color:maroon;'>Director's</strong> message to choose the target object.<br /><br /><br />" +
              '<strong style="color:red;">The Director said: <i> art </i></strong><br /> <br />' +
              '<center>Which is the <b> target object</b>?</center><br /> <br />',
    choices: ['<center><img src="' + pic29 + '" class="image"></center>', '<center><img src="' + pic30 + '" class="image"></center>'],
  response_ends_trial: true,
  on_finish: function(){
    jsPsych.setProgressBar(7/31)
  }
};

timeline.push(matcherExample2);


var nameInput = {
  type: 'survey-text',
  preamble: 'Great! Now that you have an idea of how to play, we will match you to a partner!',
  questions: [{prompt: 'Type the name you want to use:', required: true}],
  response_ends_trial: true,
  on_finish: function(){
        jsPsych.setProgressBar(8/31);
    }
};

timeline.push(nameInput);

var partnerMatching =  {
    type: 'html-keyboard-response',
    stimulus: 'Matching you to another player and assigning roles...',
    choices: jsPsych.NO_KEYS,
    trial_duration: 4000,
    on_finish: function(){
        jsPsych.setProgressBar(9/31);
    }
 };

 timeline.push(partnerMatching);

 var partnerReveal = {
  type: 'html-keyboard-response',
  stimulus: 'You have been matched with <b>' + matcher + '</b>! <br /><br />' +
            'You will be the <strong style="color:maroon;"> Director</strong>.<br /><br />' +
            matcher + ' is the <strong style="color:teal;"> Matcher</strong>. <br /><br />' +
            '<br /><br />' +
            '<b> We will begin with a short practice round.</b>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 4000,
  on_finish: function(){
        jsPsych.setProgressBar(10/31);
    }
 };

timeline.push(partnerReveal);




  var practice1test = {
    type: 'survey-text',
    preamble: "<p>This is a practice round. Remember to tell the Matcher which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr>",
    questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
    post_trial_gap: 100,
    response_ends_trial: true,
    on_finish: function(){
        jsPsych.setProgressBar(11/31);
    }

};

timeline.push(practice1test);

var practice1wait =
  {
    type: 'html-keyboard-response',
    stimulus: matcher + ' is currently selecting...',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
   return jsPsych.randomization.sampleWithReplacement([750, 1000, 1250, 1500, 1750, 2000, 2500, 3000], 1)[0];},
  on_finish: function() {
    jsPsych.setProgressBar(12/31);
  }
 };

 timeline.push(practice1wait);



var practice2test = {
  type: 'survey-text',
  preamble: "<p>This is a practice round. Remember to tell the Matcher which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
            "<tr><td>" + practice2[0] + "</td><td>" + practice2[1] + "</td></tr>",
  questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
  post_trial_gap: 100,
  response_ends_trial: true,
  on_finish: function(){
      jsPsych.setProgressBar(13/31)
  }
};

timeline.push(practice2test);

var practice2wait =
  {
    type: 'html-keyboard-response',
    stimulus: matcher + ' is currently selecting...',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
   return jsPsych.randomization.sampleWithReplacement([750, 1000, 1250, 1500, 1750, 2000, 2500, 3000], 1)[0];},
  on_finish: function() {
    jsPsych.setProgressBar(14/31);
  }
 };

 timeline.push(practice2wait);


var begin = {
  type: 'html-keyboard-response',
  stimulus: '<b>Press any key to begin the game.</b>',
  post_trial_gap: 200,
  on_finish: function(){
        jsPsych.setProgressBar(15/31);
    }
  };

timeline.push(begin);




trialnum = 15;

allStim = [];
knownStim = [];
unkStim = [];


  for(i=0; i<8; i++){
    leftpic = allKnown[i][0];
    rightpic = allKnown[i][1];
    knownStim.push([leftpic, rightpic]);
    allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };

for(i=0; i<8; i++){
    leftpic = allUnk[i][0];
    rightpic = allUnk[i][1];
    unkStim.push([leftpic, rightpic]);
     allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };



stimulusList = [];

  stimulusList.push(practice1);
  stimulusList.push(practice2);
  stimulusList.push(knownStim);
  stimulusList.push(unkStim);




var test = {
      type: 'survey-text',
      preamble: jsPsych.timelineVariable('preamble'),
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
      trialnum = trialnum + 1;
        jsPsych.setProgressBar(trialnum/31);
      }
  };

var fixation =
  {
    type: 'html-keyboard-response',
    stimulus: matcher + 'is currently selecting...',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
   return jsPsych.randomization.sampleWithReplacement([750, 1000, 1250, 1500, 1750, 2000, 2500, 3000], 1)[0];},
 };

 // var correctness =
 //  {
 //    type: 'html-keyboard-response',
 //    stimulus: '<center>alex got it right! <br /> <br />' + '<b> Press any key to continue. </b></center>',
 //    post_trial_gap: 200,

 //  };




  var test_procedure = {
    timeline: [test, fixation],
    timeline_variables: allStim
  };

  timeline.push(test_procedure);

  var endtest = {
    type: 'html-keyboard-response',
    stimulus: "<p>This is the end of the study. Thank you for participating! Please press any key to end the experiment.</p>",
    on_finish: function(){
        jsPsych.setProgressBar(1);
      }
  };

  timeline.push(endtest);

  //Preview mode
  var preview = jsPsych.turk.turkInfo().previewMode;


  if(preview == false){
    jsPsych.init({
      timeline:timeline,
      show_progress_bar: true,
      auto_update_progress_bar: false,
      on_finish: function(){
        var responses = jsPsych.data.get().filter({trial_type: 'survey-text'}).csv();
                data= {
                    responses : responses,
                    trial_info : stimulusList,
                    };

        turk.submit(data);
    }
  });
};
