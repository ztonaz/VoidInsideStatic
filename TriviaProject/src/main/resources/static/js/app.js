
var stompClient = null



function connect(){

	var socket = new SockJS("/Endpoint1")
	stompClient = Stomp.over(socket)
	
	stompClient.connect({}, function (){
	
		stompClient.subscribe("/topic/receive", function (trivia){
		
			showChat(JSON.parse(trivia.body).triviaName, JSON.parse(trivia.body).triviaMessage)
		
		})
	
	})

}


var stompClient2 = null



function connect2(){

	var socket2 = new SockJS("/Endpoint1")
	stompClient2 = Stomp.over(socket2)
	
	stompClient2.connect({}, function (){
	
		stompClient2.subscribe("/topic/send2", function (trivia){
		
			showChat2(JSON.parse(trivia.body).triviaName, JSON.parse(trivia.body).triviaMessage, JSON.parse(trivia.body).triviaExtra)
		
		})
	
	})

}












/*

function connect2(){

	var socket2 = new SockJS("/Endpoint4")
	stompClient2 = Stomp.over(socket2)
	
	stompClient2.connect({}, function (){
	
		stompClient2.subscribe("/topic/receive2", function (trivia){
		
			showChat2(JSON.parse(trivia.body).triviaName,(trivia.body).triviaMessage)
		
		})
	
	})

}

*/




function showChat (trivia, aa){

	//$("#outputTrivia").prepend(trivia + " : " + aa + "&#13;&#10")
	insertTextFromTrivia(trivia, aa);

}


function showChat2 (trivia, aa){

	//$("#outputTrivia").prepend(trivia + " : " + aa + "&#13;&#10")
	insertTextFromTrivia(trivia, aa, fuck);

}


document.addEventListener("DOMContentLoaded", ()=>{

	connect()
	connect2();
})