function validate() {
	/* Get data for validation */
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var date = $('#date').val();
	
	/* Throw error if any are empty */
    if(name === "" || email === "" || phone === "" || date === "") {
		alert("All fields are required!");
		return false;
    }
   
	if (!validateEmail(email)) /* Post to footer if validation succeeds */ {
		alert("Email Address is not valid.");
		return false;
	}
	if (!validatePhone(phone)) /* Post to footer if validation succeeds */ {
		alert("Phone number is not valid.")
		return false;
	}
	if(!validateDate(date)) /* Post to footer if validation succeeds */ {
		alert("Date is not valid.");
		return false;
	}
	
	/* Display to footer */
	$("#resultName").text("Name: " + name);
	$("#resultEmail").text("Email Address: " + email);
	$("#resultPhone").text("Phone Number: " + phone);
	$("#resultDate").text("Date: " + date);
	
    return true;
}

function validateEmail(email) /* Return valid email */ {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validatePhone(phone) /* Return valid phone */ {
	var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	return re.test(phone);
}

function validateDate(date) /* Return valid date */ {
	var re = /^\d{4}-\d{2}-\d{2}$/;
	if(!date.match(re)) 
		return false;
	var newDate = new Date(date);
	if(!newDate.getTime()) 
		return false;
	return newDate.toISOString().slice(0,10) === date;
}