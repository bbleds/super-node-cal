
//on button click
$("html").on("click", "#getGeneration", function(){

	//if year and month is entered
		//parseInt and check range for both as validation (will not pass with wrong range or letters included, etc)
	if(parseInt($("#yearInput").val()) >= 1753 && parseInt($("#yearInput").val()) <= 9999 && parseInt($("#monthInput").val()) >= 1 && parseInt($("#monthInput").val()) <= 12)
	{
		//get month of specfied year from api
		$.get("/api/"+$("#yearInput").val()+"/"+$("#monthInput").val(), function(data){
			$("#generationOutput").html(data)
		})

	}
	//if month doesn't pass or isn't entered
	else if(parseInt($("#yearInput").val()) >= 1753 && parseInt($("#yearInput").val()) <= 9999)
	{
		//get month of specfied year from api
		$.get("/api/"+$("#yearInput").val(), function(data){
			$("#generationOutput").html(data)
		})
	}
	else
	{
		$("#generationOutput").html("There was an error with that request, please try again")
	}
})