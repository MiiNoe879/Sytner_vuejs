$(document).ready(function () {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		afterResponsive: function (isResponsive) {},
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#menu',
		onLeave: function (index, nextIndex, direction) {
			if (deleteLog) {
				$('#callbacksDiv').html('');
			}
			$('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
			console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " + direction);
		},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (deleteLog) {
				$('#callbacksDiv').html('');
			}
			$('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + " index:" + index + " slideIndex:" + slideIndex + " direction:" + direction + " nextSlideIndex:" + nextSlideIndex + '</p>');
			console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
		},
		afterRender: function () {
			$('#callbacksDiv').append('<p>afterRender</p>');
			console.log("afterRender");
		},
		afterResize: function () {
			$('#callbacksDiv').append('<p>afterResize</p>');
			console.log("afterResize");
		},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			$('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor + " slideIndex:" + slideIndex + '</p>');
			deleteLog = true;
			console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
			console.log("----------------");
		},
		afterLoad: function (anchorLink, index) {
			console.log("after Load  " + index);
			$('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
			deleteLog = true;
			console.log('===============');
			console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index);
		}
	});
});
