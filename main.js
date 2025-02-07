  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Check if the link's URL matches the current URL
        if (link.href === currentUrl) {
            link.classList.add('active'); // Highlight the current page
        }
    });
});



