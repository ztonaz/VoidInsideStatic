
var stompClient2 = null



function connectBot(){

	var socket = new SockJS("/Endpoint2")
	stompClient2 = Stomp.over(socket)
	
	stompClient2.connect({}, function (){
	
		stompClient2.subscribe("/topic/triviaBot", function (trivia){
		
			showBot(JSON.parse(trivia.body).triviaName, JSON.parse(trivia.body).triviaMessage)
		
		})
	
	})

}







function showBot (trivia, aa){

	//$("#outputTrivia").prepend(trivia + " : " + aa + "&#13;&#10")
	insertTextFromTrivia(trivia, aa);

}


document.addEventListener("DOMContentLoaded", ()=>{

	
})