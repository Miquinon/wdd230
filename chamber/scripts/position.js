
const form = document.getElementById('join');
const input = document.getElementById('title');

form.addEventListener('submit', function(event) {
   
    event.preventDefault();
    
    const inputValue = input.value.trim();

    const regex = /^[a-zA-Z\- ]{7,}$/;

    if (regex.test(inputValue)) {
        
        form.submit();
    } else {
        
        alert('Input must be at least 7 characters long and contain only letters, hyphens, and spaces.');
    }
});
