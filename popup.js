	var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
	
	document.addEventListener( 'wpcf7submit', function( event ) {
  if ( '366' == event.detail.contactFormId ) {
//     alert( "Thank you for your message." );
    // do something productive
    modal.style.display = "block";
  }
}, false );
	
	span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
