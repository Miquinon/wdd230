// Select the form and the input field
const form = document.getElementById('join');
const input = document.getElementById('title');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the value of the input field
    const inputValue = input.value.trim();

    // Regular expression to match alpha characters, hyphens, and spaces with minimum length of 7
    const regex = /^[a-zA-Z\- ]{7,}$/;

    // Test if the input value matches the regex
    if (regex.test(inputValue)) {
        // If valid, submit the form (or perform desired action)
        form.submit();
    } else {
        // If invalid, show an error message or handle accordingly
        alert('Input must be at least 7 characters long and contain only letters, hyphens, and spaces.');
    }
});
