// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.trim();
    
    if (searchValue === '') {
        alert('Por favor, digite algo para buscar');
        return;
    }
    
    // Here you would implement the actual search logic
    // For now, we'll just show an alert
    console.log('Buscando por:', searchValue);
    alert(`Buscando por: ${searchValue}`);
    
    // In a real application, you might redirect to a search results page
    // window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSearch();
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// Form validation function (can be used for contact forms, etc.)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example contact form handler (to be used with contact.php)
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || name.length < 2) {
        alert('Por favor, insira um nome válido');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido');
        return false;
    }
    
    if (!message || message.length < 10) {
        alert('Por favor, insira uma mensagem com pelo menos 10 caracteres');
        return false;
    }
    
    // Send data to PHP backend
    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar mensagem: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Tente novamente.');
    });
    
    return false;
}
