(function($){

var ld = setTimeout(function(){
	if($("pre.code")!=="{{view}}"){
		$("pre.code").snippet("javascript",{style:"random",showNum:true});
		clearTimeout(ld);
	}
	
},100)

}(jQuery))