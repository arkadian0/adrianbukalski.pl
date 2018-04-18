

function getText(numer){
	var ourTable = ['Name', 'Email','Subject' ,'Message'];
	var val;
	if(numer==3)
	{
	val = document.getElementById("message").value;
	}
	else 
	{
		val = document.forms['formularze'].elements[numer].value;
	}
	
	if(ourTable[numer] == val){
		if(numer==3)
		{
			document.getElementById("message").value = "";
		}else{
	document.forms['formularze'].elements[numer].value= "";
	}
}
}
function getText2(numer)
{
	
	var ourTable = ['Name', 'Email','Subject' ,'Message'];
	var val;
	if(numer==3)
	{
	val = document.getElementById("message").value;
	}
	else 
	{
		val = document.forms['formularze'].elements[numer].value;
	}
	
	if(val=="" && numer ==3)
{
	document.getElementById("message").value = ourTable[numer];
	
}
 if(val=="" && numer !=3)
 {
document.forms['formularze'].elements[numer].value=ourTable[numer];
 }
}