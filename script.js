// Smooth scroll for all links that start with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
console.log("FlutterFind loaded! ✅");
async function loadSpecies() {
    const response = await fetch('species.json');
    const data = await response.json();
    const list = document.querySelector('#species ul');
    data.forEach(species => {
        const li = document.createElement('li');
        li.textContent = `${species.emoji} ${species.name} – ${species.desc}`;
        list.appendChild(li);
    });
}
loadSpecies();
function addFavorite(name) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
