// JavaScript Document


// YTPlayer
    $(function(){
      $(".player").mb_YTPlayer();
    });
	
	
// content slider
function show(n){
	vis_elem = $('#slide-'+n).css('');
	if(vis_elem=='block') return;
	else{
		var rndCls = $(".slide").slideUp('slow');
		$("#slide-"+n).find('.slide').slideDown();
		$('#slide-'+n).slideDown('slow', function(){
		var height = $('#slide-'+n).css('height');
		height = height.split('px');
		height = (Number(height[0])+77)+'px';
		});
		
if(n=='section1'){
return
}

else if(n=='section2'){
return
}

else if(n=='section3'){
return
}

else if(n=='section4'){
return
}

else if(n=='section5'){
return
}

else if(n=='section6'){
return
}

else if(n=='section7'){
return
}

else {
return
}


	}
}

function closeSlide(n){
	var rndCls = $(".slide").slideUp('fast', function(){
	});
}


// smartTab
   $(document).ready(function(){
      
	  $('#tabs').smartTab({
	  selected: 0,                     // Selected Tab, 0 = first step
      keyNavigation: true,             // Enable/Disable key navigation
      autoProgress: false,             // Auto navigate tabs on interval
      progressInterval: 3500,          // Auto navigate Interval
      stopOnFocus: false,              // Stops autoProgress on mouse hover and restarts when not
      transitionEffect: 'fade',        // Effect on navigation, none/fade/slide
      tabContainerClass: 'stContainer' // Tab container css class name
		
		}); 
	  
   });


// jCarousel
jQuery(document).ready(function() {
	jQuery('#mycarousel, #mycarousel-1-1, #mycarousel-3, #mycarousel-3-1, #mycarousel-4, #mycarousel-4-1, #mycarousel-5, #mycarousel-5-1, #mycarousel-6, #mycarousel-7').jcarousel();
});


// news ticker
    $(function () {
        $('#js-news').ticker();
    });


// prettyPhoto
		$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({
	            animation_speed: 'slow',        /* fast/slow/normal */
				padding: 40,                    /* padding for each side of the picture */
				opacity: 0.75,                  /* Value betwee 0 and 1 */
				showTitle: true,                /* true/false */
				allowresize: true,              /* true/false */
				counter_separator_label: ' | ', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'light_square',          /* light_rounded / dark_rounded / light_square / dark_square */
				callback: function(){}
			});
		});


// rollover
$(function() {
// OPACITY OF BUTTON SET TO 0%
$(".roll-news, .roll-team, .roll-photos, .roll-videos").css("opacity","0");
 
// ON MOUSE OVER
$(".roll-news, .roll-team, .roll-photos, .roll-videos").hover(function () {
 
// SET OPACITY TO 70%
$(this).stop().animate({
opacity: .7
}, "slow");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0
}, "slow");
});
});


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: "loading"
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-30px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})


// extras
$(document).ready(initializeExtras);

function initializeExtras()
{		
	var height = "-" + ($("#text-extras").height())/2 + "px";

	$("#text-extras").css("margin-top", height);
	
	$("#line-extras").bind("click", displayExtras);
	
	$("#text-extras .extras-closer a").click(function()
	{
		$("#extras").animate({marginTop : "-100%"}, 500, 'linear');
		return false;
	});
	
	$(".extras-closer a").click(function()
	{
		window.location.hash = "#";
	})
}

function displayExtras()
{
	$("#extras").css("display","block");
	
	$("#extras").animate({marginTop : 0}, 500, 'linear');

	var height = "-" + ($("#text-extras").height())/2 + "px";

	$("#text-extras").css("margin-top", height);	
}


// credits
$(document).ready(initializeCredits);

function initializeCredits()
{		

	
	$("#line-credits").bind("click", displayCredits);
	
	$("#text-credits .credits-closer a").click(function()
	{
		$("#credits").hide("slow");
		return false;
	});
	
	$(".credits-closer a").click(function()
	{
		window.location.hash = "#";
	})
}

function displayCredits()
{
    $("#credits").show("slow");
    var height = "-" + ($("#text-credits").height())/2 + "px";

    $("#text-credits").css("margin-top", height);
}


// social media team
// Author: Marco Kuiper || http://www.marcofolio.net/

$(document).ready(function()
{
	// hide tooltips
	$("#social-team-member-1 li, #social-team-member-2 li, #social-team-member-3 li, #social-team-member-4 li").each(function() {
		$("a strong", this).css("opacity", "0");
	});
	
	$("#social-team-member-1 li, #social-team-member-2 li, #social-team-member-3 li, #social-team-member-4 li").hover(function() { // mouse over
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 0.2);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 1,
				top: "-10px"
			}, 300);
		
	}, function() { // mouse out
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 1);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 0,
				top: "-1px"
			}, 300);
	});
});