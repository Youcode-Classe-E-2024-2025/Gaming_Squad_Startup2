const burgerIcon = document.getElementById('burger-icon') ;
const navbar = document.getElementById('navbar-default') ;
const welcomeSection = document.querySelector('section#welcome');
// welcome cart
const wlcmTitle = document.querySelector('section#welcome #wlcm-title');
const wlcmSousTitle = document.querySelector('section#welcome #wlcm-sous-title');
const wlcmImg = document.querySelector('section#welcome #wlcm-img');
const wlcmContent = document.querySelector('section#welcome #wlcm-content');

console.log(welcomeSection);
const wlcmData =[
    {
        id:0,
        img:'./assets/images/home_images/wallpaper-PS5-pro2.jpg',
        imgAlt:'image of ps5 console and manette',
        title:'PS5',
        sousTitle:'PLAY LIKE NEVER BEFORE',
        content:'experience faster load times with an ultra-fast SSD, deeper immersion with haptic feedback1 , audio1 , plus an exceptional catalog of PlayStation games',
    },
    {
        id:1,
        img:'./assets/images/home_images/wallpaper-manette-xbox.jpg',
        imgAlt:'image of Xbox  manette',
        title:'Xbox Series',
        sousTitle:'Limited Edition <br> Stellar Shift Controller Available',
        content:'travel in space with your new controller ',
    },
    {
        id:2,
        img:'./assets/images/home_images/offresWallpaper.jpg',
        imgAlt:'casque and keyboard and manette',
        title:' New Offres',
        sousTitle:'Discover new offres',
        content:' Level up your game with our epic new offers , gear, gadgets, and gaming goodness! ',
    },
]

// menu toggle
burgerIcon.addEventListener('click',()=> {navbar.classList.toggle('hidden')});



// function createCartWlcm(index){

//     const item= wlcmData[index]
//     const Div=document.createElement('div')
//     Div.className='p-10'
//     Div.innerHTML=` 
//     <div
//         class="max-w-[66.5rem] h-[36.25rem] mx-auto relative rounded-2xl overflow-hidden  bg-white   text-white">
//         <img src="${item.img}" alt="${item.imgAlt} "
//             class="bg-left object-cover w-full h-full rounded-2xl">
  
//         <div
//             class=" md:p-28 grid gap-4 items-center  grid-cols-2   absolute top-0 right-0 h-full w-full p-10 bg-gradient-to-r from-[#00000077] to-[#00000001]">
//             <h1 class=" col-start-1 row-start-4 self-end col-span-full  font-bold text-[2.5rem]">${item.title}</h1>
//             <p class="  col-start-1 row-start-5 col-span-full font-normal text-2xl">${item.sousTitle}</p>
//             <p class="md:pl-4  col-start-1 row-start-6 row-span-2 self-start col-span-full md:col-span-1">
//             ${item.content}
               
//             </p>
//             <button type="button"
//                 class="col-start-1  row-start-8 col-span-full px-4 py-2 w-fit rounded-lg border-2 border-white hover:bg-orange hover:scale-105  bg-dark ">more
//                 details </button>
//         </div>

//     </div>`
//     welcomeSection.innerHTML='';
//     welcomeSection.append(Div);
// }
fetch("./assets/data/data.json")
	.then((res) => res.json())
	.then((data) => {
		if (localStorage.getItem("products")) {
			products = JSON.parse(localStorage.getItem("products"));
		} else {
			products = data;
            localStorage.setItem("products", JSON.stringify(products));

		}
	
	})
	.catch((error) => console.error(error));



function replaceCartWlcm(index){

    const item= wlcmData[index]
     
     wlcmImg.style.opacity = '0';
     wlcmImg.style.transition = '0.5s';
     setTimeout(() => {
         wlcmImg.setAttribute('src', item.img);
         wlcmImg.setAttribute('alt', item.imgAlt);
         wlcmTitle.textContent=item.title;
         wlcmSousTitle.innerHTML=item.sousTitle;
         wlcmContent.textContent=item.content;
         wlcmImg.style.transition = '0.5s';

         wlcmImg.style.opacity = '1';
     }, 250);
}


function welcomeSectionHandler(){
    let i=1;
    
     setInterval(() => {
        replaceCartWlcm((i++)%3)
     }, 3000);
}
console.log(window.location.pathname);

// carousel best products 
const leftBnt =document.getElementById('left-carousel-btn');
const rightBnt =document.getElementById('right-carousel-btn');
const carouselContent=document.getElementById('carousel-content');
const carouselContainer=document.getElementById('carousel-container');
const item=document.querySelector('.cartCarousel');

console.log(' parent has child',carouselContainer.clientWidth);
// console.log(' child has item',carouselContent.clientWidth,"e",item.clientWidth*6+128*5, "rr",(item.clientWidth*6+128*5)/2 -128/2);
// console.log('  item',item.clientWidth);
console.log(Number.parseFloat(getComputedStyle(carouselContainer).width));

// const gap= (carouselContainer.clientWidth-(item.clientWidth*3))/2 
// console.log('sssssss', window.clientWidth);
// console.log('gap',gap,"gap",carouselContent.gap);
// const scrollWidth= item.clientWidth+gap;
// // console.log('needed width',item.clientWidth*3+128*2);
// console.log(scrollWidth);

const wlcmScroll = (op)=>{
    const gap= (carouselContainer.clientWidth-(item.clientWidth*3))/2 
 
    const scrollWidth= item.clientWidth+gap;

    carouselContainer.scrollBy({ left: (scrollWidth*op), behavior: 'smooth' })
}

leftBnt.addEventListener('click',()=>{ wlcmScroll(-1)})
rightBnt.addEventListener('click',()=>{ wlcmScroll(1)})

// Get the carousel buttons and the carousel content container
const leftBtn = document.getElementById("left-carousel-btn");
const rightBtn = document.getElementById("right-carousel-btn");
// const carouselContent = document.getElementById("carousel-content");


// categoryHandler

window.categoryHandler = function (event) { 
    const id = event.currentTarget.dataset.category
	const location = window.location;
	const query = new URLSearchParams(location.search);
    query.set("category", id);
	const href = `${location.origin}/assets/pages/products/products.html?${query.toString()}`;
	window.location.href = href;
};
// footer search
// searchHandler
window.searchHandler = function (event) {  
    const searchValue= document.getElementById('footerSearchBar').value.trim();
	const location = window.location;
	const query = new URLSearchParams(location.search);
    query.set("search", searchValue);
    // "/Gaming_Squad_Startup2/assets/pages/products/products.html"

	const href = `${location.origin}/assets/pages/products/products.html?${query.toString()}`;
	window.location.href = href;
};