function validEmail(str) {
  //your JS code here.
	// Regular expression to validate email format
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
	 return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

// validEmail('abc@example.com') // returns true
// validEmail('xyz@abc.com.in') // returns true
// validEmail('john.doe@com.') // returns false
// validEmail('@example.com') // returns false
// validEmail('') // returns false
