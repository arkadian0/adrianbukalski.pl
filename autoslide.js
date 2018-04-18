var pierwszePrzejscie = 0; //// ustawiam zeby funkcja carosuel startowalo od pierwszego slajdu
var idxslid = 0;

carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
	if(pierwszePrzejscie==0)
	{
		pierwszePrzejscie=1;
	}else{
    global++;
	}
    if (global > x.length) {global = 1} 
	for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
	dots[global-1].className += " active";
    x[global-1].style.display = "block"; 
	
    setTimeout(carousel, 10000); 
}
