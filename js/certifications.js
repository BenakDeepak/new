// Function to filter certificates
function filterSelection(category) {
    const items = document.querySelectorAll('.certification-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to open the lightbox
function openLightbox(imgSrc, title, description) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-description').innerText = description;
    document.getElementById('lightbox').style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Initialize all certificates to be visible
    filterSelection('all');
});
