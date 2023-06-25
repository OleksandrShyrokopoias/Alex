



const menuBtn = document.querySelector('.button-menu');
const menu = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-list-active');
});


new WOW().init();


function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;

    document.getElementById('progress-line').style.width = scrolled + '%';
}

window.addEventListener('scroll', progressBar);


const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('active'));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }));
 