/* 
    Name: Pamintuan, Eljan Joel Y.
          WD - 201
          ShopOhBeauty
          October 28, 2023 - November 17, 2023


    Reference: https://developer.mozilla.org/en-US/
               https://www.w3schools.com/
               https://www.geeksforgeeks.org/
               https://youtu.be/W6NZfCO5SIk?si=ADEbYYTfanLAiQ-B
               https://stackoverflow.com/
               https://www.instagram.com/
*/


/*Note: This is for menu toggle animation*/ 
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.classList.add("active");
}
function hideMenu() {
    navLinks.classList.remove("active");
}


/*Note: This is for website smooth transition when clicking navLinks*/ 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (clickLinks) {
        clickLinks.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});


/*Note: This is for scroll to top button*/ 
 let button = document.getElementById("scrollButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/*Note: This is for Contact Info and Mode of Payment*/
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form-grid");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      if (validateForm()) {
          displaySubmissionMessage();
      }
  });

  function validateForm() {
      var fields = document.querySelectorAll(".form-grid input, .form-grid textarea");
      var isValid = true;

      fields.forEach(function (field) {
          if (field.value.trim() === "") {
              isValid = false;
              window.alert("Please fill the form");
          }
      });

      return isValid;
  }

  function displaySubmissionMessage() {
      var submissionMessage = "Information submitted";
      var isConfirmed = window.confirm(submissionMessage + "\nPress OK to exit.");

      if (isConfirmed) {
          document.querySelector(".form-grid").reset();
      }
  }
});

