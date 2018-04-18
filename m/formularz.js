

function getText(numer){
	var ourTable = ['Name', 'Your Email','Subject' ,'Message'];

		var val = document.forms['formularze'].elements[numer].value;
	
	if(ourTable[numer] == val){
		
	document.forms['formularze'].elements[numer].value= "";
	}
}

function getText2(numer)
{
	
	var ourTable = ['Name', 'Your Email','Subject' ,'Message'];
	
	var	val = document.forms['formularze'].elements[numer].value;

	
	if(val=="")
{
document.forms['formularze'].elements[numer].value=ourTable[numer];
 }
}