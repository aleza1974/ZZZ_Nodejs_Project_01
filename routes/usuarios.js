console.log("### routes/usuarios.js ==> INICIO ###");
console.log("### routes/usuarios.js ==> #001");

module.exports = function(app){

	const url = require('url');
	console.log("### $$$$$$$$$$$$$$$$$$ ###" + url);
	
	console.log("### routes/usuarios.js ==> #002");
	var usuarios = app.controllers.usuarios;
	
	console.log("### routes/usuarios.js ==> #003 app.get /usuarios");
	app.get("/usuarios", usuarios.index);

	console.log("### routes/usuarios.js ==> #004 app.get /usuarios/cadastrar");
	app.get("/usuarios/cadastrar", usuarios.cadastrar);

	console.log("### routes/usuarios.js ==> #005 app.post /usuarios/cadastrar");
	app.post("/usuarios", usuarios.cadastrar_POST);

	console.log("### routes/usuarios.js ==> #006 app.get /usuarios/listar");
	app.get("/usuarios/listar", usuarios.listar);

	console.log("### routes/usuarios.js ==> #007 app.get /usuarios/editar");
	app.get("/usuarios/editar/:id", usuarios.editar);

//	console.log("### routes/usuarios.js ==> #008 app.put /usuarios/editar_put");
//	app.put("/usuarios/editar/:id", usuarios.editar_put);
	console.log("### routes/usuarios.js ==> #008 app.put /usuarios/editar_post");
	app.post("/usuarios/editar/:id", usuarios.editar_put);

	console.log("### routes/usuarios.js ==> #009 app.get /usuarios/visualizar");
	app.get("/usuarios/visualizar/:id", usuarios.visualizar);

	console.log("### routes/usuarios.js ==> #010 app.delete /usuarios/excluir_delete");
//	app.delete("/usuarios/excluir_delete/:id", usuarios.excluir_delete);
	app.post("/usuarios/excluir_delete/:id", usuarios.excluir_delete);

	console.log("### routes/usuarios.js ==> #011");
}

console.log("### routes/usuarios.js ==> #011");
console.log("### routes/usuarios.js ==> FINAL ###");


