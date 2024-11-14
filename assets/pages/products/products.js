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

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Générer un index aléatoire
		[array[i], array[j]] = [array[j], array[i]]; // Échanger les éléments
	}
	return array;
}

fetch("../../data/data.json")
	.then((res) => res.json())
	.then((data) => {
		if (localStorage.getItem("products")) {
			products = JSON.parse(localStorage.getItem("products"));
			console.log(products);
		} else {
			products = data;
			console.log(products);

			updateLocalStorage();
		}
		afficherSlice();
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
	const isDataValid = validateData();
	if (isDataValid) {
		products.push(newProduct);
		updateLocalStorage();
		displayProducts(products);
		closeForm();
	}
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

let indexPage = 1;
window.afficherSlice = function (element) {
	if (element?.dataset.index) indexPage = Number(element.dataset.index);
	console.log(indexPage);
	console.log(element?.dataset.index);

	const start = (indexPage - 1) * 16;
	const end = indexPage * 16;
	displayProducts(products.slice(start, end));
	console.log(products.slice(start, end));
};

window.nextSlice = function () {
	if (indexPage < 2) indexPage++;
	afficherSlice();
};

window.previousSlice = function () {
	if (indexPage > 1) indexPage--;
	afficherSlice();
};
