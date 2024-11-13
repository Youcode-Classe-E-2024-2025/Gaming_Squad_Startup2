const burgerIcon = document.getElementById('burger-icon') ;
const navbar = document.getElementById('navbar-default') ;
const welcomeSection = document.querySelector('section#welcome');
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



function createCartWlcm(index){

    const item= wlcmData[index]
    const Div=document.createElement('div')
    Div.className='p-10'
    Div.innerHTML=` 
    <div
        class="max-w-[66.5rem] h-[36.25rem] mx-auto relative rounded-2xl overflow-hidden  bg-white   text-white">
        <img src="${item.img}" alt="${item.imgAlt} "
            class="bg-left object-cover w-full h-full rounded-2xl">
  
        <div
            class=" md:p-28 grid gap-4 items-center  grid-cols-2   absolute top-0 right-0 h-full w-full p-10 bg-gradient-to-r from-[#00000077] to-[#00000001]">
            <h1 class=" col-start-1 row-start-4 self-end col-span-full  font-bold text-[2.5rem]">${item.title}</h1>
            <p class="  col-start-1 row-start-5 col-span-full font-normal text-2xl">${item.sousTitle}</p>
            <p class="md:pl-4  col-start-1 row-start-6 row-span-2 self-start col-span-full md:col-span-1">
            ${item.content}
               
            </p>
            <button type="button"
                class="col-start-1  row-start-8 col-span-full px-4 py-2 w-fit rounded-lg border-2 border-white hover:bg-orange hover:scale-105  bg-dark ">more
                details </button>
        </div>

    </div>`
    welcomeSection.innerHTML='';
    welcomeSection.append(Div);
}

function welcomeSectionHandler(){
    let i=0
    createCartWlcm((i++))
     setInterval(() => {
        createCartWlcm((i++)%3)
     }, 3000);
}
// welcomeSectionHandler();

