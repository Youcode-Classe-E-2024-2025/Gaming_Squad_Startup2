export default function () {
	return `
   			<div class="add-form bg-white border-1 border-black px-7 py-5 max-w-sm mx-auto rounded-lg relative">
				<button
					class="close-form-btn absolute top-1 right-2 text-black text-xl hover:scale-125 transition-transform duration-300">
					<i class="close-icon fa-solid fa-xmark"></i>
				</button>
				<h2 class="text-center text-lg sm:text-xl font-semibold mb-4">Please fill the inputs below</h2>
				<form onsubmit="updateProduct(event)">
				<label class="text-sm text-orange ">Product name</label>
					<input
						type="text"
						placeholder="Product name"
						id="name"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<label class="text-sm text-orange ">Description</label>
					<textarea
						id="description"
						placeholder="Product description"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded"></textarea>
					<label class="text-sm text-orange ">Product price</label>
					<input
						id="price"
						type="text"
						placeholder="Product price"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<label class="text-sm text-orange ">Product rating</label>
						<input
						id="rating"
						type="text"
						placeholder="Product rating (0 to 5)"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<label class="text-sm text-orange ">Image link</label>
					<input
						id="image"
						type="text"
						placeholder="Image link"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<label class="text-sm text-orange ">category</label>
					<select name="category" id="category" class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded">
						<option value="PC Gamer" selected>PC Gamer</option>
						<option value="Accessories">Accessories</option>
						<option value="Playstations">Playstations</option>
						<option value="Chairs">Chairs</option>
					</select>
					<button
						id="submit"
						type="submit"
						class="w-full bg-[#F04D0D] text-white py-2 rounded text-sm md:text-base font-medium">
						Edit Product
					</button>
				</form>
			</div>
`;
}
