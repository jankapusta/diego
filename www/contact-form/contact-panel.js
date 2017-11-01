// JavaScript Document

// contact form panel
$(document).ready(function() {
	$("div.panel-button").click(function(){
		$("div#panel").show("slow");
		$("div.panel-button").toggle();
	
	});	
	
   $("div#close-button").click(function(){
		$("div#panel").hide("fast");
		
	
   });
});

