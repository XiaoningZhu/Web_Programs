

/*
	Everything is loaded including images.
*/
$(window).load(function(){
	
	
	adjustHeightOfPage(1); // Adjust page height

	/* Gallery One pop up
	-----------------------------------------*/
	$('.gallery-one').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery:{enabled:true}                
	});
	

	/*  after click list-item, get height again
	-----------------------------------------*/
	$('a.nav-link').click(function(){
		
		adjustHeightOfPage($(this).data("no")); // Adjust page height  
	});

	/* Browser resized 
	-----------------------------------------*/
	$( window ).resize(function() {
		var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
		
		// 
		setTimeout(function() {
			adjustHeightOfPage( currentPageNo );
		}, 1000);
		
	});

	// Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
	$('body').addClass('loaded');
	
	
	function adjustHeightOfPage(pageNo) {

		var offset = 80;
		var pageContentHeight = 0;

		var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");

		if( pageType != undefined && pageType == "gallery") {
			pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
		}
		else {
			pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height();
		}

		if($(window).width() >= 992) { offset = 120; }
		else if($(window).width() < 480) { offset = 40; }
	   
		// Get the page height
		var totalPageHeight = 15 + $('.cd-slider-nav').height()
								+ pageContentHeight + offset
								+ $('.tm-footer').height();
						
		// Adjust layout based on page height
		$('.cd-hero-slider').css( "height", totalPageHeight + "px" );

	}
			   
});
