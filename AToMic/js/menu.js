$(function(){
	$("ul.menu li").hover(
		function(){
			$(this).find("ul.submenu").stop(true, true).fadeIn(500);	
		},
		function(){
			$(this).find("ul.submenu").stop(true, true).fadeOut(500);	
		});
	return false;
});	


/*Menu選到新增顏色*/
$(function(){
	$("ul.menu li").mouseover(function(){
		$(this).find("h3 a").removeClass().addClass("color01");
	})
	$("ul.menu li").mouseout(function(){
		$(this).find("h3 a").removeClass("color01");
	})	
	return false;
});

