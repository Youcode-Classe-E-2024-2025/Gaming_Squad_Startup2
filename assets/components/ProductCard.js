export default function (product) {
	return `<figure class="product-card relative cursor-pointer" id="${product.id}" data-index="${product.index}" onclick="openProductDetails()">
					<div class="box absolute top-1 right-1.5">
						<button data-id="${product.id}" data-index="${product.index}" onclick="editProduct()" class="edit-btn text-sm mr-1 hover:scale-125 transition-transform duration-300">
							<i class="fa-regular fa-pen-to-square"></i>
						</button>
						<button data-id="${product.id}" data-index="${product.index}" onclick="deleteProduct()" class="delete-btn text-sm hover:scale-125 transition-transform duration-300">
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div class="product-image bg-gray-100 overflow-hidden">
						<img
							src="../../images_tmp/products/1.webp"
							alt=""
							class="aspect-square hover:scale-110 transition-transform duration-300" />
					</div>
					<button
                  data-id="${product.id}" data-index="${product.index}" onclick="addProductToCart()"
						class="add-to-cart-btn text-sm bg-[#EF233C] text-white font-medium w-full p-2 hover:scale-105 hover:bg-[#D90429] transition-all duration-300">
						add to cart <i class="fa-solid fa-cart-plus"></i>
					</button>
					<h2 class="product-title text-sm hover:underline">Gaming Desktop PC</h2>
					<p class="product-price text-sm font-medium text-[#EF233C]">$199</p>
				</figure>`;
}
