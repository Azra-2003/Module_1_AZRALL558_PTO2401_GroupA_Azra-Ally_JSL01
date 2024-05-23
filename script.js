function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const pattern = /^pet_[a-zA-Z0-9]+$/;

    // Check if input matches the pattern
    if (pattern.test(input)) {
        result = "Valid Syntax 🟢";
    } else {
        result = "Invalid Syntax.🔴 Please check if input starts with 'pet_' and followed by alphanumeric characters";
    }
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


