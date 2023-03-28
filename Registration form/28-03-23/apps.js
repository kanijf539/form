function validFunction(event){
	 // event.preventDefault();
var sname=document.getElementById('sname').value;	
var pass=document.getElementById('pass').value;	
if(sname==""){
	alert('This name field is required');
	// var snameborder=document.getElementById('sname');
	// snameborder.style.border="1px solid red";
// var snameError=document.getElementById('snameError');
// snameError.innerHTML="This name field is required";
}
if(pass==""){
		alert('This password field is required');
// var passError=document.getElementById('passError');
// passError.innerHTML="This password field is required";
}

}