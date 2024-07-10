const input = document.querySelector('.faund');
const pleer = document.querySelector('.pleer');
const form = document.querySelector('.headerForm');
const imgVideo = document.querySelector('.video');


const widgetMainWork = (id) => {
    pleer.innerHTML = '';
    pleer.insertAdjacentHTML("beforeend", `
<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
`)
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотврощает перезагрузку страницы
    if (input.value) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input.value}&type=video`)
            .then((response) => response.json())
            .then((data) => {
                const id = data.items[0].id.videoId
                widgetMainWork(id);
                widgetSideWork(data);
            })
    }
})

const widgetSideWork = (data) => {
    imgVideo.innerHTML = ''
    data.items.forEach(element => {
        imgVideo.insertAdjacentHTML("beforeend", `
            <img src="${element.snippet.thumbnails.default.url}" alt="">
            `)
    });
    document.querySelectorAll('.video img').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const itemMas = item.getAttribute('src').split('/')
            widgetMainWork(itemMas[4]);
            //достать предпоследний элемент 
        })
    })
}