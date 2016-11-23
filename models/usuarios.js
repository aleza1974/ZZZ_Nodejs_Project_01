console.log("### models/usuarios.js ==> INICIO ###");
console.log("### models/usuarios.js ==> #001");

module.exports = function(){
	console.log("### models/usuarios.js ==> #002");
	var mongoose = require('mongoose');

	console.log("### models/usuarios.js ==> #003");
	//Criando o Schema "ZZZSchema" //==> Mongoose Schema (Schema in SQL)
	var ZZZSchema = mongoose.Schema;

	console.log("### models/usuarios.js ==> #004");
	var usuario = new ZZZSchema({
		nome: String,
		login: String,
		senha: String,
		data_Cad: {type: Date, default: Date.now}
	});
	console.log("### models/usuarios.js ==> #005");
	return mongoose.model('Usuarios', usuario);
}

console.log("### models/usuarios.js ==> #006");
console.log("### models/usuarios.js ==> FINAL ###");
