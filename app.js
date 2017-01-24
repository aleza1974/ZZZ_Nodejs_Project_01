console.log("### app.js ==> INICIO ### ");
//var DateTime = require('../util/utilZZZ');
console.log("### app.js ==> #001");
//console.log("### app.js ==> INICIO ### " + DateTime.getDateTime("DD/MM/AAAA HH:MM:SS"));
//console.log("Teste do Zanetti #101b" + utilsZZZ();


var http 			= require('http');
var express 		= require('express');
var load			= require('express-load');
var mongoose 		= require('mongoose');
var flash			= require('express-flash');
var cfenv 			= require('cfenv');
var favicon 		= require('serve-favicon');
var logger 			= require('morgan');
var methodOverride 	= require('method-override');
var session 		= require('express-session');
var bodyParser 		= require('body-parser');
var multer 			= require('multer');
var errorHandler 	= require('errorhandler');
var cookie			= require('cookie-parser');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8888);

var mongoDB_Nome	= 'ZZZ_Database';  //==> Mongoose Database (Database in SQL)
//var mongoDB_Path	= 'mongodb://localhost/';
//var mongoDB_Path	= 'mongodb://192.168.162.173:27017/';
//var mongoDB_Path	= 'mongodb://ZZZDestination/';

var mongoDB_Path	= 'mongodb://cap-sg-prd-5.integration.ibmcloud.com:18125/';
//if (process.env.VCAP_APPLICATION) {
//	var mongoDB_Path	= process.env.VCAP_APPLICATION.URL_MONGODB;
//	console.log("### app.js ==> #002 - process.env.VCAP_APPLICATION " + process.env.VCAP_APPLICATION);
//	console.log("### app.js ==> #002 - process.env.VCAP_APPLICATION.URL_MONGODB " + process.env.VCAP_APPLICATION.URL_MONGODB);
//	console.log("### app.js ==> #002 - mongoDB_Path " + mongoDB_Path);
//}
//else
//{
//	var mongoDB_Path	= 'localhost:27017/';
//	console.log("### app.js ==> #002 - mongoDB_Path " + mongoDB_Path);
//}
var mongoDB_URL		= mongoDB_Path.toString() + mongoDB_Nome.toString();

var path_public		= __dirname + '/public';
var path_views		= __dirname +  '/views';

console.log("### app.js ==> #002");
var app = express();

console.log("### app.js ==> #003");
var appEnv = cfenv.getAppEnv();

console.log("### app.js ==> #004");
// ZZZ Retirado Mongoose 
 
mongoose.connect(mongoDB_URL, function(err) {
	if (err) {
		console.log("### app.js ==> #004 err: " + mongoDB_URL);
		console.log('Erro ao connectar no MongoDB: ' + err)
		console.error("### app.js ==> #004 err: " + mongoDB_URL)
		console.error('Erro ao connectar no MongoDB: ' + err)
	}
});

// ZZZ Retirado Mongoose 
console.log("### app.js ==> #005");
console.log("Conectado no MongoDB " + mongoDB_Path.toString() + mongoDB_Nome.toString());

app.set('views', path_views.toString());
app.set('view engine', 'jade');

console.log("### app.js ==> #006");
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'zzzuwotm8' }));
app.use(cookie());

app.use(flash());

app.use(express.static(path_public.toString()));

console.log("### app.js ==> #007");
if ('development' == app.get('env')) {
	console.log("### app.js ==> #007 env");
	app.use(errorHandler());
	console.log("### app.js ==> #007b env");
}

//console.log("### app.js ==> #008 =====================================");
//load('models').then('controllers').then('routes').into(app);
//ou 
console.log("### app.js ==> #008 - load models =======================");
load('models').into(app);
console.log("### app.js ==> #008 - load controllers ==================");
load('controllers').into(app);
console.log("### app.js ==> #008 - load routes =======================");
load('routes').into(app);
console.log("### app.js ==> #008 =====================================");

console.log("### app.js ==> #009");
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
	console.log("server starting on " + appEnv.url);
});


/*http.createServer(function (req, res) {
	console.log("### app.js ==> #009 - CreateServer");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');
//	console.log("### app.js ==> #009 listen");
//	console.log('Express server listening on port 3000');
}).listen(port);
*/
console.log("### app.js ==> #009 - Server running at http://127.0.0.1: "+port);

console.log("### app.js ==> FINAL ###");

