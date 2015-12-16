var generateRowCounter = 0; 

$(document).ready(function(){
	$('#container').append('<button class="generate">Generate Row</button>');
	var $el = $('#container');
	$el.on('click', '.generate', generateRow);
	$el.on('click', '.delete', deleteRow);
	$el.on('click', '.change', changeColor);

});

function generateRow() {
	generateRowCounter++;
	$(this).parent().append('<div class="newContainer"></div>');
	var $el = $(this).parent().children().last();
	$el.append('<p>' + generateRowCounter + '</p>');
	$el.append('<button class="delete">Delete</button>');
	$el.append('<button class="change">Change</button>');
}

function deleteRow(){
	$(this).parent().remove();
}

function changeColor(){
	var $el = $(this).parent();

	if ($el.hasClass('red-row')) {
		$el.removeClass('red-row');
	} else {
		$el.addClass('red-row');
	}
}