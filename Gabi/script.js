function createFallingItem() {
    const item = document.createElement('div');
    const randomChoice = Math.random() < 0.5 ? '❤️' : '🎁'; 
    item.classList.add('falling-item');
    item.innerHTML = randomChoice; 
    item.style.left = Math.random() * 100 + 'vw'; 
    item.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    document.body.appendChild(item);

    setTimeout(() => {
        item.remove(); 
    }, 5000);
}

setInterval(createFallingItem, 300);

const card = document.querySelector('.card');
const openGiftButton = document.querySelector('.open-gift-button');
const photoContainer = document.querySelector('.photo-container');
const photos = document.querySelectorAll('.photo');

let currentPhotoIndex = 0;
openGiftButton.addEventListener('click', () => {
    card.classList.toggle('is-flipped');

    if (card.classList.contains('is-flipped')) {
        startImageRotation();
    }
});

function startImageRotation() {

    photos.forEach(photo => photo.classList.remove('active'));
    photos[currentPhotoIndex].classList.add('active');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

    setTimeout(startImageRotation, 3000);
}