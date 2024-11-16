import { CartItem } from "../../components/CartItem.js";
const cartContainer = document.querySelector(".cart-container");
const cart = JSON.parse(localStorage.getItem("cart"));

function updateLocalStorageCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
	if (cart.length > 0) {
		document.querySelector(".n-items").style.display = "block";
		document.querySelector(".n-items span").textContent = cart.length;
		cartContainer.innerHTML = cart.map((product) => CartItem(product)).join("");
		document.querySelector(".pay-btn").style.display = "block";
	} else {
		document.querySelector(".n-items").style.display = "none";
		cartContainer.innerHTML =
			"<p class='text-red text-center text-xl font-medium uppercase'>--- the cart is empty ---</p>";
		document.querySelector(".pay-btn").style.display = "none";
	}
}
displayCart();

window.incrementQuantity = function (event, id) {
	const index = cart.findIndex((product) => product.id == id);
	const product = cart[index];
	if (product.quantity < product.stock) {
		product.quantity++;
		updateLocalStorageCart();
		displayCart();
	} else alert("you reached the maximum quantity in the stock");
};

window.decrementQuantity = function (event, id) {
	const index = cart.findIndex((product) => product.id == id);
	const product = cart[index];
	if (product.quantity > 1) {
		product.quantity--;
		updateLocalStorageCart();
		displayCart();
	} else {
		alert("the quantity value can't be less than 1");
	}
};

window.removeFromCart = function (event, id) {
	const index = cart.findIndex((product) => product.id == id);
	cart.splice(index, 1);
	updateLocalStorageCart();
	displayCart();
	console.log(index);
};
