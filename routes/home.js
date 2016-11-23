console.log("### routes/home.js ==> INICIO ###");
console.log("### routes/home.js ==> #001");

module.exports = function(app){
	console.log("### routes/home.js ==> #002");
	var home = app.controllers.home;

	console.log("### routes/home.js ==> #003");
	app.get('/', home.index);
	console.log("### routes/home.js ==> #004");
}

console.log("### routes/home.js ==> #005");
console.log("### routes/home.js ==> FINAL ###");


