// src/scripts/descargaPases.js
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar/ocultar pases
    const toggleButton = document.getElementById('togglePases');
    const qrContainer = document.getElementById('qrContainer');

    if (toggleButton && qrContainer) {
        toggleButton.addEventListener('click', () => {
            qrContainer.classList.toggle('hidden');
            qrContainer.classList.toggle('grid'); // Ensure 'grid' is toggled
            toggleButton.textContent = qrContainer.classList.contains('hidden')
                ? 'Mostrar pases'
                : 'Ocultar pases';
            toggleButton.classList.toggle('bg-darkgold'); // Assuming you want this
        });
    }

    // Modal para QR grande
    const openModal = (qrSrc) => {
        const modal = document.getElementById('qrModal');
        const modalImg = document.getElementById('modalImage');

        if (modal && modalImg) {
            modalImg.src = qrSrc;
            modal.style.display = 'flex'; // Use style.display for initial visibility
            document.body.classList.add('overflow-hidden');
        }
    };

    const closeModal = () => {
        const modal = document.getElementById('qrModal');
        if (modal) {
            modal.style.display = 'none'; // Use style.display
            document.body.classList.remove('overflow-hidden');
        }
    };

    // Event listeners for QR images (using event delegation)
    if(qrContainer){
        qrContainer.addEventListener('click', (event) => {
            if (event.target instanceof HTMLImageElement && event.target.closest('.qr-card')) {
                openModal(event.target.src);
            }
        });
    }


    // Event listener for close button
    const closeModalButton = document.getElementById('closeModal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Event listener for modal background click (to close)
    const qrModalElement = document.getElementById('qrModal');
    if (qrModalElement) {
        qrModalElement.addEventListener('click', (e) => {
            if (e.target === qrModalElement) {
                closeModal();
            }
        });
    }
});