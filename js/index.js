// Your code goes here

// ----------------- mouseover & mouseout begin -----------------
const links = document.querySelectorAll('a');
links.forEach(x => x.addEventListener('mouseover', event => {
    event.target.style.animation = 'fade 1s infinite';
}));
links.forEach(x => x.addEventListener('mouseout', event => {
    event.target.style.animation = 'none';
}));
// ----------------- mouseover & mouseout end -----------------


// ----------------- keydown & keyup begin -----------------
const paragraphs = document.querySelectorAll('p');
window.addEventListener('keydown', event => {
    if(event.keyCode === 27){
        paragraphs.forEach(x => x.style.animation = 'rainbow 5s infinite');
    }
});
window.addEventListener('keyup', event => {
    if(event.keyCode === 27){
        paragraphs.forEach(x => x.style.animation = 'none');
    }
});
// ----------------- keydown & keyup end -----------------


// ----------------- dblclick begins -----------------
const images = document.querySelectorAll('img');
let blur = false;
images.forEach(x => x.addEventListener('dblclick', event => {
    blur = !blur;
    if(blur){
        event.target.style.filter = 'blur(4px)';
    }
    if(!blur){
        event.target.style.filter = 'none';
    }
}));
// ----------------- dblclick ends -----------------

// ----------------- click begins -----------------
const signUpBtn = document.querySelectorAll('.btn');
signUpBtn.forEach(x => x.addEventListener('click', event => {
    event.target.remove();
}));
// ----------------- click ends -----------------

// ----------------- scroll begins -----------------
window.addEventListener('scroll', () => {
    console.log('scrolled');
})
// ----------------- scroll ends -----------------