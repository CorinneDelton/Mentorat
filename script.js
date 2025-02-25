// Listen for changes on all accordion checkboxes
document.querySelectorAll('.accordion input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // When an item is opened, close all others
            document.querySelectorAll('.accordion input[type="checkbox"]').forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
    this.currentTime = 0.4; // Définir le début à 1 seconde
});
