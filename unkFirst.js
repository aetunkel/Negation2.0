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

// Create timeline
var timeline = [];

// Welcome screen
var welcome = {
	type:'external-html',
  	url: "external_page.html",
  	cont_btn: "start",
  	check_fn: check_consent,
	on_finish: function(){
		jsPsych.setProgressBar(1/21);
	}
};

timeline.push(welcome)

var instructions = {
     type: "html-keyboard-response",
     stimulus: "<p>On each round of this game, you will see two objects. The <b>target object</b> will have a <strong style='color:blue;'> blue box </strong> around it.</p>" +
               "<br /><br />" +
               "Your goal is to type a message into the textbox below the objects that will help a future Turker correctly select the <b>target object</b>. </p>" +
               "<br /><br />" +
               "<i>Note: The objects objects may be in different locations on the Turker's screen, so messages like 'left' or 'right' will not be effective. <br /><br />" +
               "Please stay on topic. Random responses will result in rejected Hits. </i></p>" +
               "<br /><br />" +
               "We will start with a short practice round. <b>Press any key to continue. </b>",
     post_trial_gap: 200,
     on_finish: function(){
        jsPsych.setProgressBar(2/21);
    }
};

timeline.push(instructions);

var images = {
     type: "html-keyboard-response",
     stimulus: "<p>These are objects about which you will communicate in this experiment. Some may appear more than others. </p>" +
                "<p>Press any key to begin the practice </p>" +
              "<table align = center><tr><td><img src='img/A.jpg' height ='130'>" + //1
              "<td><img src='img/1.jpg' height ='130'></td>" + //2
              "<td><img src='img/B.jpg' height ='130'></td>" + //3
              "<td><img src='img/2.jpg' height ='130'></td>" + //4
              "<td><img src='img/C.jpg' height ='130'></td>" + //5
              "<td><img src='img/3.jpg' height ='130'></td>" + //6
              "<td><img src='img/D.jpg' height ='130'></td></tr>" + //7
              "<tr><td><img src='img/4.jpg' height ='130'></td>" + //8
              "<td><img src='img/E.jpg' height ='130'></td>" + //9
              "<td><img src='img/5.jpg' height ='130'></td>" + //10
              "<td><img src='img/F.jpg' height ='130'></td>" + //11
              "<td><img src='img/6.jpg' height ='130'></td>" + //12
              "<td><img src='img/G.jpg' height ='130'></td>" + //13
              "<td><img src='img/7.jpg' height ='130'></td></tr>" + //14
              "<tr><td><img src='img/H.jpg' height ='130'></td>" + //15
              "<td><img src='img/8.jpg' height ='130'></td>" + // 16
              "<td><img src='img/I.jpg' height ='130'></td>" + //17
              "<td><img src='img/9.jpg' height ='130'></td>" + //18
              "<td><img src='img/J.jpg' height ='130'></td>" + //19
              "<td><img src='img/10.jpg' height ='130'></td>" + //20
              "<td><img src='img/K.jpg' height ='130'></td></tr>" + //21
              "<tr><td><img src='img/11.jpg' height ='130'></td>" + //22
              "<td><img src='img/L.jpg' height ='130'></td>" + // 23
              "<td><img src='img/12.jpg' height ='130'></td>" + //24
              "<td><img src='img/practiceDistractor1.jpg' height ='130'></td>" + //25
              "<td><img src='img/practiceTarget1.jpg' height ='130'></td>" + //26
              "<td><img src='img/practiceDistractor2.jpg' height ='130'></td>" + //27
              "<td><img src='img/practiceTarget2.jpg' height ='130'></td></tr>",  //28
     post_trial_gap: 200,
     on_finish: function(){
        jsPsych.setProgressBar(3/21);
    }
};

timeline.push(images);


  var practice1 = {
    type: 'survey-text',
    preamble: "<p>This is a practice round. Remember to tell your partner which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
              "<tr><td>" + practice1[0] + "</td><td>" + practice1[1] + "</td></tr>",
    questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
    post_trial_gap: 100,
    response_ends_trial: true,
    on_finish: function(){
        jsPsych.setProgressBar(4/21);
    }

};

timeline.push(practice1);

var practice2 = {
  type: 'survey-text',
  preamble: "<p>This is a practice round. Remember to tell your partner which object is in the<strong style='color:blue;'> blue square</strong>. </p>" +
            "<tr><td>" + practice2[0] + "</td><td>" + practice2[1] + "</td></tr>",
  questions: [{prompt:"<p>Type a message to your partner:</p>", required: true}],
  post_trial_gap: 100,
  response_ends_trial: true,
  on_finish: function(){
      jsPsych.setProgressBar(5/21)
  }
};

timeline.push(practice2);

trialnum = 5;

allStim = [];


for(i=0; i<8; i++){
    leftpic = allUnk[i][0];
    rightpic = allUnk[i][1];
     allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };

  for(i=0; i<8; i++){
    leftpic = allKnown[i][0];
    rightpic = allKnown[i][1];
    allStim.push({preamble: "<table align = 'center'><tr><td height = 200>" + leftpic + "</td><td width = 150></td><td height = 200>" + rightpic + "</td></tr></table>"});
   };




var test = {
	    type: 'survey-text',
      preamble: jsPsych.timelineVariable('preamble'),
      questions: [{prompt:"Type a message to your partner:", required: true}],
      response_ends_trial: true,
	    post_trial_gap: 100,
	  on_finish: function(){
	    trialnum = trialnum + 1;
        jsPsych.setProgressBar(trialnum/21);
    	}
	};




	var test_procedure = {
	  timeline: [test],
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
                    rt : reactionTime,
                    question_order: order,
                    };

				turk.submit(data);
		}
	});
};
