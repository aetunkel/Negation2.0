shuffle = function (o) { //v1.0
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

// CREATE KNOWN TRIALS

var practiceResponses = [];
var allKnown = [];
var knownArrayShuffle = [];

var knownArray1 = [ "A", //0        // possible known targets
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

var unkArray1 = [ "1",        // possible unknown targets
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
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27"];

shuffle(unkArray1);

for(i=0; i<unkArray1.length; i++){
  if (i%2 === 0) {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='target'>"
  } else {
    unkArrayShuffle[i] = "<img src='img/" + unkArray1[i] + ".jpg' class='image'>"
  }
};

var allTrials = [];

// block 1
var trial1 = [unkArrayShuffle[0], unkArrayShuffle[1]]; // 
shuffle(trial1);
allTrials.push(trial1);

var trial2 = [unkArrayShuffle[2], unkArrayShuffle[3]]; // 
shuffle(trial2);
allTrials.push(trial2);

var trial3 = [unkArrayShuffle[4], unkArrayShuffle[5]];
shuffle(trial3);
allTrials.push(trial3);

var trial4 = [unkArrayShuffle[6], unkArrayShuffle[7]]; 
shuffle(trial4);
allTrials.push(trial4);

var trial5 = [unkArrayShuffle[8], unkArrayShuffle[9]];
shuffle(trial5);
allTrials.push(trial5);

var trial6 = [unkArrayShuffle[8], unkArrayShuffle[11]];
shuffle(trial6);
allTrials.push(trial6);

var trial7 = [unkArrayShuffle[8], unkArrayShuffle[13]];
shuffle(trial7);
allTrials.push(trial7);

unkArrayShuffle[8] = "<img src='img/"+ unkArray1[8] + ".jpg' class='image'>";
var trial8 = [unkArrayShuffle[8], unkArrayShuffle[10]];
shuffle(trial8);
allTrials.push(trial8);


// unknown trials

// control
var trial9 = [unkArrayShuffle[12], knownArrayShuffle[1]];
shuffle(trial9);
allTrials.push(trial9);

var trial10 = [unkArrayShuffle[15], knownArrayShuffle[0]];
shuffle(trial10);
allTrials.push(trial10);

var trial11 = [unkArrayShuffle[14], knownArrayShuffle[3]];
shuffle(trial11);
allTrials.push(trial11);

var trial12 = [unkArrayShuffle[17], knownArrayShuffle[2]]; 
shuffle(trial12);
allTrials.push(trial12);

var trial13 = [unkArrayShuffle[16], knownArrayShuffle[5]];
shuffle(trial13);
allTrials.push(trial13);

var trial14 = [unkArrayShuffle[16], knownArrayShuffle[7]];
shuffle(trial14);
allTrials.push(trial14);

var trial15 = [unkArrayShuffle[16], knownArrayShuffle[9]];
shuffle(trial15);
allTrials.push(trial15);

unkArrayShuffle[16] = "<img src='img/"+ unkArray1[16] + ".jpg' class='image'>";
var trial16 = [unkArrayShuffle[16], knownArrayShuffle[4]];
shuffle(trial16);
allTrials.push(trial16);


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

// new images
var pic35 = "/experiments/negation/img/17.jpg";
var pic36 = "/experiments/negation/img/18.jpg";
var pic37 = "/experiments/negation/img/19.jpg";
var pic38 = "/experiments/negation/img/20.jpg";
var pic39 = "/experiments/negation/img/21.jpg";
var pic40 = "/experiments/negation/img/22.jpg";
var pic41 = "/experiments/negation/img/23.jpg";
var pic42 = "/experiments/negation/img/24.jpg";
var pic43 = "/experiments/negation/img/25.jpg";
var pic44 = "/experiments/negation/img/26.jpg";
var pic45 = "/experiments/negation/img/27.jpg";


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
names[15] = "ben ";
names[16] = "tom ";
names[17] = "amy ";
names[18] = "anna ";
names[19] = "emma ";
names[20] = "dan ";
names[21] = "claire ";
names[22] = "ashley ";
names[23] = "jessica ";
names[24] = "sophia ";
names[25] = "cathy ";

shuffle(names);

var matcher = names[0];


// Create timeline
var timeline = [];

// Welcome screen
var welcome = {
  type:'external-html',
    url: "external_page_2.html",
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
/// commented out for debug 

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
                "<td><img src='" + pic7 + "' height ='100'></td>" +
                "<td><img src='" + pic8 + "' height ='100'></td>"+
                "<td><img src='" + pic41 + "' height = '100'></td>" +
                "</tr>" +
              "<tr>" +
                "<td><img src='" + pic9 + "' height ='100'></td>" +
                "<td><img src='" + pic10 + "' height ='100'></td>" +
                "<td><img src='" + pic11 + "' height ='100'></td>" +
                "<td><img src='" + pic12 + "' height ='100'></td>" +
                "<td><img src='" + pic13 + "' height ='100'></td>" +
                "<td><img src='" + pic14 + "' height ='100'></td>" + 
                "<td><img src='" + pic15 + "' height ='100'></td>" +
                "<td><img src='" + pic16 + "' height ='100'></td>" + 
                "<td><img src='" + pic42 + "' height = '100'></td>" +
                "</tr>" +
              "<tr>" +
                "<td><img src='" + pic17 + "' height ='100'></td>" +
                "<td><img src='" + pic18 + "' height ='100'></td>" +
                "<td><img src='" + pic19 + "' height ='100'></td>" +
                "<td><img src='" + pic20 + "' height ='100'></td>" +
                "<td><img src='" + pic21 + "' height ='100'></td>" +
                "<td><img src='" + pic22 + "' height ='100'></td>" +
                "<td><img src='" + pic23 + "' height ='100'></td>" +
                "<td><img src='" + pic24 + "' height ='100'></td>" +
                "<td><img src='" + pic43 + "' height = '100'></td>" +
                "</tr>" + 
              "<tr>" +
                "<td><img src='" + pic25 + "' height ='100'></td>" +
                "<td><img src='" + pic26 + "' height ='100'></td>" +
                "<td><img src='" + pic27 + "' height ='100'></td>" +
                "<td><img src='" + pic28 + "' height ='100'></td>" +
                "<td><img src='" + pic29 + "' height ='100'></td>" +
                "<td><img src='" + pic30 + "' height ='100'></td>" +
                "<td><img src='" + pic31 + "' height ='100'></td>" +
                "<td><img src='" + pic32 + "' height ='100'></td>" + 
                "<td><img src='" + pic44 + "' height = '100'></td>" +
                "</tr>" +
              "<tr>" +
                "<td><img src='" + pic33 + "' height ='100'></td>" +
                "<td><img src='" + pic34 + "' height ='100'></td>" +
                "<td><img src='" + pic35 + "'height = '100'></td>" + 
                "<td><img src='" + pic36 + "'height = '100'></td>" +  
                "<td><img src='" + pic37 + "'height = '100'></td>" +  
                "<td><img src='" + pic38 + "'height = '100'></td>" + 
                "<td><img src='" + pic39 + "'height = '100'></td>" + 
                "<td><img src='" + pic40 + "'height = '100'></td>" + 
                "<td><img src='" + pic45 + "' height = '100'></td>" +
                "</tr>",
     choices: jsPsych.NO_KEYS,
     trial_duration: 10000,
     on_finish: function(){
        jsPsych.setProgressBar(3/31);
    }
};

timeline.push(images);

var trial1Response;

var trial1 = {
    type: 'survey-text',
    preamble: '<center><b>This the <strong style="color:maroon;">Director</strong> screen.</center></b><br /><br />' +
              "The <strong style='color:maroon;'>Director's</strong> goal is to send a message to the <strong style='color:teal;'>Matcher</strong> so they choose the target object.<br /><br />" +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr><br /><br /><br /><br />" +
              "Try it out! Type <i><b>bird</b></i> into the textbox and press continue.<br /><br />",
    questions: [{prompt:"<p>Type a message to the Matcher:</p>", required: true}],
    data: {locator: 'lookup-code-0'},
      on_finish: function(data){
        trial1Response = JSON.parse(data.responses).Q0;
        jsPsych.setProgressBar(4/31)
        if(trial1Response != "bird"){
        alert("Please submit the correct answer.");
      }
      }
    };  

  var loop_node1 = {
    timeline: [trial1],
    loop_function: function(data){
      if(trial1Response == "bird"){
        return false;
      } else {
        return true;
      }
    }
  };

var practice1A = {
  timeline: [loop_node1]
  };
       
timeline.push(practice1A);

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

var trial2Response;
var trial2 = {
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
        trial2Response = JSON.parse(data.responses).Q0;
        jsPsych.setProgressBar(4/31)
        if(trial2Response != "art"){
        alert("Please submit the correct answer.");
      }
      }
    };

  var loop_node2 = {
    timeline: [trial2],
    loop_function: function(data){
      if(trial2Response == "art"){
        return false;
      } else {
        return true;
      }
    }
  };

var practice2A = {
  timeline: [loop_node2]
  };
       
timeline.push(practice2A);


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

// new info end

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

stim = [];


for(i=0; i<16; i++){
    leftpic = allTrials[i][0];
    rightpic = allTrials[i][1];
    stim.push([leftpic, rightpic]);
   };


stimulusList = [];

  stimulusList.push(practice1);
  stimulusList.push(practice2);
  stimulusList.push(stim);


var pre1 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[0] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[1] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};


var test1 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[0][0] + "</td></td><td height = 200>" + allTrials[0][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(16/31);
      }
  };

var pre2 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[2] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[3] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test2 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[1][0] + "</td><td height = 200>" + allTrials[1][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(17/31);
      }
  };


var pre3 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[5] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[4] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test3 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[2][0] + "</td></td><td height = 200>" + allTrials[2][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(18/31);
      }
  };

var pre4 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[6] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[7] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test4 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[3][0] + "</td></td><td height = 200>" + allTrials[3][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(19/31);
      }
  };

var pre5 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[9] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[8] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test5 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[4][0] + "</td></td><td height = 200>" + allTrials[4][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(20/31);
      }
  };

  var pre6 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[11] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[8] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test6 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[5][0] + "</td></td><td height = 200>" + allTrials[5][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(21/31);
      }
  };

  var pre7 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[13] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[8] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test7 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[6][0] + "</td></td><td height = 200>" + allTrials[6][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(22/31);
      }
  };

var pre8 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[8] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[10] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test8 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[7][0] + "</td></td><td height = 200>" + allTrials[7][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(23/31);
      }
  };

var pre9 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[12] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + knownArray1[1] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test9 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[8][0] + "</td></td><td height = 200>" + allTrials[8][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(24/31);
      }
  };

var pre10 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ knownArray1[0] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[15] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test10 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[9][0] + "</td><td height = 200>" + allTrials[9][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(25/31);
      }
  };


var pre11 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[14] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + knownArray1[3] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test11 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[10][0] + "</td></td><td height = 200>" + allTrials[10][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(26/31);
      }
  };

var pre12 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[17] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + knownArray1[2] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test12 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[11][0] + "</td></td><td height = 200>" + allTrials[11][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(27/31);
      }
  };

var pre13 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ unkArray1[16] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + knownArray1[5] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test13 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[12][0] + "</td></td><td height = 200>" + allTrials[12][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(28/31);
      }
  };

  var pre14 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ knownArray1[7] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[16] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test14 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[13][0] + "</td></td><td height = 200>" + allTrials[13][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(29/31);
      }
  };

  var pre15 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ knownArray1[9] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[16] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test15 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[14][0] + "</td></td><td height = 200>" + allTrials[14][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(30/31);
      }
  };

var pre16 = {
  type: "html-keyboard-response",
  stimulus: "<p><table align = 'center'><tr><td height = 200><img src='img/"+ knownArray1[4] + ".jpg' class='image'</td>" +
            "<td height = 200><img src='img/" + unkArray1[16] + ".jpg' class='image'</td></tr></table></p>",
     trial_duration: 3000,
     choices: jsPsych.NO_KEYS,
};

var test16 = {
      type: 'survey-text',
      preamble: "<table align = 'center'><tr><td height = 200>" + allTrials[15][0] + "</td></td><td height = 200>" + allTrials[15][1] + "</td></tr></table>",
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
      post_trial_gap: 100,
    on_finish: function(){
        jsPsych.setProgressBar(31/31);
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

 timeline.push(pre1);
 timeline.push(test1);
timeline.push(fixation);
 timeline.push(pre2);
 timeline.push(test2);
 timeline.push(fixation);
  timeline.push(pre3);
 timeline.push(test3);
 timeline.push(fixation);
  timeline.push(pre4);
 timeline.push(test4);
 timeline.push(fixation);
  timeline.push(pre5);
 timeline.push(test5);
 timeline.push(fixation);
  timeline.push(pre6);
 timeline.push(test6);
 timeline.push(fixation);
  timeline.push(pre7);
 timeline.push(test7);
 timeline.push(fixation);
  timeline.push(pre8);
 timeline.push(test8);
 timeline.push(fixation);
  timeline.push(pre9);
 timeline.push(test9);
 timeline.push(fixation);
  timeline.push(pre10);
 timeline.push(test10);
 timeline.push(fixation);
  timeline.push(pre11);
 timeline.push(test11);
 timeline.push(fixation);
  timeline.push(pre12);
 timeline.push(test12);
 timeline.push(fixation);
  timeline.push(pre13);
 timeline.push(test13);
 timeline.push(fixation);
  timeline.push(pre14);
 timeline.push(test14);
 timeline.push(fixation);
  timeline.push(pre15);
 timeline.push(test15);
 timeline.push(fixation);
  timeline.push(pre16);
 timeline.push(test16);
 timeline.push(fixation);


  var endtest = {
    type: 'html-keyboard-response',
    stimulus: "<center><p>This is the end of the study. Thank you for participating! <br><br><br>" + 
          "In this study, you were told that you were matched with a partner, but you were actually the only player.<br><br>" +
          "Due to the nature of this study, we needed you to believe there was a live partner.<br><br>" + 
          "If you have any concerns or would like your responses to be excluded, please contact us at <a href='mailto:callab.uchicago@gmail.com'>callab.uchicago@gmail.com</a><br><br><br>" + 
          "<b>Press any key to end the experiment.</b></p></center>",
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

