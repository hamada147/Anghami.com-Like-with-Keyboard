/**
 * Detect when any of the keyboard buttons is pressed and based on the code implemented react
 * @key L: Like the playing Song
 * @param   {[event]} e description of the event including the pressed button
 * @author Ahmed Moussa <moussa.ahmed95@gmail.com>
 * @version 1.0
 */

window.onkeyup = function(e) {
	let key = e.keyCode ? e.keyCode : e.which;
	if (key == 76) { // L
		let like = document.getElementsByClassName("p-item action like")[0];
		// make sure that element does exist before dispatching the event
		if (like) {
            		let clickEvent = new MouseEvent("click", {
                		"view": window,
                		"bubbles": true,
                		"cancelable": false
            		});
            		like.dispatchEvent(clickEvent);
        	}
	}
};
