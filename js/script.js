window.onload = function(){
       renderTable();
	 init();
}
function showMenu(){
	//Get Games variables from navigation menu 
      var games = document.getElementById("lastOption"),
	    subDrop = document.getElementById("subGames"),
          arrow = document.getElementById('uni-arr');
      //Display sub menu on mouseover of games option in menu
	games.addEventListener("mouseover", function(){
		subDrop.style.display = "block";
            arrow.innerHTML = '&#9660;';
	});
	games.addEventListener("mouseout", function(){
		subDrop.style.display = "none";
            arrow.innerHTML = '&#9654;';
	});	
}
var accElements = new Array();
var buttonItems = new Array();
var paragraphItems = new Array();
function init() {
      // Get the containers of each div and p
      var containers = document.getElementsByClassName('accordionItem'), 
          accButtons = document.getElementsByClassName('aButton'), 
          accParagraph = document.getElementsByClassName('aParagraph');
      //Place all elements into the respective arrays
      for ( var i = 0; i < containers.length; i++ ) {
            accElements.push(containers[i]);
            buttonItems.push(accButtons[i]);
            paragraphItems.push(accParagraph[i]);
            buttonItems[i].onclick = toggle; // Assign onclick toggle events
      }    
      //Hide all accordion item bodies
      for ( var i = 0; i < accElements.length; i++ ) {
        accElements[i].className = 'accordionItem hide';
      }
    }
function toggle() {      
      var buttonClass = this.parentNode.className;    
      // Hide all items
      for ( var i = 0; i < accElements.length; i++ ) {
        accElements[i].className = "accordionItem hide";
      }
      // Show this item if it was previously hidden
      if ( buttonClass == "accordionItem hide" ) {
        this.parentNode.className = "accordionItem";
      }
}
