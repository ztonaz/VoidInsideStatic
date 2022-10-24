//last - name of the not logged-in users
var last;
var lastNames=[];
var yourNumber;

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
  $( "#inpTrivia" ).focus();
}

//function show fast mode
function showFast(){
document.getElementById('fastTypeArea').style.display = "";
   document.getElementById('ex').style.display = "";
  document.getElementById('fastTypeArea').style.display = "";

   closeFastWindow2();
  closeFastWindow4();


document.getElementById("topTriviaArea").style.display="none";


  randomTextToFastWriting();

  


}


//function show connected users
function showUsers(){



document.getElementById('usersArea').style.display = "";
   document.getElementById('ex2').style.display = "";
  document.getElementById('usersArea').style.display = "";

  closeFastWindow();
  closeFastWindow4();

document.getElementById("topTriviaArea").style.display="none";

  randomTextToFastWriting();



  
  

}


//function show top trivia
function showTopTrivia(){
document.getElementById('topTriviaArea').style.display = "";
   document.getElementById('ex3').style.display = "";
  document.getElementById('topTriviaArea').style.display = "";


   closeFastWindow();
  closeFastWindow2();
  closeFastWindow4();



  randomTextToFastWriting();

}


//function login signup
function showLogin(){
document.getElementById('loginArea').style.display = "";
   document.getElementById('ex4').style.display = "";
  document.getElementById('loginArea').style.display = "";


   closeFastWindow();
  closeFastWindow2();

document.getElementById("topTriviaArea").style.display="none";


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
	DeleteUserFromListOnDisconnect();
	
	
	
	
  $( "#inpTrivia" ).focus();
  
  document.getElementById('fastTypeArea').style.display = "none";
  document.getElementById('usersArea').style.display = "none";
  document.getElementById('topTriviaArea').style.display = "none";
  document.getElementById('loginArea').style.display = "none";
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

    //alert("last: " + last)

    if (lastNames.length==0){
      
      yourNumber=0
    }
    else{

    }



    console.log(last);
    
    foo();




}


//Get input and ouput your text in the chat
function clickMe(){ 
  //new line for the chat
  //text send in the chat 
	singleValues = $( "#inpTrivia" ).val();
  inpT = $("#inpTrivia").val()
  nick = $("#nickname").text()
		stompClient.send("/app/receive", {}, JSON.stringify ({"triviaName":nick, "triviaMessage":inpT}))
		
		
		
		
  //add text to an array to have an history saved of your messages, to be able to access them by pressing the up arrow
  latestInputs.push(singleValues);

  //after the new line, put the name of the person who inserted the text, the text which was inserted and scroll the chat down
	//insertTextFromTrivia(last, singleValues);

  //delete the text in the input after the enter was pressed, and focus again for the next input
	$("#inpTrivia").prop('value', ''); 
  $( "#inpTrivia" ).focus();

  //update the all inputs conuter of the latest inputs variable
  counter = latestInputs.length;
  

     
}



//Function of pressing down and up arrow. 
//When down arrow is pressed you got in the input the previous text inserted
//When up arrow is pressed you got in the input the next text inserted, in case that before you pressed the previous down arrow key
$('#inpTrivia').bind('keydown', function(e) {

    if (e.which === 38) {
          //prevents actions - like that the cursor goes to the end of the input
          e.preventDefault();
          $("#inpTrivia").prop('value', previous());
    }

    else if (e.which == 40) {
          $("#inpTrivia").prop('value', next());
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
	/*
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
                
                  	*/
              }

              //if text inserted is "!stop"
              else if (singleValues=="!stop"){
              	/*
                if (botActive==false){
                  insertTextFromTrivia("", "<span class='notification'>" + "Trivia is already stopped. Type !start to start the trivia" + "</span>");
                   
                }
                else{
                  alert("stop");
                  insertTextFromTrivia("", "<span class='notification'>" + "Trivia has stopped. Type !start to start the trivia" + "</span>");
                  botActive=false;
                   $('#theQ').text(''); 

                }
              	*/

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