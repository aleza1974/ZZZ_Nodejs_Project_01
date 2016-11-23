console.log("### controllers/home.js ==> INICIO ###");
console.log("### controllers/home.js ==> #001");

module.exports = function(app){
	console.log("### controllers/home.js ==> #002");
	var HomeController = {
		index: function(req, res) {
		   res.render('home/index');
		}
	}
	console.log("### controllers/home.js ==> #003");
	return HomeController;
}

console.log("### controllers/home.js ==> #004");
console.log("### controllers/home.js ==> FINAL ###");


