const projectsData = [
    {
        id: 1,
        title: "Disaster Information Management System",
        shortDescription: "Sistem manajemen informasi bencana menggunakan algoritma K-Nearest Neighbor.",
        fullDescription: "Sistem ini dirancang untuk mengelola informasi terkait bencana, termasuk pengumpulan data, analisis, dan penyebaran informasi kepada masyarakat. Menggunakan algoritma K-Nearest Neighbor untuk memberikan rekomendasi dan informasi yang relevan.",
        image: "img/BG-Project-1.jpg", // Update with the actual image path
        techStack: "Python, Flask, SQL, K-Nearest Neighbor Algorithm",
        features: "Pengumpulan Data, Analisis Data, Rekomendasi, Penyebaran Informasi",
        role: "Full-stack Developer - Bertanggung jawab untuk pengembangan frontend dan backend, serta integrasi algoritma.",
        demoLink: "floodcast.html", // Update with the actual demo link if available
        githubLink: "#" // Update with the actual GitHub link if available
    },
    {
        id: 2,
        title: "Geographic Information System Website",
        shortDescription: "Website sistem informasi geografis untuk membantu tim SAR dalam pencarian orang hilang.",
        fullDescription: "Website ini dirancang untuk membantu tim SAR dalam mencari orang hilang di area hutan. Menggunakan peta interaktif dan data geografis untuk memberikan informasi yang akurat dan real-time.",
        image: "img/BG-Project-2.jpg", // Update with the actual image path
        techStack: "HTML, CSS, JavaScript, Leaflet.js",
        features: "Peta Interaktif, Pencarian Lokasi, Data Geografis, Informasi Real-time",
        role: "Frontend Developer - Mengimplementasikan UI/UX design dan fitur peta interaktif.",
        demoLink: "#", // Update with the actual demo link if available
        githubLink: "#" // Update with the actual GitHub link if available
    },
    {
        id: 3,
        title: "SUPPLY CHAIN MANAGEMENT SYSTEM",
        shortDescription: "Aplikasi Supply Chain Manajemen berbasis Android.",
        fullDescription: "Aplikasi manajemen rantai pasokan berbasis Android untuk PT Garuda Food dirancang untuk mempermudah pemeliharaan peralatan dan melacak inventaris secara efisien.",
        image: "img/BG-Project-3.jpg", // Update with the actual image path
        techStack: "Kotlin, MySQL",
        features: "Equipment Inventory Tracking, Real-time status updates, Automated reporting system",
        role: "Administrator",
        demoLink: "#", // Update with the actual demo link if available
        githubLink: "#" // Update with the actual GitHub link if available
    }
];
    
    // Modal functionality
    const modal = document.getElementById('projectModal');
    const modalClose = modal.querySelector('.modal-close');
    const body = document.body;
    
    // Update project cards to include data-id
    document.querySelectorAll('.project-card','.project-detail').forEach((card, index) => {
        card.setAttribute('data-id', projectsData[index].id);
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            showProjectModal(projectId);
        });
    });
    
    function showProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
    
        // Update modal content
        modal.querySelector('.modal-image').src = project.image;
        modal.querySelector('.modal-title').textContent = project.title;
        modal.querySelector('.modal-description').textContent = project.fullDescription;
        modal.querySelector('.tech-stack').textContent = project.techStack;
        modal.querySelector('.features').textContent = project.features;
        modal.querySelector('.role').textContent = project.role;
        modal.querySelector('.demo-link').href = project.demoLink;
        modal.querySelector('.github-link').href = project.githubLink;
    
        // Show modal
        modal.classList.add('active');
        body.classList.add('modal-open');
    }
    
    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    function closeModal() {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
