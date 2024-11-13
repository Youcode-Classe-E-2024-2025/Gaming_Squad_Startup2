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
