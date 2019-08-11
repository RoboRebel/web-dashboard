function updateConnection(connected){

	if(connected){

		var color = "lime";
	
	}else{
		var color = "red";

	}

	document.getElementsByClassName("connection")[0].style.backgroundColor = color;

	console.log(connected);
}

function updateKey(key, value, isNew){
	console.log(key + " " + value);
	for(var i = 0; i < document.getElementsByClassName("sd-value").length; i++){
		if(document.getElementsByClassName("sd-value")[i].id == key){
			document.getElementsByClassName("sd-value")[i].innerText = key + " = " + value;
		}
	}
}
NetworkTables.addGlobalListener(updateKey, true);
NetworkTables.addRobotConnectionListener(updateConnection, true);