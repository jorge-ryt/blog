
/**
 * Load header and footer HTML components into each page
 */
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '../pages/components/header.html');
    loadComponent('footer', '../pages/components/footer.html');
});

function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(id);
            if (container) {
                const tempArc = document.createElement('article');
                tempArc.innerHTML = data;

                while (tempArc.firstChild) {
                    container.appendChild(tempArc.firstChild);
                }
            }
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}