document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        interests: Array.from(document.getElementById('interests').selectedOptions).map(option => option.value)
    };

    
    console.log('Registration data:', formData);
    alert('Registration successful!');
    this.reset();
});