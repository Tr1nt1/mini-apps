const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup_content');
const popupClose = document.querySelector('.popup_close');

popupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popupBtn.classList.add("opened");
})

popupClose.addEventListener('click', (event) => {
    event.preventDefault();
    popupBtn.classList.remove("opened");
})

window.addEventListener('click', (event) => {
    event.preventDefault();
    event.target();
    popupBtn.classList.remove("opened");
});

