$( ".btn-info" ).click(function() {
	var source = $(".schedule")[0].valueAsDate;
	var source_time = source.getTime();
	$( ".btn-success" ).click(function() {
		var target = $(".scheduled")[0].valueAsDate;
		var required_time = target.getTime();
		var final = required_time - source_time;
		var days = (Math.round)(final / (1000*60*60*24));
	$( ".final" ).html(days+" days left.");
	});
});

$(".fa-check-square").click(function(event) {
	$( ".todo" ).toggleClass( "strike"); 
});

$(".fa-plus").click(function(event) {
$(".main").append('<div class="row">'+'<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">'+'<input type="text" name="" id="input" class="form-control todo" value="" required="required" pattern="" title=""></div>'+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><i class="fa fa-2x fa-check-square" aria-hidden="true"></i><i class="fa  fa-2x fa-plus" aria-hidden="true"></i></div>'+'</div>');
});