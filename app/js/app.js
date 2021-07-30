/*** comphort waiting section***/

let slider = tns({
    container: '.waiting-slider',
    items: 1,
    loop: true,
    speed: 400,
    mouseDrag: true,
    nav:false,
    slideBy: 'page',
    autoplay: false,
    controlsContainer: "#customize-controls",
    
  });

/*** comphort waiting section END***/

const teamItems = document.querySelectorAll('.team-item');
const teamContentItems = document.querySelectorAll('.team-content-item');

function selectTeam(e){
    removeTeamTabActive()
    removeTeamContentActive()
    this.classList.add('active');
    const teamContentItem = document.querySelector(`#${this.id}-content`);
	teamContentItem.classList.add('show');
}

function removeTeamTabActive() {
	teamItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeTeamContentActive() {
	teamContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

teamItems.forEach(item => {
	item.addEventListener('click', selectTeam);
});

$('.mosfilm-team-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:true
})

$('.sushevka-team-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:true
})

$('.taganka-team-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:true
})

const licensesItems = document.querySelectorAll('.licenses-tab-item');
const licensesContentItems = document.querySelectorAll('.licenses-content-item');

function selectlicenses(e){
    removeLicensesTabActive()
    removeLicensesContentActive()
    this.classList.add('active');
    const licensesContentItem = document.querySelector(`#${this.id}-content`);
	licensesContentItem.classList.add('show');
}

function removeLicensesTabActive() {
	licensesItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeLicensesContentActive() {
	licensesContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

licensesItems.forEach(item => {
	item.addEventListener('click', selectlicenses);
});

$('.google-owl__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.youtube-owl__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.prado-owl__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.lexus-owl__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.yandex-owl__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

const reviewItems = document.querySelectorAll('.review-tab-item');
const reviewContentItems = document.querySelectorAll('.review-content-item');

function selectReview(e){
    removereviewTabActive()
    removeReviewContentActive()
    this.classList.add('active');
    const reviewContentItem = document.querySelector(`#${this.id}-content`);
	reviewContentItem.classList.add('show');
}

function removereviewTabActive() {
	reviewItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeReviewContentActive() {
	reviewContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

reviewItems.forEach(item => {
	item.addEventListener('click', selectReview);
});


$('.waiting-comfort__slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:true
})

/*** Map Tabs ***/
const mapItems = document.querySelectorAll('.map-item');
const mapContentItems = document.querySelectorAll('.map-content-item');

function selectmap(e){
    removemapTabActive()
    removemapContentActive()
    this.classList.add('active');
    const mapContentItem = document.querySelector(`#${this.id}-content`);
	mapContentItem.classList.add('show');
}

function removemapTabActive() {
	mapItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removemapContentActive() {
	mapContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

mapItems.forEach(item => {
	item.addEventListener('click', selectmap);
});
/*** Map Tabs END***/

/*** Mobile Menu Opener***/
let humburger = document.querySelector('.humburger');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuCloser = document.querySelector('.mobile-menu-closer');

if(humburger !== null){
    humburger.addEventListener('click', function(){
        mobileMenu.classList.add('active')
    })
}

if(mobileMenuCloser !== null){
    mobileMenuCloser.addEventListener('click', function(){
        mobileMenu.classList.remove('active')
    })
}

/*** Mobile Menu  END***/

/*** Input Mask ***/
let inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
  "mask": "+7(999) 999-999-99",
  showMaskOnHover: false
}).mask(inputsTel);

/*** Input Mask END ***/

/*** First time sale ***/
    let firstTimeLabel = document.querySelector('.first-time__label');
    let totalSaleWrapper = document.querySelector('.total-sale-wrapper')
    if(firstTimeLabel !== null){
        firstTimeLabel.addEventListener('click', function(){
            totalSaleWrapper.classList.toggle('active')
        })
    }
/*** First time sale END***/

/*** Cart PopUp ***/

const cartBtn = document.getElementById('cart-btn');
const carModal = document.querySelector('.cart-body');
const getOrder = document.getElementById('get_order');

if(getOrder!==null){
    getOrder.addEventListener('click', function(){
        carModal.classList.toggle('show');   
   })
}

const popups = [...document.getElementsByClassName('cart')];

window.addEventListener('click', ({ target }) => {
    const popup = target.closest('.cart');
    const toOrder = target.closest('.get_order');
    const clickedOnClosedPopup = popup && !popup.classList.contains('show');
    popups.forEach(p => p.classList.remove('show'));
    if (clickedOnClosedPopup) popup.classList.add('show'); 
});

if(getOrder!==null){
    getOrder.addEventListener('click', function(){
        carModal.classList.toggle('show'); 
        
   })
}

/*** Cart PopUp END***/

/*** Body Repair Part Chooser ***/

let areaItem = document.querySelectorAll('.area-item');

$("body").on('click', 'area', function(event) {

    event.preventDefault();
    
    closeDetailPopup();
    var $this = $(this),
       id = $this.data('id'),
       parent = $this.closest('.calc__car-side'),
       name = $this.attr('title'),
       popup = $('.calc-detail-popup'),
       showPopup = false;
    var addwork = true;
    

       if ( parent.find('.calc__car-works--' +  id ).length ) {
          addwork = false;
          popup.append(parent.find('.calc__car-works--' +  id ));
          showPopup = true;
       }


    if ( showPopup ) {
         popup.css({left: event.pageX - 140,
         top: event.pageY}).slideDown(100);
    }
 });

 function closeDetailPopup() {
    var popup = $('.calc-detail-popup');
    popup.find('.calc__car-works').each(function() {
       $($(this).data('works-selector')).append($(this)); 
    });
    popup.slideUp(100);
 }
  
    
/*** Body Repair Part Chooser END ***/

/*** fullpage page function ***/

new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: false
});

/*** fullpage page function END***/


/**** Maphilight ****/

$(function($) {

    $('.image-map').maphilight();
    
});

/**** Maphilight END ****/

/*** sidebar ***/

let sideBar = document.querySelector('.aside');
let contentWrapper = document.querySelector('.header-wrapper');

if(sideBar && contentWrapper !== null){
    window.addEventListener('load', function(){
        sideBar.classList.add('active');
        contentWrapper.classList.add('active');
    });
}

/*** sidebar END ***/

/*** Datepicker **/

$( function() {
    $("#datepicker").datepicker({
        dateFormat: "dd.mm.yy"
    });
    $("#change-date").datepicker({
        dateFormat: "dd.mm.yy"
    });

});

( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {
		define( [ "../widgets/datepicker" ], factory );
	} else {
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";
datepicker.regional.ru = {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
	monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
	"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
	dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
	dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
	dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} );

/*** Datepicker END ***/

/*** Master Status ***/

let freeStatus = document.querySelectorAll('.master-status');

if( freeStatus !== null){

    freeStatus.forEach(item=>{

        item.addEventListener('mouseover', function(){
            let masterStatus = item.getAttribute('data-master-status');
           
            if(masterStatus == 'free'){
                let orderOn = item.getElementsByClassName('order-on')[0]
               orderOn.classList.add('active')
            }
        })
        item.addEventListener('mouseleave', function(){
            let orderOn = item.getElementsByClassName('order-on')[0]
            orderOn.classList.remove('active')
         })
    })
}

/*** Master Status END ***/

/*** Mileage sliders ***/

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
            items:3
        },
        600:{
            items:3
        },
        768:{
            items:5
        },

        1024:{
            items:6 
        },
        1150:{
            items:4  
        },
        1180:{
            items:4  
        },
        1200:{
            items:3
        },
        1300:{
            items:4
        },
        1600:{
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

/*** Mileage sliders END ***/

/*** Mileage-input ***/

let mileageInput = document.getElementById('mileage-input');
let mileageDrop = document.querySelector('.mileage-drop');
let mileageDropListItem = document.querySelectorAll('.mileage-drop__list-item');

if(mileageInput !== null){
    mileageInput.addEventListener('click', function(){
        mileageDrop.classList.toggle('active')
        this.classList.toggle('active')
    });
}

if(mileageDropListItem !== null){
    mileageDropListItem.forEach(item => {
        item.addEventListener('click', function(){
           let inputValue = item.getAttribute('data-mileage');
           mileageInput.innerHTML = inputValue + 'КМ';
           mileageInput.classList.remove('active');
           mileageDrop.classList.remove('active')
        })
    })
}

/*** Mileage-input END***/

/** Testimon windows **/

const openTestimModal = document.querySelector('.feedback-btn');
const closeTestimModal = document.querySelector('.close-testimonials');
const overModal = document.querySelector('#modal-overlay');
const testimonModal = document.querySelector('.testimonials-window');

if(openTestimModal !== null && closeTestimModal !== null && testimonModal !== null){
    
    closeTestimModal.addEventListener('click', function(){
        testimonModal.classList.toggle("closed");
        overModal.classList.toggle("closed");
    })

    openTestimModal.addEventListener('click', function(){
        testimonModal.classList.toggle("closed");
        overModal.classList.toggle("closed");
    })
}

/** Testimon windows END **/

/*** Sort Order ***/

let recordWrapp = document.querySelector('#record__items');
let recordItems = document.querySelectorAll('#record__items .grid-record-row');
let ascBtn = document.querySelector('.sort-asc');
let decsBtn = document.querySelector('.sort-dec');

function ascending(){

    let recordItemsArr = [...recordItems].sort(function(a, b){
        
        let cDate = a.dataset.date;
        let c = new Date(cDate);

        let dDate = b.dataset.date;
        let d = new Date(dDate)
        
        return c - d;
    })

    recordWrapp.innerHTML = '';

    for(let item of recordItemsArr ){
      recordWrapp.appendChild(item)
    } 
}

function descending(){

    let recordItemsArr = [...recordItems].sort(function(a, b){
        let cDate = a.dataset.date;
        let c = new Date(cDate);
        let dDate = b.dataset.date;
        let d = new Date(dDate)
        return d - c;
    })

    recordWrapp.innerHTML = '';

    for(let item of recordItemsArr ){
      recordWrapp.appendChild(item)
    }   
}

if(ascBtn !== null && decsBtn !== null){

    ascBtn.addEventListener('click', function(){
        ascending();
        this.classList.remove('active')
        decsBtn.classList.add('active')
    });

    decsBtn.addEventListener('click', function(){
        descending();
        this.classList.remove('active')
        ascBtn.classList.add('active')
    });
}

/*** Sort Order END ***/

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

const sepContentTabs = document.querySelectorAll('.sep-content__tab');
const sepContents = document.querySelectorAll('.sep-content-item');

function sepContentTabActivator(e){
    const sepContentItem = document.querySelector(`#${this.id}-content`);
    sepContentremoveTabActive();
    sepContentHideContent();
    sepContentItem.classList.add('active');
    this.classList.add('active');
}

function sepContentremoveTabActive() {
    sepContentTabs.forEach(item => {
        item.classList.remove('active');	
    }); 
}

function sepContentHideContent(){
    sepContents.forEach(item=>{
        item.classList.remove('active');
    })
}

sepContentTabs.forEach(item=>{
    item.addEventListener('click', sepContentTabActivator)
})

/*** Dublicate Content ***/

const categories = [];
const services = [];

const forward = document.getElementById("tab-2");

if(forward !== null ){

    forward.addEventListener("click", function () {
  
        const catContent = document.querySelectorAll(".category-wrapp");
      
        if (categories.length === 0) {

          catContent.forEach((item) => {
            const clonedContent = item.cloneNode(true);
      
            categories.push({
              element: item.parentElement,
              content: clonedContent
            });
      
            item.parentNode.removeChild(item);
            document.getElementById("separated-content-parts").appendChild(clonedContent);
          });

        }
      
        const servicesContent = document.querySelectorAll(".service-wrapp");
        console.log(servicesContent)
        if (services.length === 0) {
          
          servicesContent.forEach((item) => {
              const clonedContent = item.cloneNode(true);
      
              services.push({
                  element: item.parentElement,
                  content: clonedContent
              });
      
              item.parentNode.removeChild(item);
              document.getElementById("separated-service-parts").appendChild(clonedContent);
          });
        }
      
    });  
}

let back = document.getElementById("tab-1");
if(back !== null){
    back.addEventListener("click", function () {
        categories.forEach((category) => {
          category.element.appendChild(category.content);
        });
        categories.length = 0;
    
        services.forEach((service) => {
            service.element.prepend(service.content);
          });
        services.length = 0;
    
    });
}



/*** Показываем только выбраные сервисы/услуги ***/

const onlyChecked = document.getElementById('tab-3')

const checkedInputs = [];
const checkedParts = [];

if(onlyChecked !== null){

    onlyChecked.addEventListener('click', function(){

        const servicesContent = document.querySelectorAll(".service-wrapp");
        const  partscheckedContent = document.querySelectorAll(".category-wrapp");
        
        if(checkedInputs.length === 0){
     
             servicesContent.forEach(item=>{
                 
                 const servElement = item.querySelector('.service-input-item'); 
                 
                     if(servElement.checked == true){
     
                     const checkedContent = item.cloneNode(true);
     
                     checkedInputs.push({
                         element: item.parentElement,
                         content: checkedContent
                     });
     
                         item.parentNode.removeChild(item);
                         document.getElementById("onlychecked").appendChild(checkedContent);
                     }
             });
         }
     
         //if(checkedParts.length === 0){
             
             //partscheckedContent.forEach(item=>{
     
             //    const partElement = item.querySelectorAll('.parts-input'); 
             
             //    partElement.forEach(item=>{
     
             ///        if(item.checked == true){
     
             //            const checkedPartContent = item.cloneNode(true);
     
             //            checkedParts.push({
             //                element: item.parentElement,
             //                content: checkedPartContent
             ///            });
             //            item.parentNode.removeChild(item);
            //            document.getElementById("onlychecked").appendChild(checkedPartContent);
             //        }
             //    })
                 
            /// });
         //}
         
     });
}



const tester = document.getElementById('tab-2')
if(tester !== null){
    tester.addEventListener("click", function () {

        checkedInputs.forEach((item) => {
          item.element.append(item.content);
        });
    
    });
}

/*** Add new remont Item ***/

let addRemont = document.querySelector('.add-remont');
let newRem = document.getElementById('new-rem');

if(addRemont !== null){
    addRemont.addEventListener('click', function(){
        newRem.classList.toggle('active')
    })
}

let addTypeItem = document.querySelectorAll('.add-type__item');

if(addTypeItem !== null){
    addTypeItem.forEach(item=>{
        item.addEventListener('click', function(){
           let itemData = item.getAttribute('data-item-value') 
           newRem.classList.remove('active')
                     
        })
    })
}

/*** Calculator ***/

let tableOurInputCell = document.querySelectorAll('.table__our-input-cell');
if(tableOurInputCell !== null){
    tableOurInputCell.forEach(item=>{
        item.addEventListener('click', function(){
            removeActiveFromCell();
            let parrentElement = item.closest('.grid-table-row');
            parrentElement.classList.add('active');
        })
    })
}

let labelItem = document.querySelectorAll('.label-item');
if(labelItem !== null){
    labelItem.forEach(item=>{
        item.addEventListener('click', function(){
            removeActiveFromCell();
            let parrentElement = item.closest('.grid-table-row');
            parrentElement.classList.add('active');
        })
    })
}

let serviceInputItem = document.querySelectorAll('.service-input-item'); 
if(labelItem !== null){
    labelItem.forEach(item=>{
        console.log(item.checked);
      
        if(item.checked){
            
            item.classList.add('sjsjsjs')
        }
    })
}

function removeActiveFromCell() {
    let gridTableRow = document.querySelectorAll('.grid-table-row');
    if(gridTableRow !== null){
        gridTableRow.forEach(item=>{
            if(item.classList.contains('active')){
                item.classList.remove('active') 
            }
        })
    }
}




