// Filter certificates by category
function filterSelection(category) {
    const certificates = document.getElementsByClassName('certificate-item');
    if (category === 'all') {
        Array.from(certificates).forEach(cert => cert.style.display = 'block');
    } else {
        Array.from(certificates).forEach(cert => {
            cert.style.display = cert.classList.contains(category) ? 'block' : 'none';
        });
    }
}

// Lightbox functionality
function openLightbox(imgSrc, title, description) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-description').textContent = description;
}

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
});
