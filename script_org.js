document.getElementById("conver1").addEventListener('click', function show() {
    document.getElementById("conver1").style.display = "none";
    document.getElementById("conver2").style.visibility = "visible";
});

// validate Name  ==================>
function nameValid(name1) {
    if (name1 === "") {
        text = ("Your name must not be empty");
    }
    else{
        text = "";
    }
    document.getElementById("text_error").innerHTML = text;
}
// validate Email  ==================>
function mailValid(mail){
    console.log(pass);
    // let vm =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    if (mail === "") {
        text = ("Your email must not be empty");
    } else if(!mail.match(pattern)){
        text = ("Unvalid email");
    }
    else {
        text = "";
    }
    document.getElementById("email_error").innerHTML = text;
}
// validate Password  ==================>
function passValid(pass){
     console.log(pass);
     let pattern="/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/";
    if (pass === "") {
        text = ("Password must not be empty");
    } 
    else if(pass.length < 8){
        text = ("Password must not be 8 characters ");
    } 
    else if(!pattern == ""){
        text = ("Password must not at leas one of the following: [!, @, #, $, %, &, *].");
    }
    else {
        text = "";
    }
    document.getElementById("password_error").innerHTML = text;
}
document.getElementById("but").addEventListener('click', function() { 
    var name1 = document.getElementById("name1").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    nameValid(name1);
    mailValid(mail);
    passValid(pass);
});