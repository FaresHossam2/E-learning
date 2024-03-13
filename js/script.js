//navbar

$(document).ready(function () {
    
    $("#bar").click(function() {
       
        $("nav ul").css("right", " -100px");

       
    });
    $("#close").click(function() {
       
        $("nav ul").css("right", " -3000px");


    });
    $("li").click(function() {
       
        $("nav ul").css("right", " -3000px");


    });

    });

    //reviews
    $(document).ready(function () {
        var currentIndex = 1;
    
        function showContent(index) {
            $("#rev-content1, #rev-content2, #rev-content3").hide();
            $("#s1, #s2, #s3").css("background-color", "aliceblue");
    
            $("#rev-content" + index).show();
            $("#s" + index).css("background-color", "rgb(132, 0, 255)");
        }
    
        function changeContent() {
            currentIndex = (currentIndex % 3) + 1;
            showContent(currentIndex);
        }
    
        // Initial setup
        showContent(currentIndex);
    
        // Auto change every 3 seconds
        setInterval(changeContent, 3000);
    
        // Click events
        $("#s1").click(function () {
            currentIndex = 1;
            showContent(currentIndex);
        });
    
        $("#s2").click(function () {
            currentIndex = 2;
            showContent(currentIndex);
        });
    
        $("#s3").click(function () {
            currentIndex = 3;
            showContent(currentIndex);
        });
    });
    


//payment
function redirectToPaymentPage() {
    window.location.href = "payment.html";
}

function formatInput(input) {
  // Remove non-numeric characters from the input value
  var value = input.value.replace(/\D/g, '');
  
  // Format the value with spaces after every 4 digits
  var formattedValue = '';
  for (var i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' '; // Add a space after every 4th digit
    }
    formattedValue += value[i];
  }
  
  // Truncate the value to 16 digits
  formattedValue = formattedValue.substr(0, 19);
  
  // Update the input value
  input.value = formattedValue;
}
  document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var startFreeTrialLink = document.querySelector('.free a');
    var checkOutLink = document.querySelector('a[href=""]');
    var closeButton = document.querySelector('.close-button');
    var successMessage = document.querySelector('.success-message');
    var successCard = document.querySelector('.success-card');
  
    // Add a click event listener to the "Start Free Trial" link
    startFreeTrialLink.addEventListener('click', function (event) {
      // Prevent the default link behavior (following the href)
      event.preventDefault();
  
      // Show the success message
      successMessage.style.display = 'block';
    });
  
    // Add a click event listener to the "Check Out" link
    checkOutLink.addEventListener('click', function (event) {
      // Prevent the default link behavior (following the href)
      event.preventDefault();

      // Show the success card for successful payment
      successCard.style.display = 'block';

    });
       // Add a click event listener to the "Check Out" link
       closeButton.addEventListener('click', function (event) {
        // Prevent the default link behavior (following the href)
        event.closeSuccessCard();
  
        // Show the success card for successful payment
  
      });
  });
  


//validate
function validateForm() {
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // Check if the password length is at least 6 characters
    if (newPassword.length < 6) {
        alert("Password should be at least 6 characters long!");
        return false; // Prevent form submission
    }

    // If all validation passed, allow form submission
    return true;
}



 