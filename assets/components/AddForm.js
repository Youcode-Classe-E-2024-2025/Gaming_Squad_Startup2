export default function () {
	return `<div class="add-form z-20 bg-white border-1 border-black px-7 py-5 max-w-sm mx-auto rounded-lg relative">
				<button
					class="close-form-btn absolute top-1 right-2 text-black text-xl hover:scale-125 transition-transform duration-300">
					<i class="close-icon fa-solid fa-xmark"></i>
				</button>
				<h2 class="text-center text-lg sm:text-xl font-semibold mb-4">Please fill the inputs below</h2>
				<form onsubmit="AddProduct(event)">
					<input
						type="text"
						placeholder="Product name"
						id="name"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<textarea
						id="description"
						placeholder="Product description"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded"></textarea>
					<input
						id="price"
						type="number"
						min="1"
						placeholder="Product price"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<input
						id="rating" type="number"
						min="0" max="5"
						placeholder="Product rating (0 to 5)"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
					<input
						id="image"
						type="url"
						placeholder="Image link"
						class="text-sm md:text-base w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
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
						Add Product
					</button>
				</form>
			</div>
`;
}
