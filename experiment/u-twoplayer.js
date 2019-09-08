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
                    "L"] ; //11

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

// control
var trial1 = [knownArrayShuffle[0], knownArrayShuffle[1]];
shuffle(trial1);
allKnown.push(trial1);

var trial2 = [knownArrayShuffle[2], knownArrayShuffle[3]];
shuffle(trial2);
allKnown.push(trial2);

var trial3 = [knownArrayShuffle[4], knownArrayShuffle[5]];
shuffle(trial3);
allKnown.push(trial3);

var trial4 = [knownArrayShuffle[6], knownArrayShuffle[7]];
shuffle(trial4);
allKnown.push(trial4);

// experimental
var trial5 = [knownArrayShuffle[8], knownArrayShuffle[7]];
shuffle(trial5);
allKnown.push(trial5);

var trial6 = [knownArrayShuffle[8], knownArrayShuffle[9]];
shuffle(trial6);
allKnown.push(trial6);

var trial7 = [knownArrayShuffle[8], knownArrayShuffle[11]];
shuffle(trial7);
allKnown.push(trial7);

knownArrayShuffle[8] = "<img src='img/"+ knownArray1[8] + ".jpg' class='image'>";
var trial8 = [knownArrayShuffle[10], knownArrayShuffle[8]];
shuffle(trial8);
allKnown.push(trial8);


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
allUnk.push(trial9);

var trial10 = [unkArrayShuffle[2], unkArrayShuffle[3]];
shuffle(trial10);
allUnk.push(trial10);

var trial11 = [unkArrayShuffle[4], unkArrayShuffle[5]];
shuffle(trial11);
allUnk.push(trial11);

var trial12 = [unkArrayShuffle[6], unkArrayShuffle[7]];
shuffle(trial12);
allUnk.push(trial12);

// experimental
var trial13 = [unkArrayShuffle[8], unkArrayShuffle[7]];
shuffle(trial13);
allUnk.push(trial13);

var trial14 = [unkArrayShuffle[8], unkArrayShuffle[9]]
shuffle(trial14);
allUnk.push(trial14);

var trial15 = [unkArrayShuffle[8], unkArrayShuffle[11]]
shuffle(trial15);
allUnk.push(trial15);

unkArrayShuffle[8] = "<img src='img/"+ unkArray1[8] + ".jpg' class='image'>";
var trial16 = [unkArrayShuffle[10], unkArrayShuffle[8]];
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
var pic13 = "/experiments/negation/img/6.jpg";
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


// Create timeline
var timeline = [];

// Welcome screen
var welcome = {
	type:'external-html',
  	url: "external_page.html",
  	cont_btn: "start",
  	check_fn: check_consent,
	on_finish: function(){
		jsPsych.setProgressBar(1/28);
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
        jsPsych.setProgressBar(2/28);
    }
};

timeline.push(instructions);

var images = {
     type: "html-keyboard-response",
     stimulus: "<p>These are objects about which you will communicate in this experiment. Some may appear more than others. </p>" +
              "<table align = center><tr>" +
                "<td><img src='" + pic1 + "' height ='130'></td>" +
                "<td><img src='" + pic2 + "' height ='130'></td>" +
                "<td><img src='" + pic3 + "' height ='130'></td>" +
                "<td><img src='" + pic4 + "' height ='130'></td>" +
                "<td><img src='" + pic5 + "' height ='130'></td>" +
                "<td><img src='" + pic6 + "' height ='130'></td>" +
                "<td><img src='" + pic7 + "' height ='130'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic8 + "' height ='130'></td>" +
                "<td><img src='" + pic9 + "' height ='130'></td>" +
                "<td><img src='" + pic10 + "' height ='130'></td>" +
                "<td><img src='" + pic11 + "' height ='130'></td>" +
                "<td><img src='" + pic12 + "' height ='130'></td>" +
                "<td><img src='" + pic13 + "' height ='130'></td>" +
                "<td><img src='" + pic14 + "' height ='130'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic15 + "' height ='130'></td>" +
                "<td><img src='" + pic16 + "' height ='130'></td>" +
                "<td><img src='" + pic17 + "' height ='130'></td>" +
                "<td><img src='" + pic18 + "' height ='130'></td>" +
                "<td><img src='" + pic19 + "' height ='130'></td>" +
                "<td><img src='" + pic20 + "' height ='130'></td>" +
                "<td><img src='" + pic21 + "' height ='130'></td></tr>" +
              "<tr>" +
                "<td><img src='" + pic22 + "' height ='130'></td>" +
                "<td><img src='" + pic23 + "' height ='130'></td>" +
                "<td><img src='" + pic24 + "' height ='130'></td>" +
                "<td><img src='" + pic25 + "' height ='130'></td>" +
                "<td><img src='" + pic26 + "' height ='130'></td>" +
                "<td><img src='" + pic27 + "' height ='130'></td>" +
                "<td><img src='" + pic28 + "' height ='130'></td></tr>" + 
                "<br /><br /><p><b>Press any key to continue.</b></p>" ,
     post_trial_gap: 200,
     on_finish: function(){
        jsPsych.setProgressBar(3/28);
    }
};

timeline.push(images);

var nameInput = {
  type: 'survey-text',
  preamble: 'First, we need to match you to a partner!',
  questions: [{prompt: 'Type the name you want to use:', required: true}],
  response_ends_trial: true,
  on_finish: function(){
        jsPsych.setProgressBar(4/28);
    }
};

timeline.push(nameInput);

var partnerMatching =  {
    type: 'html-keyboard-response',
    stimulus: 'Matching you to another player and assigning roles...',
    choices: jsPsych.NO_KEYS,
    trial_duration: 4000,
    on_finish: function(){
        jsPsych.setProgressBar(5/28);
    }
 };

 timeline.push(partnerMatching);

 var partnerReveal = {
  type: 'html-keyboard-response',
  stimulus: 'You have been matched with <b> alex</b>! <br /><br />' + 
            'You will be the <b> Director</b>.<br /><br />' + 
            'alex will be the <b> Matcher</b>. <br /><br />' + 
            '<br /><br />' + 
            '<b> We will begin with some examples and practice rounds.</b>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 6000,
  on_finish: function(){
        jsPsych.setProgressBar(6/28);
    }
 };

timeline.push(partnerReveal);

var giveExample1 = {
    type: 'html-keyboard-response',
    stimulus: '<center><b>This the Director screen.</b> The Matcher\'s screen will not have the <strong style="color:blue";> blue box </strong>.</center><br /><br />' +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr><br /><br />" +
              '<center> Other Directors have sent: </center><br /><br />'+
              'pigeon <br /><br />' + // 1
              'bird <br /><br />' + // 2
              'not the onion <br /><br />' + //3
              'the one with the legs and beak <br /><br />' + //4
              'a bird that is often in cities <br /><br /><br />' +
              '<center><b> Press any key to continue. </b></center>', //5
    post_trial_gap: 200,
    on_finish: function(){
      jsPsych.setProgressBar(7/28);
    }
};

timeline.push(giveExample1);

var giveExample2 = {
    type: 'html-keyboard-response',
    stimulus: '<center><b>This the Director screen.</b> The Matcher\'s screen will not have the <strong style="color:blue";> blue box </strong>.</center><br /><br />' +
              "<tr><td><img src='" + pic8 + "' class='image'></td><td><img src='" + pic2 + "' class ='target'></td></tr><br /><br />" +
              '<center> Other Directors have sent: </center><br /><br />'+
              'weird shaped vase <br /><br />' + // 1
              'smooth sculpture <br /><br />' + // 2
              'fish decoration <br /><br />' + //3
              'not spiky <br /><br />' + //4
              'same as before <br /><br /><br />' +
              '<center><b> Press any key to continue. </b></center>', //5
    post_trial_gap: 200,
    on_finish: function(){
      jsPsych.setProgressBar(8/28);
    }
};

timeline.push(giveExample2);




  var practice1test = {
    type: 'survey-text',
    preamble: "<p>This is a practice round. Remember to tell the Matcher which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr>",
    questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
    post_trial_gap: 100,
    response_ends_trial: true,
    on_finish: function(){
        jsPsych.setProgressBar(9/28);
    }

};

timeline.push(practice1test);

var practice2test = {
  type: 'survey-text',
  preamble: "<p>This is a practice round. Remember to tell the Matcher which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
            "<tr><td>" + practice2[0] + "</td><td>" + practice2[1] + "</td></tr>",
  questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
  post_trial_gap: 100,
  response_ends_trial: true,
  on_finish: function(){
      jsPsych.setProgressBar(10/28)
  }
};

timeline.push(practice2test);

var waiting = {
  type: 'html-keyboard-response',
  stimulus: 'Waiting...',
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function(){
        jsPsych.setProgressBar(11/28);
    }
  };

timeline.push(waiting);

var begin = {
  type: 'html-keyboard-response',
  stimulus: '<b>Press any key to begin.</b>',
  post_trial_gap: 200,
  on_finish: function(){
        jsPsych.setProgressBar(12/28);
    }
  };

timeline.push(begin);




trialnum = 12;

allStim = [];
knownStim = [];
unkStim = [];

for(i=0; i<8; i++){
    leftpic = allUnk[i][0];
    rightpic = allUnk[i][1];
    unkStim.push([leftpic, rightpic]);
     allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };

  for(i=0; i<8; i++){
    leftpic = allKnown[i][0];
    rightpic = allKnown[i][1];
    knownStim.push([leftpic, rightpic]);
    allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };




stimulusList = [];

  stimulusList.push(practice1);
  stimulusList.push(practice2);
  stimulusList.push(unkStim);
  stimulusList.push(knownStim);




var test = {
	    type: 'survey-text',
      preamble: jsPsych.timelineVariable('preamble'),
      questions: [{prompt:"Type a message to the Matcher:", required: true}],
	    post_trial_gap: 100,
	  on_finish: function(){
	    trialnum = trialnum + 1;
        jsPsych.setProgressBar(trialnum/28);
    	}
	};

var fixation = 
  {
    type: 'html-keyboard-response',
    stimulus: 'alex is currently selecting...',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
   return jsPsych.randomization.sampleWithReplacement([750, 1000, 1250, 1500, 1750, 2000, 2500, 3000], 1)[0];},
 };

 var correctness = 
 	{ 
 		type: 'html-keyboard-response',
 		stimulus: '<center>alex got it right! <br /> <br />' + '<b> Press any key to continue. </b></center>',
 		post_trial_gap: 200,

 	};




	var test_procedure = {
	  timeline: [test, fixation, correctness],
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
