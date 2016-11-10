$(document).ready(function(){
	// $(".lists tr").click(function(){
	// 	$(".lists tr").css("backgroundColor", "#fff");
	// 	$(this).css("backgroundColor", "#f5e6a3");
	// });
	// $(".lists tr").mouseenter(function() {
	// 	if(("rgb(245, 230, 163)" != $(this).css("backgroundColor")) && ("rgb(248, 238, 192)" != $(this).css("backgroundColor"))) $(this).css("backgroundColor", "#f5f5f5");
	// 	else $(this).css("backgroundColor", "#f5e6a3");
	// });
	// $(".lists tr").mouseleave(function() {
	// 	if(("rgb(245, 230, 163)" != $(this).css("backgroundColor")) && ("rgb(248, 238, 192)" != $(this).css("backgroundColor"))) $(this).css("backgroundColor", "#fff");
	// 	else $(this).css("backgroundColor", "#f8eec0");
	// });
	$(".star").mouseenter(function() {
		$(this).get(0).className = 'fa fa-star star';
	});
	$(".star").mouseleave(function() {
		$(this).get(0).className = 'fa fa-star-o star';
	});
	$(".btn-select").click(function() {
		$(".btn-select").css({"background":"#fff", "color": "#333"});
		$(this).css({"background":"#f57373", "color": "#fff"});
	});

	$(".btn-select").mouseenter(function() {
		if("rgb(255, 255, 255)" == $(this).css("backgroundColor")) $(this).css({"background":"#f57374", "color": "#fff"});
	});
	$(".btn-select").mouseleave(function() {
		if("rgb(245, 115, 115)" != $(this).css("backgroundColor")) $(this).css({"background":"#fff", "color": "#333"});
	});
});