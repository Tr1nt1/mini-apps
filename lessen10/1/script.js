const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup_content');
const popupClose = document.querySelector('.popup_close');

popupBtn.addEventListener('click', (event) => {
    popup.classList.add("opened");
})

popupClose.addEventListener('click', (event) => {
    popup.classList.remove("opened");
})

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove("opened");
    }
});

