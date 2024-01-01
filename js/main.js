const mobile = document.querySelector('.mobile');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', function () {
    mobile.classList.toggle('active');
    hamburger.classList.toggle('active');
})

document.addEventListener('click', function (event) {
    const target = event.target;
    if (!mobile.contains(target) && !hamburger.contains(target)) {
        mobile.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

//  slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});


// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});