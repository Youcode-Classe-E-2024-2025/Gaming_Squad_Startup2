export function CartItem(product) {
	return `<div class="relative div md:mt-[36px] sm:mt-[36px] mt-[20px] h-[30vw] md:h-[121px] sm:h-[121px] w-[95vw] sm:w-[60vw] md:w-[60vw] bg-white rounded-lg flex flex-row">
                <img class="md:w-[110px] sm:w-[110px] mb-4 w-[70px] mr-4 md:mr-[10px] ml-[10px] h-[75px] sm:h-[100px] md:h-[100px] mt-3" src="${product.imgSrc[0]}" alt="">
           <div class="flex flex-">
                <div class="flex flex-col items-center mr-0 md:mr-[40px]">
                    <p class="titre md:text-[20px] w-full text-[14px] ml-0 md:ml-[30px] mt-6 md:mt-16px]">${product.name}</p>
                    <p class="description md:text-[16px] w-full text-[9px] mt-[10px] md:mt-[10px] self-start text-[#000]">${product.description}</p>
                </div>
                <div class="flex flex-col items-center">
                    <div class=" flex ml-2 md:ml-10">
                        <p class="absolute right-3 md:right-10 text-[18px] max-sm:text-[20px] md:text-[24px] ">$${product.price}</p>
                    </div>
                    <div class="absolute right-0 bottom-10 flex flex-row md:col-span-2 mt-3 mr-3 my-auto">
                        <button data-id="${product.id}" onclick="decrementQuantity(event, ${product.id})" class="minus bg-white border-solid border-black border md:h-[40px] h-[20px] w-[20px] md:w-[40px] flex justify-center items-center text-black md:text-2xl ml-[7px]">-</button>
                        <button class="quantity bg-white md:h-[40px] h-[20px] w-[20px] md:w-[40px] border-solid border-black border">${product.quantity}</button>
                        <button data-id="${product.id}" onclick="incrementQuantity(event, ${product.id})" class="plus bg-white md:h-[40px] h-[20px] w-[20px] md:w-[40px] flex justify-center items-center  text-black border-solid border-black border ml-[4px]">+</button>
                    </div>
                    
                    <div class="cursor-pointer" onclick="removeFromCart(event, ${product.id})">
                        <img class="w-7 absolute right-5 md:right-10 bottom-0" src="https://img.icons8.com/plasticine/100/737373/filled-trash.png" alt="sss">
                    </div>
                </div>
            </div>
        </div>`;
}
