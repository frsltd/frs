function checkDemoForm() {
	name = document.getElementById("name").value;
	company = document.getElementById("company").value;
	email = document.getElementById("email").value;
	hideAllErrors()
	if (name == "")
	{
		document.getElementById("nameError").style.display = "inline";
		return false;
	}
	if (company == "")
	{
		document.getElementById("companyError").style.display = "inline";
		return false;
	}
	else if (email == "")
	{
		document.getElementById("emailError").style.display = "inline";
		return false;
	}

	if (!checkEmail(email))
	{
		document.getElementById("emailInvalid").style.display = "inline";
		return false;
	}
	return true;
}

function hideAllErrors() {
	document.getElementById("nameError").style.display = "none";
	document.getElementById("companyError").style.display = "none";
	document.getElementById("emailError").style.display = "none";
	document.getElementById("emailInvalid").style.display = "none";
}

function checkEmail(inputvalue) {
	var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return pattern.test(inputvalue);
} 