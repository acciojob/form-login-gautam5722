function getFormvalue() {
    //Write your code here
	let firstName = document.getElementById("fname").value;
	let lastName = document.getElementById("lname").value;

	let msg = firstName + " " + lastName;
	alert(msg);

}
