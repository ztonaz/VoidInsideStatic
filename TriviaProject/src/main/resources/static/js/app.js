
var stompClient = null



function connect(){

	var socket = new SockJS("/Endpoint1")
	stompClient = Stomp.over(socket)
	
	stompClient.connect({}, function (){
	
		stompClient.subscribe("/topic/triviaContent", function (trivia){
		
			showChat(JSON.parse(trivia.body).triviaName, JSON.parse(trivia.body).triviaMessage)
		
		})
	
	})

}







function showChat (trivia, aa){

	//$("#outputTrivia").prepend(trivia + " : " + aa + "&#13;&#10")
	insertTextFromTrivia(trivia, aa);

}


document.addEventListener("DOMContentLoaded", ()=>{

	connect()
})