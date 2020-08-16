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


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkFormInputs();

})

checkFormInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const commentValue = comment.value.trim();

    //set error
    //add error message
    if(fullNameValue == "") {
        setErrorFor(fullName, "Name cannot be empty");
    } else {
        setSuccessFor(fullName);
    }

    if(emailValue == "") {
        setErrorFor(email, "Email cannot be empty");

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid!");

    } else {
        setSuccessFor(email)
    }

    if(subjectValue == "") {
        setErrorFor(subject, "Subject cannot be empty");

    } else {
        setSuccessFor(subject);
    } 

    if(commentValue == "") {
        setErrorFor(comment, "Comment section cannot be empty");
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