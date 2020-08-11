showNavBar = () => {
     let topNav = document.getElementById("myTopNav");
    
    if (topNav.className === "topNavBar") {
        topNav.className += " responsive";

    } else {
        topNav.className = "topNavBar";
    }
}

