// Your code goes here
// hover fade animation added to all links

// ----------------- mouseover begins -----------------
const links = document.querySelectorAll('a');
links.forEach(x => x.addEventListener('mouseover', event => {
    x.style.animation = 'fade 1s infinite';
}));
links.forEach(x => x.addEventListener('mouseout', event => {
    x.style.animation = 'none';
}));
// ----------------- mouseover ends -----------------