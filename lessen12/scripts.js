const navTabs = document.querySelector(".nav-tabs");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const infoBlocks = document.querySelectorAll(".info-item");

navTabs.addEventListener('click', (event) => {
    if (event.target.matches('.nav-link')) {
        navLinks.forEach(item => {
            item.classList.remove('active');
        })
        event.target.classList.add('active');
        const index = navLinks.indexOf(event.target);

        infoBlocks.forEach(item => {
            item.classList.remove('active');

        })
        infoBlocks[index].classList.add('active');
    }


})