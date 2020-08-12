

	// Show Result JavaScript

function show_hide() {
var x = document.getElementById("result_display");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "block";
	}
}

function hide_display() {
var x = document.getElementById("result_display_proposal");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function show_hide_new_criteria() {
var x = document.getElementById("result_display_new_criteria");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

	// Contact Us Form JavaScript

function openForm() {
  	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  	document.getElementById("myForm").style.display = "none";
}


	// Range Slider JavaScript 

$( function() {
	$( "#slider-range1" ).slider({
	range: true,
	min: 0,
	max: 100,
	values: [ 40, 60 ],
	slide: function( event, ui ) {
		$( "#amount1" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
		}
	});
		$( "#amount1" ).val( "" + $( "#slider-range1" ).slider( "values", 0 ) +
		    " -- " + $( "#slider-range1" ).slider( "values", 1 ) );

	$( "#slider-range2" ).slider({
	range: true,
	min: 0,
	max: 100,
	values: [ 40, 60  ],
	slide: function( event, ui ) {
		$( "#amount2" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
		}
	});
		$( "#amount2" ).val( "" + $( "#slider-range2" ).slider( "values", 0 ) +
		    " -- " + $( "#slider-range2" ).slider( "values", 1 ) );

	$( "#slider-range3" ).slider({
	range: true,
	min: 0,
	max: 100,
	values: [ 40, 60 ],
	slide: function( event, ui ) { 
		$( "#amount3" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
		}
	});
		$( "#amount3" ).val( "" + $( "#slider-range3" ).slider( "values", 0 ) +
		   " -- " + $( "#slider-range3" ).slider( "values", 1 ) );

	$( "#slider-range4" ).slider({
	range: true,
	min: 0,
	max: 100,
	values: [ 40, 60  ],
	slide: function( event, ui ) {
		$( "#amount4" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
		}
	});
		$( "#amount4" ).val( "" + $( "#slider-range4" ).slider( "values", 0 ) +
		   " -- " + $( "#slider-range4" ).slider( "values", 1 ) );
});

$( "form" ).submit(function( event ) {
  	console.log( $( this ).serializeArray() );
  	event.preventDefault();
  	$('form').trigger("reset");
});


