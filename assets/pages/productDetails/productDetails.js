const img_prancipal = document.getElementById("img-prancipal");
const img_1 = document.getElementById("img-1");
const img_2 = document.getElementById("img-2");
const img_3 = document.getElementById("img-3");
const plus = document.getElementById("plus");
const moin = document.getElementById("moin");
let quantity = document.getElementById("contiti");
const titre = document.getElementById("titre");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");
const prix = document.getElementById("prix");

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let url = new URL(window.location.href);
let id = url.searchParams.get("id");
const index = products.findIndex((product) => product.id == id);
const product = products[index];

plus.addEventListener("click", () => {
	quantity.value = Number(quantity.value) + 1;
});

moin.addEventListener("click", () => {
	if (quantity.value > 1) {
		quantity.value = Number(quantity.value) - 1;
	}
});
titre.textContent = `${product.name}`;
desc.textContent = `${product.description}`;
prix.textContent = `${product.price} $`;
img_prancipal.src = product.imgSrc[0];
img_1.src = product.imgSrc[0];
img_2.src = product.imgSrc[1];
img_3.src = product.imgSrc[2];

img_1.addEventListener("click", () => {
	img_prancipal.src = product.imgSrc[0];
});

img_2.addEventListener("click", () => {
	img_prancipal.src = product.imgSrc[1];
});
img_3.addEventListener("click", () => {
	img_prancipal.src = product.imgSrc[2];
});

const addToCartBtn = document.querySelector(".add-to-cart");
addToCartBtn.addEventListener("click", function (event) {
	const quantity = +document.querySelector(".quantity").value;
	const index = cart.findIndex((product) => product.id == id);
	const isAlreadyinCart = index != -1;
	if (isAlreadyinCart) cart[index].quantity++;
	// if (isAlreadyinCart) cart[index].quantity += quantity;
	else cart.push({ ...product, quantity });
	localStorage.setItem("cart", JSON.stringify(cart));
});
