document.addEventListener('DOMContentLoaded', () => {
    const imageUrlsTextArea = document.getElementById('image-urls');
    const addUrlsButton = document.getElementById('add-urls');
    const previewContainer = document.getElementById('preview-container');

    addUrlsButton.addEventListener('click', () => {
        const urls = imageUrlsTextArea.value
            .split(/[\n,]/)  // Split by new lines or commas
            .map(url => url.trim())
            .filter(url => url !== ''); // Remove any empty strings

        previewContainer.innerHTML = ''; // Clear previous previews

        urls.forEach(url => {
            const img = document.createElement('img');    
            img.src = url;
            img.alt = 'Image preview';
            img.onerror = () => {
                img.src = 'https://via.placeholder.com/150?text=Invalid+URL';
            };
            previewContainer.appendChild(img);
        });

        imageUrlsTextArea.value = '';
        imageUrlsTextArea.focus();
    });

    imageUrlsTextArea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Allow multi-line input with shift + enter
            e.preventDefault(); // Prevent default action (newline)
            addUrlsButton.click();
        }
    });
});
        

document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Navigating to ${this.href}`);
    });
});
