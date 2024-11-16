const img_prancipal = document.getElementById('img-prancipal');
const img_1 = document.getElementById('img-1');
const img_2 = document.getElementById('img-2');
const img_3 = document.getElementById('img-3');
const plus = document.getElementById('plus');
const moin = document.getElementById('moin');
let quantity = document.getElementById('contiti');
const titre = document.getElementById('titre');
const desc = document.getElementById('desc');
const btn = document.getElementById('btn');
const prix = document.getElementById('prix');

let products = JSON.parse(localStorage.getItem("products"));

let url = new URL(window.location.href);
let id = url.searchParams.get('id')-1;

plus.addEventListener('click',()=>{
   quantity.value = Number(quantity.value) + 1;                 
});

moin.addEventListener('click',()=>{
   if(quantity.value > 1){
       quantity.value = Number(quantity.value) - 1;
   };
});
titre.textContent = `${products[id].name}`
desc.textContent = `${products[id].description}`
prix.textContent = `${products[id].price} $`
img_prancipal.src = products[id].imgSrc[0];
img_1.src = products[id].imgSrc[0];
img_2.src = products[id].imgSrc[1];
img_3.src = products[id].imgSrc[2];

img_1.addEventListener('click', ()=>{
   img_prancipal.src = products[id].imgSrc[0];
});

img_2.addEventListener('click', ()=>{
   img_prancipal.src = products[id].imgSrc[1]; 
});
img_3.addEventListener('click', ()=>{
   img_prancipal.src = products[id].imgSrc[2]
});
 




