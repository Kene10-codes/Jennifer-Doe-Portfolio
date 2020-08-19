let errors = {};
let flag;

showNavBar = () => {
    let topNav = document.getElementById("myTopNav");
    if (topNav.className === "topNavBar") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topNavBar";
    }
}

const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const comment = document.getElementById("comment");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    checkFormInputs();
    
    flag = isEmpty(errors);
    if(flag){
        alert('Sent')
    }else{
        alert('Not Sent')
    }
})

checkFormInputs = () => {
    errors = {};
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const commentValue = comment.value.trim();

    //set error
    //add error message
    if(fullNameValue == "") {
        setErrorFor(fullName, "Name cannot be empty");
        error.fullName = "Input fullName";
    } else {
        setSuccessFor(fullName);
    }

    if(emailValue == "") {
        setErrorFor(email, "Email cannot be empty");
        error.fullName = "Input Email";
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid!");
        error.fullName = "Input valid email";
    } else {
        setSuccessFor(email)
    }

    if(subjectValue == "") {
        setErrorFor(subject, "Subject cannot be empty");
        error.fullName = "Input Subject";
    } else {
        setSuccessFor(subject);
    } 

    if(commentValue == "") {
        setErrorFor(comment, "Comment section cannot be empty");
        error.fullName = "Input Comment";
    } else {
        setSuccessFor(comment);
    }
    //show popup
}

setErrorFor = (input, message) => {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector("small");
    //add error message inside smaa
    small.innerHTML = message;
    formControl.className = "form-control error";
}

setSuccessFor = (input) => {
    const formControl = input.parentElement; //.form-control
    formControl.className = "form-control success";
}


//check correct format
isEmail = (email) => {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Function to check if object is empty
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}