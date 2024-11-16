export default function (product) {
	return `<figure class="product-card relative cursor-pointer" id="${product?.id}" onclick="openProductDetails(event)">
					<div class="box absolute top-0 right-1.5 z-10">
						<button data-id="${product?.id}" onclick="editProduct(event,this)" class="edit-btn text-sm mr-1 hover:scale-125 transition-transform duration-300">
							<i class="fa-regular fa-pen-to-square"></i>
						</button>
						<button data-id="${product?.id}" onclick="deleteProduct(event, this)" class="delete-btn text-sm hover:scale-125 transition-transform duration-300">
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div class="product-image bg-gray-100 overflow-hidden">
						<img
							src="${product.imgSrc[0]}"
							alt=""
							class="aspect-square hover:scale-110 transition-transform duration-300" />
					</div>
					<button
                  data-id="${product?.id}" onclick="addProductToCart(event)"
						class="add-to-cart-btn text-sm bg-[#F04D0D] text-white font-medium w-full p-2 hover:scale-105 active:scale-100 hover:bg-[rgba(240,77,13,0.8)] transition-colors duration-300">
						add to cart <i class="fa-solid fa-cart-plus"></i>
					</button>
					<h2 class="product-name text-white text-sm hover:underline">${product.name}</h2>
					<p class="product-price text-sm font-medium text-[#F04D0D] cursor-default">$${product.price}</p>
				</figure>`;
}
