
// for navbar to make when you click any nav the bg will change 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navlinks ul a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});



// the button to scroll up 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// hamburger 

document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var navLinks = document.querySelector('.navlinks ul');

    // Toggle navigation links when hamburger menu is clicked
    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
