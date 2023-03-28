var formData=document.getElementById('form');
formData.addEventListener('submit',function(event){
    event.preventDefault();
	
var Sname=event.target.Sname;
var Fname=event.target.Fname;
var email=event.target.email;
var date=event.target.date;
var gender=event.target.gender;
var Mname=event.target.Mname;
var password=event.target.password;
var errorText=document.querySelector('.errorText');

if(Sname.value==""){
    Sname.classList.add('error');
    errorText.style.display="block";
    Sname.classList.replace('success','error');
   
}else{
    Sname.classList.replace('error','success');
    errorText.style.display="none";
	
}

  if(Mname.value==""){
    Mname.classList.add('error');
    Mname.classList.replace('success','error');

}else{
    Mname.classList.replace('error','success');
}

  if(gender.value==""){
   gender.classList.add('error');
   gender.classList.replace('success','error');

}else{
    gender.classList.replace('error','success');
}

  if(date.value==""){
   date.classList.add('error');
  date.classList.replace('success','error');

}else{
    date.classList.replace('error','success');
}

if(Fname.value==""){
    Fname.classList.add('error');
    Fname.classList.replace('success','error');

}else{
    Fname.classList.replace('error','success');
}
if(email.value==""){
    email.classList.add('error');
    email.classList.replace('success','error');

}else{
    email.classList.replace('error','success');
}
if(password.value==""){
    password.classList.add('error');
    password.classList.replace('success','error');

}else{
    password.classList.replace('error','success');
}
})