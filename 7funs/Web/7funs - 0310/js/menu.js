//點到出現
 $(function () {

     $(".DBox_xx").hover(function () {
         $(this).find(".bk-Box").stop(true, true).fadeIn();
     }, function () {
         $(this).find(".bk-Box").stop(true, true).fadeOut();
     })
     return false; 
});

//帳號點選出現

$(function () {
     $("#id_tool").click(function () {
         $("#tools").toggle();
	})
     $("#MenuMain01").click(function () {
         $("#Sub_M01").slideToggle();
	})
	$("#MenuMain02").click(function () {
         $("#Sub_M02").slideToggle();
	})
	$("#MenuMain03").click(function () {
         $("#Sub_M03").slideToggle();
	})
	$("#MenuMain04").click(function () {
         $("#Sub_M04").slideToggle();
	})
	$("#MenuMain05").click(function () {
         $("#Sub_M05").slideToggle();
	})
	$("#MenuMain06").click(function () {
         $("#Sub_M06").slideToggle();
	})
	$("#MenuMain07").click(function () {
         $("#Sub_M07").slideToggle();
	})
	$("#MenuMain08").click(function () {
         $("#Sub_M08").slideToggle();
	})
	$("#MenuMain09").click(function () {
         $("#Sub_M09").slideToggle();
	})
	$("#MenuMain10").click(function () {
         $("#Sub_M10").slideToggle();
	})
	$("#MenuMain11").click(function () {
         $("#Sub_M11").slideToggle();
	})
     return false;  	 
});