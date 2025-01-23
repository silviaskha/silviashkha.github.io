// Menambahkan event listener untuk setiap link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Menghapus kelas 'active' dari semua link
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Menambahkan kelas 'active' pada link yang diklik
        this.classList.add('active');
    });
});


let currentImageIndex = 0;
const images = [
    "/Portofolio/Floodcast/assets/web- (1).png",
    "/Portofolio/Floodcast/assets/web- (1).png",
    "/Portofolio/Floodcast/assets/web- (2).png",
    "/Portofolio/Floodcast/assets/web- (3).png",
    "/Portofolio/Floodcast/assets/web- (4).png",
    "/Portofolio/Floodcast/assets/web- (5).png",
    "/Portofolio/Floodcast/assets/web- (6).png",
    "/Portofolio/Floodcast/assets/web- (7).png",
    "/Portofolio/Floodcast/assets/web- (8).png"
];

function openModal(index) {
    currentImageIndex = index;
    document.getElementById("modalImage").src = images[currentImageIndex];
    document.getElementById("imageModal").style.display = "flex"; // change display to flex
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop to first image
    }
    document.getElementById("modalImage").src = images[currentImageIndex];
}

// Close modal when clicking outside the image
const modal = document.getElementById("imageModal");
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});