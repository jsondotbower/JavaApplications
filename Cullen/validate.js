function validate()
{
	// Get data for fields
	var a = document.forms["form"]["name"].value;
	var b = document.forms["form"]["email"].value;
	var c = document.forms["form"]["phone"].value;
	var d = document.forms["form"]["date"].value;
    var valid = true;
				
	// Throw error if any are empty
    if(a == "" || b == "" || c == "" || d == "")
    {
		alert("All fields are required!");
		valid = false;
    }
	
	// Get data for validation
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var date = $("#date").val();	
	
	if (name != "") // Post to footer if not null
	{
		$("#resultName").text("Name: " + name);
	}
	if (validateEmail(email) || email != "") // Post to footer if validation succeeds
	{
		$("#resultEmail").text("Email Address: " + email);
	}
	if (validatePhone(phone) || phone != "") // Post to footer if validation succeeds
	{
		$("#resultPhone").text("Phone Number: " + phone);
	}
//	if(validateDate(date) || date != "") // Post to footer if validation succeeds
//	{
//		$("#resultDate").text(date);
//	}
    return valid;
}

function validateEmail(email) // Return valid email
{
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validatePhone(phone) // Return valid phone
{
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	return phoneno.test(phone);
}

function validateDate(date) // Return valid date
{
	var regEx = /^\d{4}-\d{2}-\d{2}$/;
	if(!dateString.match(regEx)) 
		return false;  // Invalid format
	var d = new Date(dateString);
	if(!d.getTime()) 
		return false; // Invalid date (or this could be epoch)
  return d.toISOString().slice(0,10) === dateString;
}

$("#submit").bind("click", validate);