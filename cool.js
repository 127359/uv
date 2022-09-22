var password = "schoolsucks";

function passcheck() {
    
if(document.getElementById('pass1').value != password) {
alert('Wrong Password!, Try Again!');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct!');    
} 
}
