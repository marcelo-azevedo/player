// $(document).ready(function(){
// 	$("#slide img:eq(0)").addClass("ativo").show();

// 	setInterval(slide,7000);

// 	function slide(){
// 		if($(".ativo").next().size()){
// 			$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
// 		}else{
// 			$(".ativo").fadeOut().removeClass("ativo");
// 			$("#slide img:eq(0)").fadeIn().addClass("ativo");
// 		}

// 	}
// });


// $(document).ready(function(){

	


// });


// $(document).ready(function(){

// 	$("#prev").on("click", function(){ 
// 		var img = $("#slide img:last").clone();
// 		$("#slide img:last").remove();
// 		$("#slide").prepend(img);
// 		$("#slide").css({'marginLeft':'-920px'});
// 		$("#slide").animate({'marginLeft':'0px'},500);
// 		return false;
// 	});

// 	$("#next").on("click", function(){
// 		$("#slide").animate({'marginLeft':'-920px'},500,function(){
// 			var img = $("#slide img:first").clone();
// 			$("#slide img:first").remove();
// 			$("#slide").append(img);
// 			$("#slide").css({'marginLeft':'0px'});
// 		});
// 		return false;
// 	});

// 	setInterval(function(){
// 		$("#slide").animate({'marginLeft':'-920'},500,function(){ 
// 			var img = $("#slide img:first").clone(); 
// 			$("#slide img:first").remove(); 
// 			$("#slide").append(img); 
// 			$("#slide").css({'marginLeft':'0px'}); 
// 		});
// 	},5000);


// });