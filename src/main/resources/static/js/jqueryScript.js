//last - name of the not logged-in users
var last;

//singlevalues - text send in the chat 
var singleValues;

//counter - inputs counter of the latestinputs variable
var counter = 0;
//latestInputs - array containing all the inputs memorized since you entered the sesion
var latestInputs = [""];

//random number to get a random question from the question array
var randomQ;


var questionAsnweredAlready = false;


var ifskip = false;

var timenow;
var tempTime;


var theInputsNumber = 19;
var botActive = false;
var activeQ = false;

var x=0;


var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var hintCount = 2;


//Questions and answers for the trivia
//in the future maybe put just a variable to recieve from Spring Boot
var questions = ["Capital of Portugal", "Current car of ztonaz", "Brother of ztonaz", "Capital of Germany", "Capital of Andorra", "Capital of Ukraine", "Capital of Bulgaria", "Capital of Colombia", "Capital of Venezuela", "Capital of Spain", "Capital of Finland", "Capital of Austria", "Capital of Canada", "Capital of Romania", "Capital of France", "Escribe el abecedario", "Cual es el nombre del creador de este trivia?", "Capital of the United States?", "What is BLM?", "Donde se encuentra el Big Bang?"];
let answers = ["Lisbon", "Hyundai Matrix", "ggskill", "Berlin", "Andorra la Vella", "Kiev", "Sofia", "Bogota", "Caracas","Madrid", "Helsinki", "Viena", "Ottawa", "Bucharest", "Paris", "abcdefghijklmnopqrstuvwxyz", "ztonaz", "Washington DC", "Black Lives Matters", "London"];



//Text to be written in fast typing mode
fastText=["If you control the past, you can control the future. If you control the present you can control the future", "Cuando estas escuchando lo que te estoy diciendo, vete a tomar por culo", "Step by step the constitutional law has changed. Then there were the bad people that won't allowed to object and wanted something to happen"];




//ads and general info array
var adANDinfo = ["You can insert here your ad. For more info - contact at email: realztonaz@gmail.com", "The top is reseting each first day of the month", "ztonaz is personally thanking you for being here :*", "Write !commands in the chat to see all the available commands", "To see your trivia stats just write in the chat: !rank", "Too see top 10 players of the current month write in the chat: !top", "To see info about a player just write in the chat !who player_nickname"];
//random number for a random question
var randomAD = 0;
//variable to break add/info message if next is a question to not interfiere with the question
var breakAD = false;


var tempAns=[];

var myScore=0;
var consecutiveQ=0;

var avPtime = 0.000;
var totalTme = 0.000;
var countCorrect = 1;

//average 
average = {name:last, points:myScore, averageTime:avPtime};




//function close fast mode
function clickX(){
  document.getElementById('ex').style.display = "none";
  document.getElementById('fastTypeArea').style.display = "none";
  $( "#inputTrivia" ).focus();
}

//function show fast mode
function showFast(){
document.getElementById('fastTypeArea').style.display = "";
   document.getElementById('ex').style.display = "";
  document.getElementById('fastTypeArea').style.display = "";
  randomTextToFastWriting();
}


//function put random text on fast mode screen
function randomTextToFastWriting(){
  //get a random index of fastText array
    var randomTxt = Math.floor(Math.random()*fastText.length) + 1;
                          randomTxt = randomTxt - 1;

    document.getElementById("originalFast").innerHTML = fastText[randomTxt];
    document.getElementById("yourFast").innerHTML = fastText[randomTxt];
    $("#inputFast").prop('value', ''); 
    $( "#inputFast" ).focus();

}











//function insert text to chat from trivia bot
function insertTextFromTrivia(user, text){
    $( "#outputTrivia" ).append("<br/>");
    $( "#outputTrivia" ).append("<span class='fastTrivia'>" + user + "> " + "</span>");
    $( "#outputTrivia" ).append(text);
    $('#outputTrivia').scrollTop($('#outputTrivia')[0].scrollHeight);
}
         


/*
//message for ad or random info
function resolveAfter1seconds() {
  return new Promise(resolve => {
                          randomAD = Math.floor(Math.random()*adANDinfo.length) + 1;
                          randomAD = randomAD - 1;
    setTimeout(() => {
        var res;
        if (breakAD == false){
                res = insertTextFromTrivia("TriviaBot", "<span class=\"adText\">" + adANDinfo[randomAD] + "</span>");
            }
            else{
              res = "";
            }
      resolve(
            res
            
        );
    }, 50000);
  });
}

async function asyncCall() {
  console.log('done');
  const result = await resolveAfter1seconds();
  // expected output: "done"
  asyncCall();
}

*/

function foo() {

if (breakAD==false){
     randomAD = Math.floor(Math.random()*adANDinfo.length) + 1;
                          randomAD = randomAD - 1;
    insertTextFromTrivia("TheALgorithm", adANDinfo[randomAD]);
}
    

    setTimeout(foo, 50000);
}






//Onload page
window.onload = function() {
  document.getElementById('fastTypeArea').style.display = "none";
    //message will be shown when the user join - message will be shown only to the user, not all the people connected
   // $('#outputTrivia').text("The trivia are three lower Artes Liberales, i.e. grammar, logic and rhetoric. These were the topics of basic education, foundational to the quadrivia of higher education, and hence the material of basic education and an important building block for all undergraduates. The word trivia was also used to describe a place where three roads met in Ancient Rome. While the term is now obsolescent, in ancient times, it was appropriated to mean something very new. In the 1960s, nostalgic college students and others began to informally trade questions and answers about the popular culture of their youth. The first known documented labeling of this casual parlor game as Trivia was in a Columbia Daily Spectator column published on February 5, 1965. The authors, Ed Goodgold and Dan Carlinsky, then started the first organized trivia contests, described below. Since the 1960s, the plural trivia in particular has widened to include but not essential, specifically detailed knowledge on topics of popular culture. The expression has also come to suggest information of the kind useful almost exclusively for answering quiz questions, hence the brand name Trivial Pursuit.");
    //scroll full down after a message was entered in the chat
    $('#outputTrivia').scrollTop($('#outputTrivia')[0].scrollHeight);

  //Generate an anonymus almost random nickname for not login users using time(sec, min, h) and some mathematic operation with it
  //last is the variable name for the not logged in users
    var d = new Date();
    var n = d.getHours();
    var z = d.getMinutes();
    var minH = n+z
    minH = minH.toString();
    var j = d.getSeconds().toString();
    var comb = d.getSeconds()-d.getMinutes();
    comb2 = comb/2
    comb = comb.toString();
    comb2 = comb2.toString();
    last = "anonym"+j+comb2+minH+comb;
    console.log(last);
    
    foo();

}


//Get input and ouput your text in the chat
function clickMe(){ 
  //new line for the chat
  //text send in the chat 
	singleValues = $( "#inputTrivia" ).val();

  //add text to an array to have an history saved of your messages, to be able to access them by pressing the up arrow
  latestInputs.push(singleValues);

  //after the new line, put the name of the person who inserted the text, the text which was inserted and scroll the chat down
	insertTextFromTrivia(last, singleValues);

  //delete the text in the input after the enter was pressed, and focus again for the next input
	$("#inputTrivia").prop('value', ''); 
  $( "#inputTrivia" ).focus();

  //update the all inputs conuter of the latest inputs variable
  counter = latestInputs.length;
     
}



//Function of pressing down and up arrow. 
//When down arrow is pressed you got in the input the previous text inserted
//When up arrow is pressed you got in the input the next text inserted, in case that before you pressed the previous down arrow key
$('#inputTrivia').bind('keydown', function(e) {

    if (e.which === 38) {
          //prevents actions - like that the cursor goes to the end of the input
          e.preventDefault();
          $("#inputTrivia").prop('value', previous());
    }

    else if (e.which == 40) {
          $("#inputTrivia").prop('value', next());
    } 

});


//Function to get the previous text inserted
function previous() {
  counter = (counter === 0) ? latestInputs.length - 1 : --counter;
  return latestInputs[counter];
}
//Function to get the next text inserted, in the latest Inputs array, to drive backward and FORWARD in the array
function next() {
  counter = (counter === latestInputs.length - 1) ? 0 : ++counter ;
  return latestInputs[counter];
}




$(document).on('keypress',function(e) {

    //When you hit enter key(13 code) on chat:
    if(e.which == 13) {



              //Get the input and show the output of the text in the chat
              clickMe();

              //if text inserted is "!start"
              if (singleValues=="!start"){
                if (botActive==true){
                    if (randomQ==null){
                        insertTextFromTrivia("", "<span class='notification'>" + "Game already active." + "</span>");
                    }
                    else{
                        insertTextFromTrivia("", "<span class='notification'>" + "Game already active. Current question is: " + questions[randomQ] + "</span>");
                    }
                    
                }
                else{
                  botActive=true;
                  botAsking();

                }
                
                  	
              }

              //if text inserted is "!stop"
              else if (singleValues=="!stop"){
              	
                if (botActive==false){
                  insertTextFromTrivia("", "<span class='notification'>" + "Trivia is already stopped. Type !start to start the trivia" + "</span>");
                   
                }
                else{
                  alert("stop");
                  insertTextFromTrivia("", "<span class='notification'>" + "Trivia has stopped. Type !start to start the trivia" + "</span>");
                  botActive=false;
                   $('#theQ').text(''); 

                }
              	

            }


            //if text inserted is "!test"
              else if (singleValues=="!test"){
                
                insertTextFromTrivia("FastTrivia", "test");
                

            }


            //if text inserted is "!me"
              else if (singleValues=="!me"){
                
                insertTextFromTrivia("FastTrivia", "You are " + "<span class='timeColor'>" + last + "</span>" + " and you have " + "<span class='notification'>"+ myScore  +" points" + "</span>" + ". Your average response time is: " + "<span class='fastTrivia'>"+ avPtime + "</span>" + " seconds.");
                

            }

              //if text inserted is "!hint"
              else if (singleValues=="!hint"){

                      if (hintCount==0 && activeQ==true && botActive==true){


                                for (i in answers[randomQ]){
                                  
                                      if (i==0){

                                      }

                                      else{


                                            var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                                            //        

                                            if (format.test(answers[randomQ].charAt(i))==true){
                                              tempAns.push(answers[randomQ].charAt(i));
                                            }
                                            else{
                                              tempAns.push("<span class='boldForQ'>" +"*" + "</span>");
                                            }


                                      }

                                            

                                }


                                var fake="<span class='boldForQ'></span>";

                                for(i in tempAns){
                                                      
                                        fake = fake + tempAns[i];

                                                    }



                                
                                insertTextFromTrivia("Hint: ", answers[randomQ][0]+fake);
                                insertTextFromTrivia("", "The answer has "+answers[randomQ].length + " characters");

                                tempAns=[];

                                hintCount=2;

                      }



                

            }

              //if text inserted is "!skip" to skip current question
              else if (singleValues=="!skip"){
                if (botActive==false){
                  insertTextFromTrivia("", "<span class='notification'>" + "Trivia is currently stopped. Write !start to start the game" + "</span>");
                   
                }
                else{


                    if (ifskip == false && activeQ==true){
                        ifskip = true;  
                        insertTextFromTrivia("FastTrivia", "<span class='notification'>" + "The current question is skipped. Waiting for the next question..." + "</span>");
                   
                        activeQ=false;
                        botAsking();
                    }

                    

                    


                }


                
                

            }


            //if text inserted is the correct answer to the trivia question
            else if (activeQ==true && singleValues.toLowerCase()==answers[randomQ].toLowerCase()){

                if (botActive==true){
                      if (activeQ == true){



                        tempTime = Date.now().toFixed(4)-timenow.toFixed(4);
                        var seconds = (tempTime  / 1000).toFixed(3);
                        consecutiveQ = consecutiveQ +1;
                        if (consecutiveQ>=3){
                          myScore=myScore+15;
                        }
                        else{
                          myScore=myScore+5;
                        }

                        var result = parseFloat('2.3') + parseFloat('2.4');
                        totalTme = (parseFloat(totalTme) + parseFloat(seconds));
                        totalTme = totalTme.toFixed(3);
                        countCorrect = countCorrect + 1;

                        avPtime = (totalTme/countCorrect).toFixed(3);
                        
                        insertTextFromTrivia("FastTrivia", "<span class=\"correctAnswer\">" + "Correct" + "</span>" + ". The answer was " + "<span class=\"correctAnswer\">" + answers[randomQ] + "</span>" +". " + "<span class=\"userColor\">" + last + "</span>" + " took " + "<span class=\"timeColor\">" + seconds + "</span>" + " seconds to respond.");
                        insertTextFromTrivia("", last + " has " +"<span class=\"correctAnswer\">" +myScore + "</span>" + " points and the average time for each answer is " + "</span class='notification'>" + avPtime + "</span>");

                        activeQ = false;

                  



                             

                                  //next question in 5sec
                        botAsking();

                      }
                }
                

            } 
        }


});




function botAsking(){
          $('#theQ').text('');    

                            

            setTimeout(() => { 
                            //don't ad just before a question
                            breakAD=true;

                            //message 5 sec until question
                            //wait 1,5 sec to put 5 sec until question message
                            insertTextFromTrivia("5 seconds until the question...");

           setTimeout(() => { 

                      if (botActive==true){

                                        //put the question in the chat
                                          $( "#outputTrivia" ).append("<br/>");
                                          $( "#outputTrivia" ).append("<span class='fastTrivia'>" + "FastTrivia> " + "</span>");


                                           //generate a random number for 
                                          randomQ = Math.floor(Math.random()*questions.length) + 1;

                                          randomQ = randomQ - 1;
                                          



                                          $( "#outputTrivia" ).append("<span class=\"boldForQ\">" + questions[randomQ] + "</span>");
                                          $('#outputTrivia').scrollTop($('#outputTrivia')[0].scrollHeight);
                                          $( "#theQ" ).append("<span class=\"boldForQ\">" + questions[randomQ] + "</span>");  

                                          hintCount = 0;

                                          //change active question to true
                                          activeQ = true;

                                          ifskip = false;

//when a question is asked, change timenow to that moment
                                          timenow = Date.now();
                                         


                      }

                      breakAD=false;


           }, 5000);

      
                    

     }, 1500);
                               
breakAD=true;   
                     

}


























//////////////////////////////
//fast typing in English and spanish ztonaz



allTexts = [
    ["When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible."],
    ["They may take our lives, but they'll never take our freedom."],
    ["Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges."],
    ["Hello! My name is Inigo Montoya - You killed my father - Prepare to die."],
    ["The first rule of Fight Club is: You do not talk about Fight Club."],
    ["It's no use going back to yesterday, because I was a different person then."],
    ["If you hire people just because they can do a job, they'll work for your money - But if you hire people who believe what you believe, they'll work for you with blood and sweat and tears."],
    ["If everything seems to be under control, you're not going fast enough."],
    ["Domingo de ramos, quien no estrena, no tiene manos."],
    ["Que Navidad, tiempo de longanizas, haga sol y la Pascua de flores, de hornazos, haga fresco y lluvia para que haya buen tempero y cosecha."],
    ["El tiempo de los tres hermanos: la pereza, la moquita y el soplamanos."],
    ["A ojo de buen cubero: Expresión campestre que equivale a aproximadamente, al tanteo. El cubero era el encargado de fabricar cubas para la contención de líquidos y debía tener buena vista para elaborarlas perfectas."],
    ["Amar es no tener que decir nunca 'lo siento'."],
    ["El material del que están hechos los sueños."],
    ["Pude haber sido alguien, en lugar de un vago, que eso es lo que soy, aceptémoslo."],
    ["Uno del censo intentó hacerme una encuesta - me comí su hígado acompañado de habas y un buen Chianti."]

]



texts = allTexts.length-1

textToWrite = []

var maxInputLen =""
var indexInputLen = "0"
var maxInputLen = ""

var demo_input = "";
var type_this = "321 ";
var index = 0;

//Github at: https://github.com/ztonaz
$(function() {

    $("#copy").on('input', function (){
   // Your stuff...
    $("#theCopy").val($("#copy").val());

        // o text your write
        o = $("#theCopy").val()

        lenText = o.length

        w = document.getElementById("whatIs").innerText

        //original text with length of your input
        original = w.substring(0, lenText)
        
        innerHas = document.getElementById("whatIs").innerHTML
        
        for (i=0; i<lenText; i++){
            const div = document.getElementById(i);
            
            if (o[i]==original[i]){
                div.style.color = "green"
                $('#'+ idWordComplete).html($('#whatIs').html()+" ");

            }
            else{
                if (div){
                    div.style.color = "red"
                    $('#'+ idWordComplete).html($('#whatIs').html()+" ");

                }
                
            }
        }

        for (i=lenText; i<innerHas.length; i++){
            $( "#" + i ).css( "color", "white" );
        }
    

         if (lenText==maxInputLen){
               // document.getElementById("copy").value = ""
               // ++indexInputLen
               // maxInputLen = textToWrite[indexInputLen].length
               // document.getElementById("whatIs").maxLength = maxInputLen

         }


                innerHas2 = document.getElementById("whatIs").innerHTML
                lenInput = $("#copy").val().length
                console.log("my input length: "+ lenInput + "\n" + "theThext lenth: "+(w.length+1))
                if (innerHas2.includes("red")){

                }
                else{
                     $('#'+ idWordComplete).html($('#whatIs').html()+" ");
                    if(indexWordIn != textToWrite.length){
                        str1 = $("#copy").val()
                        //if word and space correct go to next word
                        if (lenInput==w.length+1 && str1.indexOf(" ") != -1){
                            ++indexWordIn
                            //++wordInAllText
                            ttw=textToWrite[indexWordIn]
                            document.getElementById("whatIs").innerText = ttw
                            w = document.getElementById("whatIs").innerText
                            textWithColors = ""
                            for (var i = 0; i < w.length; i++) {
                                textWithColors = textWithColors + '<span id=' + i + ' style="color:white">' + w[i] + '</span>'
                            }

                            document.getElementById("whatIs").innerHTML = textWithColors
                            document.getElementById("copy").value = ""
                            document.getElementById("copy").maxLength = ttw.length

                            

                            deleteTheId = document.getElementById(idWordComplete).innerHTML
                            ha = deleteTheId.replaceAll('id=' , "p=")
                            document.getElementById(idWordComplete).innerHTML = ha

                            idWordComplete++
                        }


                         else{
                    if (str1.indexOf(".") != -1 && indexWordIn==textToWrite.length-1){
                        endTime = new Date().getTime().toFixed(5);
                        var time = (endTime - startTime)/1000;
                        wpm = ((sizeTEXTCPM/5)/(time*0.0166667)).toPrecision(6)
                        cpm = wpm*5
                        //alert('Execution time: ' + time);
                         document.getElementById("infostats").innerText ="You typed the text in " + time + " seconds. \nCPM: "+ cpm.toFixed(5) + "\nWPM: " + wpm;
                        document.getElementById("infostats").style.opacity = 1
                       alert("You finished in " + time + " seconds.")
                        //alert("final")
                    }

                }


                    }
               

        }

    });

    
});

whichMode = "normal"

function changeToNormal() {
    whichMode = "normal"
    document.getElementById("completeText").style.opacity = "1";
    document.getElementById("whatIs").style.opacity = "0";
    document.getElementById("normal").style.opacity = "0.4";
    document.getElementById("eat").style.opacity = "1";
    document.getElementById("normalText").style.opacity="1";
    document.getElementById("eatText").style.opacity="0";

     document.getElementById("copy").focus();
}
function changeToEat() {
    whichMode = "eat"
  document.getElementById("whatIs").style.opacity = "1";
  document.getElementById("completeText").style.opacity = "0";
  document.getElementById("normal").style.opacity = "1";
    document.getElementById("eat").style.opacity = "0.4";
    document.getElementById("normalText").style.opacity="0";
    document.getElementById("eatText").style.opacity="1";

  document.getElementById("copy").focus()
}

function showTheText(){

    document.getElementById("copy").disabled="true";
    //get a random text from our array

    //get a random number between 0 and len of Texts array
    randomText = Math.floor(Math.random() * (texts - 0 + 1) + 0)
    theToWriteText = allTexts[randomText]
    sizeTEXTCPM = theToWriteText.toString().length

    hhhh = theToWriteText.toString().split(" ");
    for (i=0;i<hhhh.length-1; i++){
        hhhh[i] = hhhh[i] + " "
    }
    sizeTextWPM = hhhh.length
    textToWrite = hhhh

    //index for word in complete text
indexWordComplete=0
indexLetterComplete=0


indexInputLen = 0
maxInputLen = textToWrite[indexInputLen].length
indexWordIn = 0
ttw=textToWrite[indexWordIn]
document.getElementById("copy").maxLength = ttw.length

document.getElementById("whatIs").innerText = ttw
document.getElementById("whatIs").maxLength = maxInputLen

w = document.getElementById("whatIs").innerText
textWithColors = ""
for (var i = 0; i < w.length; i++) {
    textWithColors = textWithColors + '<span id=' + i + ' style="color:white">' + w[i] + '</span>'
}

document.getElementById("whatIs").innerHTML = textWithColors

//create the complete Text 
ttwComplete = textToWrite[indexWordComplete]
document.getElementById("completeText").innerText = ttwComplete

idWordComplete = 10000000

completeTextWithColors= ""
arrayTextToWriteComplete=[]
idLetterComplete = 10000
for (j=0; j<textToWrite.length; j++){

    completeLetters = textToWrite[j]
    theWord=""
    for (y=0;y<completeLetters.length;y++){
        theWord = theWord + '<span id=' + (idLetterComplete) + '>' + completeLetters[y] + '</span>'

        idLetterComplete++
    }
    arrayTextToWriteComplete.push(theWord)


    completeTextWithColors = completeTextWithColors + '<span id=' + (j+idWordComplete) + '>' + textToWrite[j] + '</span>'
    document.getElementById("completeText").innerHTML = completeTextWithColors
    
   
}
document.getElementById("completeText").innerHTML = completeTextWithColors
idLetterComplete = 10000
}


demo_input = document.getElementById('timer3sec');

type_this = "321 ";
index = 0;

window.next_letter = function() {
    if (index <= type_this.length-1) {
        demo_input.value = type_this[index];
        index++
        setTimeout("next_letter()", 900);
        
    }
    
}


var startTime = new Date().getTime().toFixed(5);
var endTime = new Date().getTime().toFixed(5);

function timeElapsed(){
    var time = endTime - starTime;
    alert('Execution time: ' + time);
}

function startTimerF(){
    startTime = new Date().getTime().toFixed(5);
}




timer321 =""


function gofor2sec(){
    $('#gogo').show(1).delay(2000).hide(1);
    document.getElementById("copy").disabled=false;

    document.getElementById("copy").focus();
}


function fullStart(){
    if (whichMode=="normal"){
        document.getElementById("completeText").style.opacity = "1";
    }
    else if (whichMode=="eat"){
        document.getElementById("whatIs").style.opacity = "1";
    }
    
    
    showTheText()
    gofor2sec()
    startTimerF()
}

function startTimer(){
    document.getElementById("copy").disabled="true";
    document.getElementById("completeText").style.opacity = "0";
    document.getElementById("whatIs").style.opacity = "0";
    document.getElementById("infostats").style.opacity = "0";
    clearTimeout(timer321);
    index = 0
    next_letter()
    document.getElementById('copy').value = ''
    timer321 = setTimeout(fullStart, 3000)

    

}



function closeFastWindow(){

    document.getElementById('fastTypeArea').style.display = "none";
   document.getElementById('ex').style.display = "none";
  document.getElementById('fastTypeArea').style.display = "none";

}




//visit my blog at ztonaz.com 








/////////


