
//on button click
$("html").on("click", "#getGeneration", function(){

	//if year and month is entered
	if($("#yearInput").val() !== "" && $("#monthInput").val() !== ""){
		//get month of specfied year from api
		$.get("/api/"+$("#yearInput").val()+"/"+$("#monthInput").val(), function(data){
			$("#generationOutput").html(data)
		})

	} else if($("#yearInput").val() !== "") {

		//get year from api
		$.get("/api/"+$("#yearInput").val(), function(data){
			$("#generationOutput").html(data)
		})

	} else {
		$("#generationOutput").html("There was an error with that request, please try again")
	}
})