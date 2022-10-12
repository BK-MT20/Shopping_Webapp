import { BiStar } from "react-icons/bi";
import { BiGitCompare } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import Tab_header from './tab_header'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// const displayContext = (props){
//   const 
// }

const Item_detail = (props) => {

	const [count, updateCount] = useState(1);

	const addCount = () => {
		updateCount(count + 1);
	}

	const minusCount = () => {
		if (count <= 1) {
			updateCount(1)
		}
		else {
			updateCount(count - 1);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<div>
				<div classname="Item_detail" class="w-73/100 h-[660px] xl: flex justify-between mt-[40px] m-auto  mb-[150px] ">
					<div id="Item" class="w-44/100 flex-none overflow-hidden">
						<img class=" overflow-hidden hover:scale-110 duration-150" src={props.link} alt="image here" />
					</div>
					<div id="Info" class="w-52/100 text-left flex-none">
						<div class="text-color-subtext uppercase text-sm text-gray-500">
							MINIMOG
						</div>
						<h1 class="text-2xl md:text-3xl md:leading-[42px] pr-2 mt-[15px]">{props.name}</h1>
						<p class="flex mt-[5px]"><BiStar /> <BiStar /> <BiStar /> <BiStar /> <BiStar /></p>
						<p class="f-price-item f-price-item--regular text-xl md:text-2xl mt-[17px]">{props.price}</p>
						<div class="text-gray-500 mt-[20px]">Only <strong>5</strong> item(s) left in stock!</div>
						<div class="h-[5px] bg-gray-200 flex rounded-md mt-[10px]">
							<div class="w-5/100 bg-red-500 flex-none rounded-md"></div>
						</div>
						<p class="font-medium hidden md:block mt-[25px]">Quantity </p>

						<div class="h-[50px] flex justify-between mt-[10px]">
							<div class=" w-23/100 h-[50px] rounded-md border-gray-300 border border-solid flex flex-none justify-around items-center">
								<button type="button" id="button_left" class="flex-none text-2xl " onClick={minusCount}>-</button>
								<p class="flex-none">{count}</p>
								<button type="button" id="button_right" class="flex-none text-2xl" onClick={addCount}>+</button>
							</div>
							<button type="button" id="button_right" class="w-73/100 h-[50px] rounded-md border-black border border-solid flex-none transition ease-in-out duration-300 hover:bg-black hover:text-white hover:scale-105 ">Add to cart</button>
						</div>
						<div>
							<Link to="/checkout">
								<button type="button" id="button_right" class="w-full h-[50px] rounded-md border-black border border-solid flex-none bg-black text-white mt-[25px] duration-300 hover:scale-105">Buy it now</button>
							</Link>
						</div>
						<div class=" h-[1px] bg-gray-300 mt-[30px]"></div>
						<div class="flex w-[335px] justify-between mt-[30px]">
							<div class="flex cursor-pointer">
								<p class="mt-[5px]"><BiGitCompare /></p>
								<p class="ml-2">Compare</p>
							</div>
							<div class="flex cursor-pointer">
								<p class="mt-[5px]"><BsQuestionCircle /></p>
								<p class="ml-2">Ask a question</p>
							</div>
							<div class="flex cursor-pointer">
								<p class="mt-[5px]"><BsShare /></p>
								<p class="ml-2">Share</p>
							</div>
						</div>
						<div class="w-full h-[110px] flex justify-center items-center bg-gray-50 rounded-lg mt-[35px]">
							<div class="text-center">
								<img class="mb-[15px]" src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/trustbag.png?v=1628329053&width=360" alt="image here" />
								<p><strong>Guarantee safe & secure checkout</strong></p>
							</div>
						</div>
					</div>
				</div>
				<Tab_header />
			</div>
		</div>
	);
}

export default Item_detail