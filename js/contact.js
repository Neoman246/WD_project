document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log('Contact form data:', formData);
    alert('Message sent successfully!');
    this.reset();
});