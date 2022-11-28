function switchForm(className, e) {
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach(item => {
        item.classList.remove('active');
    })
    form.classList.add('active');
}

/* Login Validation */


function loginfm() {
    var email = document.forms.loginForm.Email.value;
    var password = document.forms.loginForm.Password.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;                                       
     

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please fill up the form.");
        email.focus();
        return false;
    }
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;
    }
    
}

/* Sign Up Validation */


function signupfm() {
    var email = document.forms.loginForm.Email.value;
    var password = document.forms.loginForm.Password.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                                         
                                 

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please fill up the form.");
        email.focus();
        return false;
    }
   
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;
    }
    
}



  