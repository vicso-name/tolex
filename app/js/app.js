/*** Body Repair Part Chooser ***/

$("body").on('click', '#car area', function(event) {

    event.preventDefault();
    closeDetailPopup();

    let $this = $(this),
		id = $this.data('id'),
        name = $this.attr('title')
		parent = $this.closest('.body-repair__item'),
		popup = $('.calc-detail-popup'),  
		showPopup = false;
	let addwork = true;


    if(parent.find('.calc__car-works--' +  id ).length ) {
        addwork = false;
        popup.append(parent.find('.calc__car-works--' +  id ));
        showPopup = true;
    }

    if(showPopup){
        popup.css({left: event.pageX,
        top: event.pageY}).slideDown(100);
    }

    $(window).on('scroll', function(event) {
        closeDetailPopup();   
    });

    $("body").on('click', '.calc-detail-popup', function(event) {
        closeDetailPopup();
    });


 })

 function closeDetailPopup() {
    let popup = $('.calc-detail-popup');
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

/*** mileage sliders ***/

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

/*** mileage sliders END ***/

/*** mileage-input ***/

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
           mileageInput.innerHTML = inputValue;
           mileageInput.classList.remove('active');
           mileageDrop.classList.remove('active')
        })
    })
}

/*** mileage-input END***/

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

/*** Sort Order END***/

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






