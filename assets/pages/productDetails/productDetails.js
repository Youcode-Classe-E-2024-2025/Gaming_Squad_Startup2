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
const stars = document.getElementById("stars")

let products = JSON.parse(localStorage.getItem("products"));

let cont = -1;
btn.addEventListener('click', ()=>{
   
   cont++;
   
titre.textContent = `${products[cont].name}`
desc.textContent = `${products[cont].description}`
prix.textContent = `${products[cont].price} DH`
img_prancipal.src = products[cont].imgSrc[0];
for(let i = 0; i<products[cont].rating;i++){
   stars.innerHTML = '<img class="inline w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw]" src="https://img.icons8.com/fluency/48/star--v1.png" alt=""></img>'
}
img_1.src = products[cont].imgSrc[0];
img_2.src = products[cont].imgSrc[1];
img_3.src = products[cont].imgSrc[2];
 img_1.addEventListener('click', ()=>{
    img_prancipal.src = products[cont].imgSrc[0];
 });

 img_2.addEventListener('click', ()=>{
    img_prancipal.src = products[cont].imgSrc[1]; 
 });
 img_3.addEventListener('click', ()=>{
    img_prancipal.src = products[cont].imgSrc[2]
 });
 plus.addEventListener('click',()=>{
    quantity.value = Number(quantity.value) + 1;                 
 });
 moin.addEventListener('click',()=>{
    if(quantity.value > 1){
        quantity.value = Number(quantity.value) - 1;
    };
 });
});
//  document.body.addEventListener('click', ()=>{
//     console.log(quantity.value);
//  });




// function declaration
// function expression   anonymous function
// iife

// const a = fetch("...............");
// Promise.resolve(3).then(val=>console.log(val));

 




