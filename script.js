
// Build a browser form which collects Email, Country, Zip Code, Password and Password Confirmation fields.
//  It should use live inline validation to inform the user whether a field is properly filled in or not.
//   That means highlighting a field red and providing a helpful error message until it has been filled in properly.
// The form doesn’t need to actually submit, but you should give an error message if the button 
// is pushed with any active errors or unfilled required fields. For the sake of this lesson, 
// make sure all of the validation occurs in the JavaScript file. If all is well and the form is “submitted”,
//  give the user a high five.
// Set up a blank HTML document
// Think about how you would set up the different form elements and their accompanying validators. 
// What objects and functions will you need? A few minutes of thought can save you from wasting an hour of coding. 
// The best thing you can do is whiteboard the entire solution before even touching the computer.
// Write the simple form elements.
// Add the JavaScript code that checks validation as the user progresses through the form. 
// When a user leaves a form field, it should automatically validate that field.
// Test out all possible cases.
// Don’t forget to style validations with CSS by using the :valid and :invalid pseudo-classes!



const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan',
    'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
    'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
    'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands',
    'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar',
    'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
    'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman',
    'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar',
    'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts & Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden',
    'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Turks & Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay',
    'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const email = document.getElementById("email")
  const form = document.querySelector("form");

  email.addEventListener("focusout", (event)=>{
    // let regExEmailTest = /^\S+@\S+\.\S+$/ //basic check
    // if (regExEmailTest.test(email.value)){
    //   document.getElementById("email-message").innerText = "This is an e-mail address alright."
    // } else {
    //   document.getElementById("email-message").innerText = "Please enter a valid e-mail address."
    // }

    let validMessage = "This is an e-mail address alright."
    let invalidMessage = "Please enter a valid e-mail address."

    applyValidationToFormElement("email-div", validateEmail, validMessage, invalidMessage)
  })
  
  form.addEventListener("submit", (event) => {
    console.log("submit")
    event.preventDefault();

  });

  function validateEmail(text){
    let regExEmailTest = /^\S+@\S+\.\S+$/ //basic check
    if (regExEmailTest.test(text)){
      return true
    } else {
      return false
    }
  }

  function applyValidationToFormElement(divId, validationFunction, validMessage, invalidMessage){
    let div = document.getElementById(divId)
    let inputFieldValue = div.getElementsByTagName('input')[0].value
    let message = div.getElementsByClassName('message')[0]

    if (validationFunction(inputFieldValue)){
      message.innerText = validMessage
    } else {
      message.innerText = invalidMessage
    }
  }

  applyValidationToFormElement("email-div")

  /*
generic plan for all fields:
  grab div
  for input field check validity - have a function for each type
  grab message element - the only span in the div
  display appropriate message - define within the event listener adding of each field (check if this will work as expected)
  mark the appropriate elements with correct classes - message red or green, field valid or invalid (&also red or green)



  function 1: apply correct stylings to
  */
