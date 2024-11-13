import ProductCard from "../../components/ProductCard.js";
import Overlay from "../../components/Overlay.js";
import EditForm from "../../components/EditForm.js";
import AddForm from "../../components/AddForm.js";

let products = [];
const productsWrapper = document.querySelector(".products-wrapper");
const main = document.querySelector("main");

function updateLocalStorage() {
	localStorage.setItem("products", JSON.stringify(products));
}

fetch("../../data/data.json")
	.then((res) => res.json())
	.then((data) => {
		if (localStorage.getItem("products")) {
			products = JSON.parse(localStorage.getItem("products"));
		} else {
			products = data;
			updateLocalStorage();
		}
		displayProducts(products);
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
	const image = document.querySelector("#image").value;
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
	products.push(newProduct);
	updateLocalStorage();
	displayProducts(products);
	closeForm();
};

window.deleteProduct = function (event, element) {
	event.stopPropagation();
	const id = element.dataset.id;
	const index = products.findIndex((product) => product.id == id);
	products.splice(index, 1);
	displayProducts(products);
	updateLocalStorage();
};

const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", search);

function search() {
	const query = searchBar.value.toLowerCase();
	const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(query));
	displayProducts(searchedProducts);
}
