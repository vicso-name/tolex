new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: false
});

let sideBar = document.querySelector('.aside');
let contentWrapper = document.querySelector('.header-wrapper');

if(sideBar && contentWrapper !== null){
    window.addEventListener('load', function(){
        sideBar.classList.add('active');
        contentWrapper.classList.add('active');
    });
}
