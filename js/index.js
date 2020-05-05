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

// ----------------- resize begins -----------------
window.addEventListener('resize', (event) => {
    console.log(`Height: ${event.target.innerHeight}`);
    console.log(`Width: ${event.target.innerWidth}`);
});
// ----------------- resize ends -----------------

// ----------------- drag and dragend begin -----------------
const body = document.body;
body.addEventListener('drag', event => {
    event.target.style.opacity = '0%';
});
body.addEventListener('dragend', event => {
    event.target.style.opacity = '100%';
});
// ----------------- drag and dragend end -----------------

// ----------------- Prevent links from going to href -----------------
document.querySelectorAll('nav a').forEach(x => x.addEventListener('click', event => {
    event.preventDefault();
}));

// .stopPropagation()

const destinationDiv = document.querySelector('.destination');
destinationDiv.addEventListener('click', event => {
    console.log(event.target);
    console.log(event.currentTarget);
    // Paragraph is inside div so div also gets logged
});

destinationDiv.querySelector('p').addEventListener('click', event => {
    // Paragraph inside div stops the bubble
    // h4 will still show because it wasnt selected
    console.log('stopPropagation activated try clicking h4 instead');
    event.stopPropagation();
});