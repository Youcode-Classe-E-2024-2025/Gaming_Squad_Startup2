import ProductCard from "../../components/ProductCard.js";
import Overlay from "../../components/Overlay.js";
import EditForm from "../../components/EditForm.js";
import AddForm from "../../components/AddForm.js";

let products = [];
let filteredListe = [];
const productsWrapper = document.querySelector(".products-wrapper");
// select main element to add in it AddForm component
const main = document.querySelector("main");

function updateLocalStorageProducts() {
	localStorage.setItem("products", JSON.stringify(products));
}



fetch("../../data/data.json")
	.then((res) => res.json())
	.then((data) => {
		if (localStorage.getItem("products")) {
			products = JSON.parse(localStorage.getItem("products"));
		} else {
			products = data;
			updateLocalStorageProducts();
		}
		displayProductsSlice();
		displayPagination();
		homeCategory();
		footersearch();
	}) 
	.catch((error) => console.error(error));

function displayProducts(products) {
	const productsAsHtml = products.map((product) => ProductCard(product));
	productsWrapper.innerHTML = productsAsHtml.join("");
}

const addProductBtn = document.querySelector(".add-product-btn");
addProductBtn.onclick = () => openForm();

function openForm(whichForm = "") {
	console.log(whichForm);
	if (whichForm.toLowerCase() === "edit") main.insertAdjacentHTML("beforeend", Overlay(EditForm()));
	else main.insertAdjacentHTML("beforeend", Overlay(AddForm()));
}

function closeForm() {
	const overlay = document.querySelector(".overlay");
	overlay.classList.replace("fade-in", "fade-out");
	overlay.addEventListener("animationend", () => overlay.remove());
}

function getFormData() {
	const name = document.querySelector("#name").value;
	const description = document.querySelector("#description").value;
	const price = document.querySelector("#price").value;
	const rating = document.querySelector("#rating").value;
	const image = [document.querySelector("#image").value];
	const category = document.querySelector("#category").value;
	return {
		id: Date.now(),
		imgSrc: image,
		name,
		description,
		price,
		rating,
		category,
	};
}

window.AddProduct = function (event) {
	event.preventDefault();
	const newProduct = getFormData();
	const isDataValid = validateData();
	if (isDataValid) {
		products.push(newProduct);
		updateLocalStorageProducts();
		displayProducts(products);
		closeForm();
	}
	displayPagination();
};

function validateData(event) {
	const name = document.getElementById("name").value.trim();
	const description = document.getElementById("description").value.trim();
	const price = document.getElementById("price").value.trim();
	const rating = document.getElementById("rating").value.trim();
	const image = document.getElementById("image").value.trim();
	let errorMessage = "";

	if (name === "") {
		errorMessage = "Please enter the product name.";
	} else if (description === "") {
		errorMessage = "Please enter the product description.";
	} else if (price === "" || isNaN(price) || parseFloat(price) <= 0) {
		errorMessage = "Please enter a valid price (greater than 0).";
	} else if (rating === "" || isNaN(rating) || parseFloat(rating) < 0 || parseFloat(rating) > 5) {
		errorMessage = "Please Enter a valid number in this range [0, 5].";
	} else if (image === "" || !/^https?:\/\/.+/i.test(image)) {
		errorMessage = "Please enter a valid image link.";
	}

	if (errorMessage) {
		alert(errorMessage);
		return false;
	} else return true;
}

window.deleteProduct = function (event, element) {
	event.stopPropagation();
	const confirm = prompt('Confirm your decision by clicking typing "YES"!');
	if (confirm == "YES") {
		const id = element.dataset.id;
		const index = products.findIndex((product) => product.id == id);
		products.splice(index, 1);
		displayProductsSlice();
		updateLocalStorageProducts();
		displayPagination();
	}
};

const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", search);

function search() {
	const query = searchBar.value.toLowerCase();
	const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(query));
	displayProducts(searchedProducts);
}

let indexPage = 1;
window.displayProductsSlice = function (element) {
	if (element?.dataset.index) indexPage = Number(element.dataset.index);
	const start = (indexPage - 1) * 16;
	const end = indexPage * 16;
	displayProducts(products.slice(start, end));
};

window.nextSlice = function () {
	if (indexPage < Math.ceil(products.length / 16)) indexPage++;
	displayProductsSlice();
};

window.previousSlice = function () {
	if (indexPage > 1) indexPage--;
	displayProductsSlice();
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateLocalStorageCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

window.addProductToCart = function (event) {
	event.preventDefault();
	event.stopPropagation();
	const id = event.currentTarget.dataset.id;
	const product = products.find((prod) => prod.id == id);
	const productIndexInCart = cart.findIndex((prod) => prod.id == id);
	const isAlreadyInCart = productIndexInCart !== -1;
	if (isAlreadyInCart) cart[productIndexInCart].quantity++;
	else cart.push({ ...product, quantity: 1 });
	updateLocalStorageCart();
};

window.openProductDetails = function (event) {
	const id = event.currentTarget.id;
	const location = window.location;
	const query = new URLSearchParams(location.search);
	query.set("id", id);
	const href = `${location.origin}/assets/pages/productDetails/productDetails.html?${query.toString()}`;
	window.location.href = href;
};

function displayPagination() {
	document.querySelector(".pagination")?.remove();
	const numberOfPages = Math.ceil(products.length / 16);

	let bullets = "";

	for (let i = 1; i <= numberOfPages; i++) {
		bullets += `<p class="page-name cursor-pointer" data-index="${i}" onclick="displayProductsSlice(this)">${i}</p>`;
	}

	const pagination = `<div
				class="pagination mx-auto col-span-full text-xs sm:text-base flex items-center justify-center gap-2 w-fit [&>*]:rounded-full [&>*]:border-2 [&>*]:border-solid [&>*]:border-black [&>*]:aspect-square [&>*]:w-8 [&>*]:h-8 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:font-medium [&>*]:text-white">
				<div class="left p-0.5 cursor-pointer !w-9 !h-9" onclick="previousSlice()">
					<i class="fa-solid fa-chevron-left font-black text-2xl"></i>
				</div>
				${bullets}
				<div class="right p-0.5 cursor-pointer !w-9 !h-9" onclick="nextSlice()">
					<i class="fa-solid fa-chevron-right font-black text-2xl"></i>
				</div>
			</div>`;

	main.insertAdjacentHTML("beforeend", pagination);
}

// edit
let idForUpdate;
window.editProduct = function (event, element) {
	event.stopPropagation();
	const id = element.dataset.id;
	idForUpdate = id;
	const index = products.findIndex((product) => product.id == id);
	openForm("edit");
	showProductDataInForm(products[index]);

	// displayProductsSlice();
	// updateLocalStorageProducts();
	// displayPagination();
};
// closeForm()
function showProductDataInForm(prdct) {
	document.querySelector("#name").value = prdct.name;
	document.querySelector("#description").value = prdct.description;
	document.querySelector("#price").value = prdct.price;
	document.querySelector("#rating").value = prdct.rating;
	document.querySelector("#image").value = prdct.imgSrc;
	document.querySelector("#category").value = prdct.category;
}

window.updateProduct = function (event) {
	event.preventDefault();
	const updatedProduct = getUpdatedData();
	const isDataValid = validateData();
	if (isDataValid) {
		updatedProduct.id = idForUpdate;
		const index = products.findIndex((product) => product.id == idForUpdate);
		products.splice(index, 1, updatedProduct);
		displayProductsSlice();
		updateLocalStorageProducts();
		closeForm();
	}
	displayPagination();
};

function getUpdatedData() {
	const name = document.querySelector("#name").value;
	const description = document.querySelector("#description").value;
	const price = document.querySelector("#price").value;
	const rating = document.querySelector("#rating").value;
	const image = [document.querySelector("#image").value];
	const category = document.querySelector("#category").value;
	return {
		imgSrc: image,
		name,
		description,
		price,
		rating,
		category,
	};
}

// sort
const sortInput = document.getElementById("sort");

sortInput.addEventListener("input", () => {
	// console.log(sortInput.value);

	if (sortInput.value == "name up") {
		products.sort((p1, p2) => (p1.name < p2.name ? -1 : 1));
	} else if (sortInput.value == "name down") {
		products.sort((p1, p2) => (p1.name > p2.name ? -1 : 1));
	} else if (sortInput.value == "price up") {
		products.sort((p1, p2) => p1.price - p2.price);
	} else if (sortInput.value == "price down") {
		products.sort((p1, p2) => p2.price - p1.price);
	}
	displayProductsSlice();
	updateLocalStorageProducts();
});
function homeCategory(){
	let url = new URL(window.location.href);
let category = url.searchParams.get('category');
if(category){
	document.getElementById("filter").value=category;
	filteredListe = products.filter((prdct) => prdct.category == category);
	console.log(products);
	displayProducts(filteredListe);
    console.log(category);
}}
function footersearch(){
	let url = new URL(window.location.href);
	let searchFooter = url.searchParams.get('search');
if(searchFooter){
	console.log(searchFooter);
	document.querySelector("#search").value=searchFooter;
	const query = searchFooter.toLowerCase();
	const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(query));
	displayProducts(searchedProducts);
	
    
}
}
// filter
const filterInput = document.getElementById("filter");

filterInput.addEventListener("input", () => {
	// console.log(filterInput.value);
	if (filterInput.value !== "All") {
		filteredListe = products.filter((prdct) => prdct.category == filterInput.value);
		displayProducts(filteredListe);
	} else {
		displayProductsSlice();
	}
});

