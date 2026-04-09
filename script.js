// 1. Setup your image list
// Add your filenames here manually as they are uploaded to GitHub
const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg'
];

let currentIndex = 0;
const carouselDiv = document.getElementById('carousel');
const counterDiv = document.getElementById('counter');

// 2. Function to update display
function updateDisplay() {
    const imgPath = `images/${images[currentIndex]}`; // Assumes images are in a folder named 'images'
    carouselDiv.innerHTML = `<img src="${imgPath}" alt="Manuscript ${currentIndex + 1}">`;
    counterDiv.innerText = `${currentIndex + 1} / ${images.length}`;
}

// 3. Navigation logic
function moveSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to start
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to end
    }
    
    updateDisplay();
}

// Initialize
updateDisplay();
