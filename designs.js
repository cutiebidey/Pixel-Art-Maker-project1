var canvas, height, sizePicker, width, color;

$("#sizePicker").on('click', function(event){
	  event.preventDefault();
	    height = $('#inputHeight').val();
		width = $('#inputWeight').val();
	    makeGrid(width, height);
	});

	function makeGrid(x, y) {
   canvas = $("#pixelCanvas");
		$("tr").remove();
		for(var w = 1; w <= x; w++){
	  		canvas.append('<tr id=table'+w+'> </tr>');
		for(var h = 1; h <= y; h++){
	 		 $("#table" + w).append("<td></td");
	    }
	}
	$("td").click(function addColor(){
		 color = $("#colorPicker").val();
		if($(this).attr("style")){
		 $(this).removeAttr("style");	
	  } else{
		$(this).css("background-color", color);
	}
	
		});
};