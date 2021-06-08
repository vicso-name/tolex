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

$('.mileage-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
});

$('.inner-mileage-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

function inner_mileage_slider(){

    let innerMileageSlideItem = document.querySelectorAll('.inner-mileage__item');
    
    function selectItem(e) {
        removeActiveClass();
        this.classList.add('active');
    }
    
    function removeActiveClass(){
        innerMileageSlideItem.forEach(item=>{
            item.classList.remove('active');
        });
    }

    innerMileageSlideItem.forEach(item => {
        item.addEventListener('click', selectItem);
    });
}

inner_mileage_slider()

//Product Category

const carretDown = document.querySelectorAll('.carret');
const cathContentItems = document.querySelectorAll('.category-wrapp');

function rollCatItem(e){

    const cathContent = document.querySelector(`#${this.id}-content`);
    cathContent.classList.toggle('remove');
    this.classList.toggle('active');
}


carretDown.forEach(item=>{
    item.addEventListener('click', rollCatItem)
})

//Fixing Detalisation

const detailingRepairBtn = document.querySelectorAll('.detailing-repair-btn');
const tabContents = document.querySelectorAll('.tab-content');

function detailingTabs(e){
    const detailingTabItem = document.querySelector(`#${this.id}-content`);
    removeTabActive();
    removeContentShow();
    detailingTabItem.classList.add('active');
    this.classList.add('active');
}

function removeContentShow() {
	tabContents.forEach(item => {
		item.classList.remove('active');
	});
}

function removeTabActive() {
	detailingRepairBtn.forEach(item => {
		item.classList.remove('active');
	});
}

detailingRepairBtn.forEach(item=>{
    item.addEventListener('click', detailingTabs)
})

//Parts and Services

const sepContentTab = document.querySelectorAll('.sep-content__tab');
const sepContentItems = document.querySelectorAll('.sep-content-item');

function sepContentTabActivator(){
    sepContentremoveTabActive();
    sepContentItemActive();
    const sepContentItem = document.querySelector(`#${this.id}-content`);
    sepContentItem.classList.add('active');
    this.classList.add('active');
}

function sepContentremoveTabActive() {
	sepContentTab.forEach(item => {
		item.classList.remove('active');
	});
}

function sepContentItemActive() {
    sepContentItems.forEach(item=>{
        item.classList.remove('active');
    })
}

sepContentTab.forEach(item=>{
    item.addEventListener('click', sepContentTabActivator)
})

let itm = document.getElementById("category-1-content");
let test = itm.cloneNode(true);
document.getElementById("tete").appendChild(test);