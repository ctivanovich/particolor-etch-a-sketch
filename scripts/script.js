$(document).ready(function(){
	gridMaker(prompt("initial dimensions of your particolor-etch-a-sketc?"));
	$('body').css("height", getHeight()*.7);
	$('body').css("width", getWidth())*.8;
	$('button').click(function(){
		$('tr').remove();
		var dimensions = prompt("Please enter the dimensions of your next sketchpad: ");
		gridMaker(dimensions);
		});
	
});

function gridMaker(grid_size){
	if(!Number.isInteger(parseInt(grid_size)) || grid_size > 128){
		grid_size = prompt("Invalid entry. Please input a number between 0 and 128. Optimal " +
				"performance is between 48 and 64.");
	}
	var i = 0;
	var j = 0;
	$('table').append("<tr class=0></tr>")
	while(i < Math.pow(grid_size,2) && j < grid_size){
		$("." + j).append("<td id = " +i+ "></td>");
		$('#'+i).css('width',(getWidth()*.8)/grid_size);
		$('#'+i).css('height',(getHeight()*.7)/grid_size);
		i++;
		if(i%grid_size==0){
			j++;
			$('table').append("<tr class="+j+"></tr>");/*should id rows*/
			}
	}; /*while loop closure*/
	$("#pad").css("border", "2px blue dashed")
	$('td').hover(function() {
		var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background-color", randomColor);
	});
};

function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function getHeight() {
  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
}