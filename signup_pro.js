function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email");
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.{8,}).*$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, start with a capital letter, and contain at least one special character.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    } 

    return true;
}

function validateMobileNumber() {
    const mobileNumber = document.getElementById("mobile_number").value;
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobileNumber)) {
        alert("Invalid Mobile Number");
        return false;
    }
    return true;
}

function validateForm() {
    if (validateEmail() && validatePassword() && validateMobileNumber()) {
        window.location.href = "login_pro.html"; 
        return false; // prevent form submission on server.
    }
    return false;
}


