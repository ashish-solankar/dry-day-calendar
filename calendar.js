//Calendar
var url = 'https://api.myjson.com/bins/xwuk4';

function showResult(){
	let today = new Date();
	let fullYear = today.getFullYear();
	let month =  today.getMonth() + 1;
	let day  = today.getDate();

	let todayString = "" + fullYear + "" + month + "" + day ;

	const resultDiv = document.getElementById("container");

	$.getJSON(url, function(data) {

		var i;

		 for (i = 0; i < data.length; i++) {

		 	if("\""+todayString+"\"" == JSON.stringify(data[i].date)){
				resultDiv.innerHTML = JSON.stringify(data[i].description);
				break;
		 	}else{
		 		resultDiv.innerHTML = "No you can enjoy your drink ...";
		 	}

		 }
         
    });

}