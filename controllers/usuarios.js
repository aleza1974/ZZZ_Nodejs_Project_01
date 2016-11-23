console.log("### controllers/usuarios.js ==> INICIO ###");
console.log("### controllers/usuarios.js ==> #001");
var moment			= require('moment');

module.exports = function(app){
	console.log("### controllers/usuarios.js ==> #002");
	var Usuario = app.models.usuarios;

	console.log("### controllers/usuarios.js ==> #003");
	var UsuarioController = {
		index: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 index " + app.mountpath);
			Usuario.find(function(err, data){
				console.log("### controllers/usuarios.js ==> #003 index find ");
				if (err){
					console.log('Erro na lista '+ err);
				} 
//				req.flash('info', 'Lista de usuarios consultada com sucesso ')
				console.log("Lista de usuarios consultada com sucesso ");
				res.render('usuarios/index_listar', {lista: data, moment: moment});
			});
		},
		cadastrar: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 cadastrar " + app.mountpath);
			res.render('usuarios/cadastrar');
		},
		cadastrar_POST: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 cadastrar_POST " + app.mountpath);
			var model = new Usuario(req.body);
			model.save(function(err){
				console.log("### controllers/usuarios.js ==> #003 cadastrar_POST save");
				if (err){
					console.log('Erro no salvamento '+ err);
				}
				console.log('Usuario cadastrado com sucesso');
				req.flash('info', 'Usuario cadastrado com sucesso')
				req.flash('id', 'Id: ' + model.id)
				res.redirect("/usuarios");
			})
		},
		listar: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 listar " + app.mountpath);
			Usuario.find(function(err, data){
				console.log("### controllers/usuarios.js ==> #003 listar find ");
				if (err){
					console.log('Erro na lista '+ err);
				} else{
					console.log("Lista consultada com sucesso ");
					res.json(data);
				}
			})
		},
		editar: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 editar " + app.mountpath);
			Usuario.findById(req.params.id, function(err,data){
				if (err){
					console.log('Erro no editar '+ err);
				} else{
					console.log("editar ==> FindById consultada com sucesso " + req.params.id);
					res.render('usuarios/editar', {value: data});
				}
			});
		},
		editar_put: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 editar_put " + app.mountpath);
			Usuario.findById(req.params.id, function(err, data){
				if (err){
					console.log('Erro no editar put '+ err);
				} else{
					console.log("editar_put ==> FindById consultada com sucesso " + req.params.id);
					var model 	= data;
					model.nome 	= req.body.nome;
					model.login = req.body.login;
					model.save(function(err){
						console.log("### controllers/usuarios.js ==> #003 editar_put save");
						if (err){
							console.log('Erro no salvamento '+ err);
						} else {
							console.log("Usuario atualizado com sucesso ");
							req.flash('info', 'Usuario atualizado com sucesso ')
							req.flash('id', 'Id: ' + model.id)
							res.redirect('/usuarios');
						}
					})
				}
			});
		},
		visualizar: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 visualizar "  + app.mountpath);
			Usuario.findById(req.params.id, function(err,data){
				if (err){
					console.log('Erro no visualizar '+ err);
				} else{
					console.log("visualizar ==> FindById consultada com sucesso " + req.params.id);
					res.render('usuarios/visualizar', {value: data});
				}
			});
		},
		excluir_delete: function(req, res) {
			console.log("### controllers/usuarios.js ==> #003 excluir " + app.mountpath);
			Usuario.remove({ _id: req.params.id}, function(err){
				console.log("### controllers/usuarios.js ==> #003 excluir remove");
				if (err){
					console.log('Erro na exclusao '+ err);
				} else{
					console.log("Usuario excluido com sucesso");
					req.flash('info', 'Usuario excluido com sucesso')
					req.flash('id', 'Id: ' + req.params.id)
					res.redirect('/usuarios');
				}
			})
		}
	}
	console.log("### controllers/usuarios.js ==> #004");
	return UsuarioController;
}

console.log("### controllers/usuarios.js ==> #005");
console.log("### controllers/usuarios.js ==> FINAL ###");


