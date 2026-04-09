// 1. Your image names in the folder
const imageFiles = ['pic1.png', 'pic2.png', 'pic3.png']; 

const track = document.getElementById('slider-track');
const counter = document.getElementById('counter');
let index = 0;

// 2. Create the slides
function initGallery() {
    imageFiles.forEach(file => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        // Adjust the path to where your images are on GitHub
        slide.innerHTML = `<img src="images/${file}" alt="Manuscript">`;
        track.appendChild(slide);
    });
    updateCounter();
}

// 3. Slide Logic
function moveSlide(direction) {
    index += direction;
    
    // Boundary checks
    if (index >= imageFiles.length) index = 0;
    if (index < 0) index = imageFiles.length - 1;

    // Move the track by the width of the viewport
    const moveAmount = index * -90; // -90 because viewport is 90vw
    track.style.transform = `translateX(${moveAmount}vw)`;
    
    updateCounter();
}

function updateCounter() {
    let current = index + 1;
    let total = imageFiles.length;
    counter.innerText = `${current.toString().padStart(2, '0')} / ${total.toString().padStart(2, '0')}`;
}

initGallery();
