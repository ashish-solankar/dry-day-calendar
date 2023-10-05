//Calendar
var gistUrl = 'https://gist.githubusercontent.com/ashish-solankar/d339885d4f70f5cd32422c7a6ed8daf0/raw/';

function showResult(){
	let today = new Date();
	let fullYear = today.getFullYear();
	let month =  today.getMonth() + 1;
	let day  = today.getDate();

	let todayString = "" + fullYear + "" + month + "" + day ;

	const resultDiv = document.getElementById("container");
	var url = '';
	$.getJSON(gistUrl, function(data) {
		console.log(JSON.stringify(data.dbUrl));
		url = JSON.stringify(data.dbUrl) + "/posts";
	});

	$.getJSON(url, function(data) {

		var i;

		 for (i = 0; i < data.length; i++) {
			console.log("\""+todayString+"\"");
			console.log(JSON.stringify(data[i].date));
		 	if("\""+todayString+"\"" == JSON.stringify(data[i].date)){
				resultDiv.innerHTML = JSON.stringify(data[i].description);
				break;
		 	}else{
		 		resultDiv.innerHTML = "No you can enjoy your drink ...";
		 	}

		 }
         
    });

}
