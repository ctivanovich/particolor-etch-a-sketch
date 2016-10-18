$(document).ready(function(){
	gridMaker(prompt("initial dimensions?"));
	console.log("uh")
	$('button').click(function(){
		/*$('*td').removeClass('red');*/
		$('tr').remove();
		var dimensions = prompt("Please enter the dimensions of your sketchpad: ");
		gridMaker(dimensions);
		$('td').hover(function() {
			var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
			/*$(this).addClass('red');*/
			$(this).css("background-color", randomColor);		
		});
	});
	
	$('td').hover(function() {
		/*var randomColor = Math.floor(Math.random()*16777215).toString(16);*/
		/*$(this).addClass('red');*/
		$(this).css("background-color", randomColor);
	});

});
	
function gridMaker(grid_size){
	var i = 0;
	var j = 0;
	$('table').append("<tr class=0></tr>")
	while(i < Math.pow(grid_size,2) && j < grid_size){
		$("." + j).append("<td id = " +i+ "></td>");
		$('#'+i).css('width',1024/grid_size);
		$('#'+i).css('height',768/grid_size);
		i++;
		if(i%grid_size==0){
			j++;
			$('table').append("<tr class="+j+"></tr>");/*should id rows*/
			}
	}; /*while loop closure*/
};