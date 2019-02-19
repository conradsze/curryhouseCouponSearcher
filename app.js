// var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	// var locations = [];
	// for (var i = 0; i < char.length; i++) {
	// 	for (var j = 0; j < char.length; j++) {
	// 		locations.push(char[i]+char[j])
	// 	}
	// }

	var locations = ["Cypress", "Cupertino", "Gardena", "Irvine", "Little Tokyo", "Monterey Park", "Puente Hills", "Torrance", "West LA"]
	var locationcodes = ["CY","CU","GA", "IR", "LT", "MP", "PH", "TR", "WL"]

		

	for (var i = locations.length -1 ; i >= 0; i--) {
			$("#location").append('<option value="' + locationcodes[i] + '">' + locations[i] + '</option>')
		}	


	var allDates = function(){
		$("#coupon").empty()
		var now = new Date()
		console.log(now)
		var month = $('#today').val().split("-")[1] || ((now.getMonth()+1)<10 ? "0" + (now.getMonth()+1) : (now.getMonth()+1))
		console.log(month)		
		var year = $('#today').val().split("-")[0] || now.getFullYear()
		var location = $('#location').val()
		var GA = ""
		for (var i = 1; i < 32; i++) {
			if(location=="GA"){
				GA="wl"
			}

			if(month < 10){
				var url = "http://www.curryhousemail.com/e_invitation/" + location + "/img/e_invitation_" + location + "_0" + (month*100+i) + year + GA + ".jpg"
			}else{
				var url = "http://www.curryhousemail.com/e_invitation/" + location + "/img/e_invitation_" + location + "_" + (month*100+i) + year + GA + ".jpg"
			}
      	 	$("#coupon").append('<img src="'+ url +'" onError="this.onerror = '+"''"+' ;this.style.visibility='+"'hidden'"+';" />')
		}	

		$('img').css({'width' : '20%'});

	}
	
	$("#search").click(allDates)