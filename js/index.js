document.getElementById('menu-icon').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior

    const navbar = document.querySelector('ul.navbarr');
    
    // Toggle the 'activated' class
    navbar.classList.toggle('activated');
});





