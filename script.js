$(document).ready(function(){

	var xList = ["a","b","c","d","e"];
	var yList = ["1","2","3","4","5"];
	var clickCounter = 0;
	var level = 1;

	var invert = function(id) {
		$(id).attr('checked') ? $(id).attr('checked', false): $(id).attr('checked', true); 
	}

	var loadLevel = function(level) {
		$.ajax({
			url : 'stage.php?level='+level,
			fail: function(error){
				alert("Loading fails")
			},
			success: function(data) {
				var array = data.split(',');
				console.log(array);
				var arrSize = array.length;
				for(var i = 0; i < arrSize; i++){
					$("#"+array[i]).attr('checked', true);
				}
			}
		})
	}

	loadLevel(level);

	$('#stageChangeBtn').click(function(){
		$('<div/>', {
			id: "hideWrapper",
			style:"display: none;"
		}).appendTo($('body'));
		$('<div/>', {
			id: 'alertBox',
			style: "display: none; top: 150px; left: 200px; "
		}).append($('<div/>', {
			id: 'alertContents'
		}).append($('<a/>', {
			href: '#',
			id: 'closeWrapper',
			// html: 'if test fails',
			style: ""
		}).append($('<i/>', {'class': 'closeBtn'})))).appendTo($('body'));
		var topPos = parseInt($('#hideWrapper').css('height')) - parseInt($('#alertBox').css('height'));
		var leftPos = parseInt($('#hideWrapper').css('width')) - parseInt($('#alertBox').css('width'));
		$('#alertContents').append($('<p/>', { html : "height :: "+topPos+":"+leftPos }));
		$('#alertBox').css('top', topPos/2);
		$('#alertBox').css('left', leftPos/2);
		$('#hideWrapper').fadeIn('fast', function(){
			$('#alertBox').slideDown('slow');
		});
		$('#closeWrapper').click(function(){
			$('#alertBox').slideUp('slow', function(){
				$('#alertBox').remove();
				$('#hideWrapper').fadeOut('fast', function(){
					$('#hideWrapper').remove();
				});
			});
		})
	});

	$('input').change(function(){
		var id;
		var position = $(this).attr('rel');
		var xPos = position.charAt(0);
		var yPos = position.charAt(1);
		clickCounter++;
		// alert("("+xPos+", "+yPos+")");
		var xIndx = xList.indexOf(xPos);
		var yIndx = yList.indexOf(yPos.toString());
		// alert("("+xIndx+", "+yIndx+")");
		// for left
		if(xIndx!=0) {
			id = "#" + xList[xIndx-1] + yList[yIndx];
			invert(id);
		}
		// for right
		if(xIndx!=4) {
			id = "#" + xList[xIndx+1] + yList[yIndx];
			invert(id);
		}
		// for up
		if(yIndx!=0) {
			id = "#" + xList[xIndx] + yList[yIndx-1];
			invert(id);
		}
		// for up
		if(yIndx!=4) {
			id = "#" + xList[xIndx] + yList[yIndx+1];
			invert(id);
		}

		// Check and update status
		var nodes = $('input');
		var totalNode   = (nodes).length;
		var checkedNode = 0;
		for(i = 0; i < totalNode; i++) {if($(nodes[i]).attr('checked')) { checkedNode++;}}
		var str = "checked "+checkedNode+"/"+totalNode+" node -- Game finished up to "+(parseInt(checkedNode)/parseInt(totalNode)*100) + "% in "+clickCounter+" Clicks";
		$('#status').html(str);

		// Check winning 
		if(checkedNode==totalNode) {
			$('#result').html("You win in "+clickCounter+" Clicks");
			$('#result').css('color','red');
			$('input').each(function(){
				$(this).attr('disabled', 'disabled');
			});
		}
	});
});