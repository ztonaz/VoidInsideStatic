//fast typing in English and spanish ztonaz



allTexts = [/*
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
    ["Uno del censo intentó hacerme una encuesta - me comí su hígado acompañado de habas y un buen Chianti."],
    ["As I walk through the valley of the shadow of death, I take a look at my life, and realize there's nothin' left."],
    ["Talk and song from tongues of lilting grace, whose sounds caress my ear. But not a word I heard could I relate, the story was quite clear."],
    ["Yesterday all my troubles seemed so far away. Now it looks as though they're here to stay. Oh, I believe in yesterday."],
    ["And in the master's chambers They gathered for the feast They stab it with their steely knives But they just can't kill the beast."],
    ["A monk swore a vow of silence to the jakes/Our yogis did stretches upstate/Our Sir Lancelot's at round tables cuttin' eighths/Our mogul just caught another case."],
    ["Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em."],
    ["Love sought is good, but given unsought is better."],
    ["We could not talk or talk forever and still find things to not talk about."],
    ["Prepare to be fucked by the long dick of the law."],
    ["But what I do have are a very particular set of skills, skills I have acquired over a very long career, skills that make me a nightmare for people like you."],*/
    ["You gotta hear this one song. It'll change your life, I swear."]

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
                            
                            
                            //progress bar change when word completed
                            thePerc = thePerc + equalyPercent
                            document.getElementById("myBar").style.width = thePerc + "%";
                            
                        }


                         else{
                    if (str1.indexOf(".") != -1 && indexWordIn==textToWrite.length-1){
						thePerc = thePerc + equalyPercent
						document.getElementById("myBar").style.width = thePerc + "%";
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

var howManyWords;
var equalyPercent;
var thePerc;

function showTheText(){
	
	thePerc =0
	document.getElementById("myBar").style.width = thePerc

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
    
    howManyWords = sizeTextWPM
    
    equalyPercent = 100/howManyWords;
    
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



function closeFastWindow2(){

    document.getElementById('usersArea').style.display = "none";
   document.getElementById('ex2').style.display = "none";
  document.getElementById('usersArea').style.display = "none";

}

function closeFastWindow3(){

    document.getElementById('topTriviaArea').style.display = "none";
   document.getElementById('ex3').style.display = "none";
  document.getElementById('topTriviaArea').style.display = "none";

}

function closeFastWindow4(){

    document.getElementById('loginArea').style.display = "none";
   document.getElementById('ex4').style.display = "none";
  document.getElementById('loginArea').style.display = "none";

}






//top trivia area
var whichTop = true;

function changeTop(){
    if (whichTop == true){
       
            document.getElementById("topTrivia").style.opacity=0;
            document.getElementById("topFast").style.opacity=.8;
            document.getElementById("fastmodeT").style.color="grey";
            document.getElementById("triviaT").style.color="black";
            document.getElementById("searchFastBox").style.opacity=.8;
            document.getElementById("searchTriviaBox").style.opacity=0;
            $("#fastmodeT").removeClass("animOn");
            $("#triviaT").addClass("animOn");
        
                


            whichTop = false;

        
        
    }
   
}



function changeTop1(){
    if( whichTop == false) {
        
            document.getElementById("topTrivia").style.opacity=.8;
            document.getElementById("topFast").style.opacity=0;
            document.getElementById("triviaT").style.color="grey"
            document.getElementById("fastmodeT").style.color="black"
            document.getElementById("searchFastBox").style.opacity=0
            document.getElementById("searchTriviaBox").style.opacity=.8
            $("#triviaT").removeClass("animOn");
            $("#fastmodeT").addClass("animOn");
            
            whichTop = true;
        
        
    }

}






//visit my blog at ztonaz.com //fast typing in English and spanish ztonaz



allTexts = [/*
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
    ["Uno del censo intentó hacerme una encuesta - me comí su hígado acompañado de habas y un buen Chianti."],
    ["As I walk through the valley of the shadow of death, I take a look at my life, and realize there's nothin' left."],
    ["Talk and song from tongues of lilting grace, whose sounds caress my ear. But not a word I heard could I relate, the story was quite clear."],
    ["Yesterday all my troubles seemed so far away. Now it looks as though they're here to stay. Oh, I believe in yesterday."],
    ["And in the master's chambers They gathered for the feast They stab it with their steely knives But they just can't kill the beast."],
    ["A monk swore a vow of silence to the jakes/Our yogis did stretches upstate/Our Sir Lancelot's at round tables cuttin' eighths/Our mogul just caught another case."],
    ["Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em."],
    ["Love sought is good, but given unsought is better."],
    ["We could not talk or talk forever and still find things to not talk about."],
    ["Prepare to be fucked by the long dick of the law."],
    ["But what I do have are a very particular set of skills, skills I have acquired over a very long career, skills that make me a nightmare for people like you."],*/
    ["You gotta hear this one song. It'll change your life, I swear."]

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
                            
                            
                            //progress bar change when word completed
                            thePerc = thePerc + equalyPercent
                            document.getElementById("myBar").style.width = thePerc + "%";
                            
                        }


                         else{
                    if (str1.indexOf(".") != -1 && indexWordIn==textToWrite.length-1){
						thePerc = thePerc + equalyPercent
						document.getElementById("myBar").style.width = thePerc + "%";
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

var howManyWords;
var equalyPercent;
var thePerc;

function showTheText(){
	
	thePerc =0
	document.getElementById("myBar").style.width = thePerc

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
    
    howManyWords = sizeTextWPM
    
    equalyPercent = 100/howManyWords;
    
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



function closeFastWindow2(){

    document.getElementById('usersArea').style.display = "none";
   document.getElementById('ex2').style.display = "none";
  document.getElementById('usersArea').style.display = "none";

}

function closeFastWindow3(){

    document.getElementById('topTriviaArea').style.display = "none";
   document.getElementById('ex3').style.display = "none";
  document.getElementById('topTriviaArea').style.display = "none";

}

function closeFastWindow4(){

    document.getElementById('loginArea').style.display = "none";
   document.getElementById('ex4').style.display = "none";
  document.getElementById('loginArea').style.display = "none";

}






//top trivia area
var whichTop = true;

function changeTop(){
    if (whichTop == true){
       
            document.getElementById("topTrivia").style.opacity=0;
            document.getElementById("topFast").style.opacity=.8;
            document.getElementById("fastmodeT").style.color="grey";
            document.getElementById("triviaT").style.color="black";
            document.getElementById("searchFastBox").style.opacity=.8;
            document.getElementById("searchTriviaBox").style.opacity=0;
            $("#fastmodeT").removeClass("animOn");
            $("#triviaT").addClass("animOn");
        
                


            whichTop = false;

        
        
    }
   
}



function changeTop1(){
    if( whichTop == false) {
        
            document.getElementById("topTrivia").style.opacity=.8;
            document.getElementById("topFast").style.opacity=0;
            document.getElementById("triviaT").style.color="grey"
            document.getElementById("fastmodeT").style.color="black"
            document.getElementById("searchFastBox").style.opacity=0
            document.getElementById("searchTriviaBox").style.opacity=.8
            $("#triviaT").removeClass("animOn");
            $("#fastmodeT").addClass("animOn");
            
            whichTop = true;
        
        
    }

}






//visit my blog at ztonaz.com 