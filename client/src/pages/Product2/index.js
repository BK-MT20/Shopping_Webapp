import { Link } from 'react-router-dom'
import Filter from '../../layouts/components/Filter'
import Item from '../../layouts/components/Item'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { useEffect } from 'react';

const Index = () => {

    const data = [
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/2_1.jpg?v=1628347876&width=600",
            title: "Oversized Jacket",
            price: "$35.00",
            id: "Oversized-Jacket",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/35h.jpg?v=1628348161&width=600",
            title: "Denim Jacket",
            price: "$39.00",
            id: "Denim-Jacket",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/32_69e4270c-14ea-4173-ae9e-0aa3edb9a14f.jpg?v=1628348144&width=600",
            title: "Espadrilles Sandals",
            price: "$17.00",
            id: "Espadrilles-Sandals",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/52_bec0360d-64e5-4b79-bb88-9b2dc30f34a2.jpg?v=1628348223&width=600",
            title: "Oversized T-shirt",
            price: "$11.00",
            id: "Oversized-T-shirt",
            amount: 5,
        },


        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/11_d714e9e4-3faa-42f9-9943-1b34df185b0c.jpg?v=1628339784&width=600",
            title: "Straw hat",
            price: "$10.00",
            id: "Straw-hat",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/14_41fe7948-e2db-43aa-871d-955f2e026da1.jpg?v=1628348078&width=600",
            title: "Brown Leather Belt",
            price: "$13.00",
            id: "Brown-Leather-Belt",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57.jpg?v=1628348251",
            title: "Linen-blend Shirt",
            price: "$17.00",
            id: "Linen-blend-Shirt",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/6_2175fb27-821a-4885-a1c7-836459c56ba7.jpg?v=1628347720&width=600",
            title: "Cotton bucket hat",
            price: "18.00",
            id: "Cotton-bucket-hat",
            amount: 5,
        },



        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/20_dfdca8a7-e237-4f12-87bd-9f3e7782a312.jpg?v=1628348103",
            title: "Stripe Cotton Shirt",
            price: "$17.00",
            id: "Stripe-Cotton-Shirt",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/4_6d5ceb2e-331a-4ab7-9cf9-14d63548b4a4.jpg?v=1628348046&width=600",
            title: "Check Bag",
            price: "$15.00",
            id: "Check-Bag",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/53_bc12317d-e941-4097-9fd8-cc529c2b0cf1.jpg?v=1628348231&width=600",
            title: "Linen Check Blazer",
            price: "$40.00",
            id: "Linen-Check-Blazer",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/59.jpg?v=1628348257&width=600",
            title: "Long-sleeve Maxi Dress",
            price: "$106.00",
            id: "Long-sleeve-Maxi-Dress",
            amount: 5,
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div class="w-full">
            <div class="m-auto text-center">
                <h1 class="lg:text-[42px] text-2xl capitalize m-auto mt-[20px] item-center">Products</h1>
            </div>
            <div class="flex  m-auto mt-[20px] w-[140px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none">Products</p>
            </div>
            <div id='img-product' class=" flex mt-[110px] w-11/12 m-auto justify-between " >
                <Filter />
                <div id='right' class="w-9/12 flex-none ">
                    <div class="grid grid-cols-4 gap-x-6 gap-y-90 ">
                        {data.map((item, index) => (
                            <Item item={item} />
                        )
                        )
                        }
                    </div>

                </div>
            </div>
            <div class="switchPage flex w-[225px] justify-between mt-[85px] m-auto mb-[115px]">
                <Link to="/product1"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder rounded-full hover:cursor-pointer transition ease-in-out">1</div></Link>
                <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default">2</div>
                <Link to="/product3"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder rounded-full hover:cursor-pointer transition ease-in-out">3</div></Link>
                <Link to="/product4"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">4</div></Link>
                <Link to="/product3"><div class="flex-none flex w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out"><BiChevronsRight /></div></Link>
            </div>
        </div>
    );
}

export default Index
