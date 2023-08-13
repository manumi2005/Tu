// Function to add the entered data to the summary table
function AddData() {

  // Get the input values
  var fullName = document.getElementById("fullName").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var email = document.getElementById("email").value;
  var gender = document.getElementById("gender").value;

  document.getElementById("fullNameSummary").textContent = fullName;
  document.getElementById("mobileNumberSummary").textContent = mobileNumber;
  document.getElementById("emailSummary").textContent = email;
  document.getElementById("genderSummary").textContent = gender;

  // Store the data in local storage
  var userDetails = {
    fullName: fullName,
    mobileNumber: mobileNumber,
    email: email,
    gender: gender,
  };
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  // Enable the continue button if the user details are complete
  var continueBtn = document.getElementById("continueBtn");
  continueBtn.disabled = !isUserDataComplete(userDetails);
}

// Function to check if user details are complete
function isUserDataComplete(userDetails) {
  return (
    userDetails.fullName &&
    userDetails.mobileNumber &&
    userDetails.email &&
    userDetails.gender
  );
}





