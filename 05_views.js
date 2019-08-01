// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   ` <strong> RISKS AND BENEFITS: </strong> The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, mild stress, or breach of confidentiality. The only benefit to you is the learning experience from participating in a research study.
            <br /><br />
            <strong> COMPENSATION: </strong> You will receive $0.50 for your participation.
            <br /><br />
            <strong> CONFIDENTIALITY </strong>: Your Mechanical Turk Worker ID will be used to distribute payment to you but will not be stored with the research data we collect from you. Please be aware that your MTurk Worker ID can potentially be linked to information about you on your Amazon public profile page, depending on the settings you have for your Amazon profile. We will not be accessing any personally identifying information about you that you may have put on your Amazon public profile page.
            <br /><br />
            The research is being conducted with the goal of publication in academic journals and presentations at academic conferences. Any reports and presentations about the findings from this study will not include your name or any other information that could identify you. We may share the data we collect in this study with other researchers– again, we will not include information that could identify you.
            <br /><br />
            <strong>SUBJECT’S RIGHTS:</strong> Your participation is voluntary.  You may stop participating at any time by closing the browser window or the program to withdraw from the study.
            <br /><br />
            <strong>CONTACT:</strong>  If you have any questions, comments, or concerns please contact Daniel Yurovsky at yurovsky@uchicago.edu.
            <br /> <br />
            For questions about your rights as a research participant, you may contact:<br /><br />
    				<strong> The Social and Behavioral Sciences Institutional Review Board </strong> <br />
    				University of Chicago<br/>
    				Phone: (773) 834-7835<br/>
    				E-mail: sbs-irb@uchicago.edu`,
   buttonText: 'I consent to participate'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Game Instructions',
    text:  ` You will be helping a partner choose between two objects by typing a message into a textbox. <br /><br />
            A <strong style="color:blue;"> blue square</strong> will indicate the object you should discuss. <br /><br />
            Your partner will use your message to select between the same two objects, which may be in a different order.
           <br /><br />

           Please stay on topic. Random responses will result in rejected Hits. <br /> <br /></div>` ,
    buttonText: 'Next'
});

const images = babeViews.view_generator("images",{
  trials: 1,
  name: "images",
  title: "Game Instructions",
  text: `These are images you will see in this experiment. Some may appear more than others.
  <div style='width: 1000px; margin: auto; text-align: center'>
      <div class="row">
        <div class="column"><img src='img/1.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/A.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/2.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/B.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/3.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/C.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/4.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/D.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/5.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/E.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/6.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/F.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/7.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/G.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/8.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/H.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/9.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/I.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/10.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/J.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/11.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/K.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/12.jpg' width="150" height="140"></img></div>
        <div class="column"><img src='img/L.jpg' width="150" height="140"></img></div>
    </div></div>`,
    buttonText: 'Begin'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = babeViews.view_generator("textbox_input", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.textbox_input.length,
    // name should be identical to the variable name
    name: 'forced_choice_2A',
    data: trial_info.textbox_input,
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const trial = babeViews.view_generator("textbox_input", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info_2.textbox_input.length,
    // name should be identical to the variable name
    name: 'trial',
    data: trial_info_2.textbox_input,
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
