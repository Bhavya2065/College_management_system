function validateEmail() {
    const email = document.getElementById("email_id").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email");
        return false;
    }
    return true;
}

function validatePassword(){
    const password = document.getElementById("loginPassword").value;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.{8,}).*$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, start with a capital letter, and contain at least one special character");
        return false;
    }
    return true;
}

function validateLoginForm() {
    if(validateEmail() && validatePassword()){
        window.location.href = "svnit_home.html"; 
        return false;
    }
    return false;
}
