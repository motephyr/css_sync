
$(function(){
    $(".userBox").click(function(){
        $(this).find("ul.sub_menu").stop(true, true).fadeToggle(0);
    return false;
    });
    $(".icon_search").click(function(){
        $("#theSearchBox").stop(true, true).fadeToggle(0);
    return false;
    });
    $("a.closeBtn").click(function(){
        $(this).parent().parent().stop(true, true).fadeOut(0);
    return false;
    });
    $("a.menu_classify_01").click(function(){
    	$("#classify_02, #classify_03").stop(true, true).fadeOut(0);
        $("#classify_01").stop(true, true).fadeToggle(0);
    return false;
    });
    $("a.menu_classify_02").click(function(){
    	$("#classify_01, #classify_03").stop(true, true).fadeOut(0);
        $("#classify_02").stop(true, true).fadeToggle(0);
    return false;
    });
    $("a.menu_classify_03").click(function(){
    	$("#classify_01, #classify_02").stop(true, true).fadeOut(0);
        $("#classify_03").stop(true, true).fadeToggle(0);
    return false;
    });

});

