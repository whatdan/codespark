var fs=require("fs");
//index.html
exports.index=function(req,res){
	res.render("index");
}

exports.upload=function(req,res){
	res.render("upload");
}
exports.file_upload=function(req, res){
	var files=req.files;
	console.log(files.file.name);
	fs.rename(files.file.path, 'uploads\\'+files.file.name, function(){

	})
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write(files.file.name);
	res.end();
}

// exports.index=function(req,res){
// 	res.render("index");
// }

// exports.index=function(req,res){
// 	res.render("index");
// }

// exports.index=function(req,res){
// 	res.render("index");
// }

// exports.index=function(req,res){
// 	res.render("index");
// }
