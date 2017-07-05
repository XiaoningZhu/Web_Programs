$(document).ready(function(){
  // display the tabs by plugin					
					  
  $("a.new_window").attr("target", "_blank");
  
  $(".faded").faded({
  		speed: 500,
		crossfade: true,
		autopagination:false
  });
  
});
