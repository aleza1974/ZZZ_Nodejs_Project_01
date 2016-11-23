
//	var DateTime = getDateTime('DD/MM/AAAA HH:MM:SS');

	//FUNCTION!!! getDateTime ==>  busca a data/hora do sistema
	function getDateTime(format) {
		console.log("### function getDateTime ==> INICIO ###");
	    var date = new Date();

	    var hour = date.getHours();
	    hour = (hour < 10 ? "0" : "") + hour;

	    var min  = date.getMinutes();
	    min = (min < 10 ? "0" : "") + min;

	    var sec  = date.getSeconds();
	    sec = (sec < 10 ? "0" : "") + sec;

	    var year = date.getFullYear();

	    var month = date.getMonth() + 1;
	    month = (month < 10 ? "0" : "") + month;

	    var day  = date.getDate();
	    day = (day < 10 ? "0" : "") + day;

	    var datahora = year + "-" + month + "-" + day + "-" + hour + ":" + min + ":" + sec;
		if (format == 'AAAAMMDDHHMMSS') {
			var datahora =  year + month + day + hour + min + sec;
		}
		else if (format == 'AAAA-MM-DD HH:MM:SS') {
		    var datahora = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
		}
		else if (format == 'DD/MM/AAAA HH:MM:SS') {
		    var datahora = day + "/" + month + "/" + year +   " " + hour + ":" + min + ":" + sec;
		}
		console.log("### function getDateTime ==> FINAL ### "+ datahora);
		return datahora;
	}
