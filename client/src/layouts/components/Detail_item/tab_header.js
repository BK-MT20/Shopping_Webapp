import React from 'react'

const Tab_header = () => {

	var desRef = React.useRef();
	var reRef = React.useRef();
	var polRef = React.useRef();
	var bt1 = React.useRef();
	var bt2 = React.useRef();
	var bt3 = React.useRef();

	const display_Tab = (buRef, coRef) => {
		bt1.current.style.color = "rgb(204, 204, 204)";
		bt2.current.style.color = "rgb(204, 204, 204)";
		bt3.current.style.color = "rgb(204, 204, 204)";
		desRef.current.style.display = "none";
		reRef.current.style.display = "none";
		polRef.current.style.display = "none";
		var BURef = buRef;
		var CoRef = coRef;
		BURef.current.style.color = "black";
		CoRef.current.style.display = "block";

	}

	return (
		<div>
			<div id="tabhead">

				<button ref={bt1} class="fontBu" onClick={() => display_Tab(bt1, desRef)} >Product description</button>
				<button ref={bt2} class="tabitem" onClick={() => display_Tab(bt2, reRef)}>Shipping & Return</button>
				<button ref={bt3} class="tabitem" onClick={() => display_Tab(bt3, polRef)}>Shipping policies</button>
			</div>
			<div class="w-78/100 h-[2px] bg-gray-300 m-auto mt-[20px] mb-[70px]"></div>
			<div class="mb-[165px]">
				<div ref={desRef} class="context space-y-6 bolck">
					<h2 class="font-medium text-2xl">The Iconic Silhouette</h2>
					<p class="text-slate-600 leading-7">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
					</p>
					<div class="flex justify-between"><img class="w-1/3" src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/customcontent3.jpg?v=1627958045" alt="imnage here"></img>
						<img class="w-1/3" src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/customcontent4.jpg?v=1627958045" alt="imnage here"></img>
						<img class="w-1/3" src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/customcontent2.jpg?v=1627958045" alt="imnage here"></img></div>
				</div>
				<div ref={reRef} class="context hidden space-y-24">
					<p class="text-slate-600">Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.
						We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.</p>
					<div class="flex w-49/50 justify-between">
						<div class="w-47/100"><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/7_d838b6ff-4af2-41c0-930c-89c02535bc2e.jpg?v=1633319827&width=720" alt="imnage here"></img>
						</div>
						<div class="w-44/100 table">
							<div class="space-y-5 table-cell align-middle">
								<h1 class="text-5xl ">Poplin Top With</h1>
								<h1 class="text-5xl ">Ruffle Trim</h1>
								<p class="text-slate-600 ">We believe in crafting pieces where sustainability and style go hand in hand. </p>
								<p class="text-slate-600">Made from materials like recycled cashmere and sust </p>
							</div>
						</div>
					</div>
				</div>

				<div ref={polRef} class="context hidden space-y-24">
					<p class="text-slate-600">Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.
						We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.</p>
					<div class="flex w-49/50 justify-between">
						<div class="w-47/100"><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/7_d838b6ff-4af2-41c0-930c-89c02535bc2e.jpg?v=1633319827&width=720" alt="imnage here"></img>
						</div>
						<div class="w-44/100 table">
							<div class="space-y-5 table-cell align-middle">
								<h1 class="text-5xl ">Poplin Top With</h1>
								<h1 class="text-5xl ">Ruffle Trim</h1>
								<p class="text-slate-600 ">We believe in crafting pieces where sustainability and style go hand in hand. </p>
								<p class="text-slate-600">Made from materials like recycled cashmere and sust </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Tab_header