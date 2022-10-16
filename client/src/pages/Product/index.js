import { Link } from 'react-router-dom'
import Filter from '../../layouts/components/Filter'
import Item from '../Item'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { useState } from 'react';
const Index = () => {

    const data = [
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=600",
            title: "Boxy Denim Jacket",
            price: "$25.00",
            id: "Boxy-Denim-Jacket",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/19_19abda91-ab20-4604-b397-9a68f0b5cce6.jpg?v=1628348094&width=600",
            title: "Cotton Flannel Shirt",
            price: "$15.00",
            id: "Cotton-Flannel-Shirt",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/20_6f5d9b49-cd0a-41a3-b389-798cf35fe765.jpg?v=1628347922&width=600",
            title: "Cotton Shirt",
            price: "$341.00",
            id: "Cotton-Shirt",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/56_0add2002-bded-403e-aeee-2831f93a8bc9.jpg?v=1628348244&width=600",
            title: "Drawstring T-shirt Dress",
            price: "$19.00",
            id: "Drawstring-T-shirt-Dress",
            amount: 5,
        },


        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/12_e0b624e9-4245-4df6-8d96-6840dcb226be.jpg?v=1628348074&width=600",
            title: "Band Straw Hat",
            price: "$11.00",
            id: "Band-Straw-Hat",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/15_a0c50299-9323-4dfb-9f58-865503275cf8.jpg?v=1628347930&width=600",
            title: "Cashmere vest top",
            price: "$135.00",
            id: "Cashmere-vest-top",
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
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/6_2175fb27-821a-4885-a1c7-836459c56ba7.jpg?v=1628347720&width=600",
            title: "Cotton bucket hat",
            price: "$18.00",
            id: "Cotton-bucket-hat",
            amount: 5,
        },



        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/38_4b6920a7-196b-49a2-952d-2295e64a9b71.jpg?v=1628348168&width=600",
            title: "High Ankle Jeans",
            price: "$302.00",
            id: "High-Ankle-Jeans",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/35.jpg?v=1628347569&width=600",
            title: "Jacket Denim Blouse",
            price: "$15.00",
            id: "Jacket-Denim-Blouse",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/36.jpg?v=1628346789&width=600",
            title: "Jacket De Blouse",
            price: "$40.00",
            id: "Jacket-De-Blouse",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/1_6256cf3d-6d25-4976-80a4-707131709f5b.jpg?v=1628348039&width=600",
            title: "Oversized Jacket",
            price: "$153.00",
            id: "Oversized-Jacket",
            amount: 5,


        },
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

        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/26_80a643e6-7781-402f-b813-c85f2fa3400c.jpg?v=1628347185&width=600",
            title: "Wool-blend jacket",
            price: "$35.00",
            id: "Wool-blend-jacket",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/29_ca458f48-34f9-4a89-9c32-b4066c87bdd2.jpg?v=1628347841&width=600",
            title: "Ribbed cardigan",
            price: "$25.00",
            id: "Ribbed-cardigan",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/36.jpg?v=1628346789&width=600",
            title: "Jacket De Blouse",
            price: "$40.00",
            id: "Jacket-De-Blouse",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/1_6256cf3d-6d25-4976-80a4-707131709f5b.jpg?v=1628348039&width=600",
            title: "Oversized Jacket",
            price: "$153.00",
            id: "Oversized-Jacket",
            amount: 5,
        },


        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/34.jpg?v=1628347206&width=600",
            title: "Platform espadrille sandals",
            price: "$25.00",
            id: "Platform-espadrille-sandals",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/7_611bbe55-5bb2-4ec6-b25c-de0fdbe6e047.jpg?v=1628347194&width=600",
            title: "Platform sandals",
            price: "$35.00",
            id: "Platform-sandals",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/33_ecbc9a95-9898-48b3-abe6-6aba72aaedcd.jpg?v=1628348151&width=600",
            title: "Espadrille sandals",
            price: "$19.00",
            id: "Espadrille-sandals",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/8_63420c57-eb52-4f3d-b637-da02b938fda7.jpg?v=1628347190&width=600",
            title: "Braided Sandals",
            price: "$15.00",
            id: "Braided-Sandals",
            amount: 5,
        },



        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod4_0ada908c-fcf0-410c-8bc1-4d563932167e.jpg?v=1628344923",
            title: "Black backpack",
            price: "$350.00",
            id: "Black-backpack",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod3_495841bc-e198-405e-86f1-0b2f4349cbbb.jpg?v=1628344922",
            title: "Gray backpack",
            price: "$350.00",
            id: "Gray-backpack",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod2_a803d9b4-3368-4e29-8c51-9a2c319250fc.jpg?v=1628344023",
            title: "Mens Gym Bag",
            price: "$20.00",
            id: "Mens-Gym-Bag",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/7_459cabf1-1a14-4cfc-9c43-758c1005ae13.jpg?v=1628344029",
            title: "Roller Messenger Bag",
            price: "$250.00",
            id: "Roller-Messenger-Bag",
            amount: 5,
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/10_d49f949e-99cd-4873-bf56-d45ce90bfec9.jpg?v=1628348069&width=600",
            title: "Straw Shopeer Bag",
            price: "$12.00",
            id: "Straw-Shopeer-Bag",
            amount: 5,
        },


    ]
    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (pageNext) => {
        setCurrentPage(pageNext);
        window.scrollTo(0, 0);
    }
    const quantity = 12;
    const maxPage = data.length / quantity
    const lastIndex = currentPage * quantity;
    const firstIndex = lastIndex - quantity;
    const currentData = data.slice(firstIndex, lastIndex);
    let numberOfPage = [];

    for (var i = 0; i < maxPage; i++) {
        numberOfPage.push(i + 1);
    }

    return (
        <>
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
                            {currentData.map((item, index) => (

                                <Item item={item} />
                            )
                            )
                            }
                        </div>

                    </div>
                </div>
                <div class="switchPage flex w-[225px] justify-between mt-[85px] m-auto mb-[115px]">
                    <button class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(currentPage - 1)} disabled={currentPage < 2 ? true : false}><BiChevronsLeft /></button>
                    {numberOfPage.map((numPage) => (
                        <>
                            {numPage !== currentPage ? <div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(numPage)}>{numPage}</div> : <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default " onClick={() => handlePage(numPage)}>{numPage}</div>
                            }
                        </>
                    )
                    )}
                    <button class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(currentPage + 1)} disabled={currentPage >= maxPage ? true : false}><BiChevronsRight /></button>
                </div>
            </div>
        </>
    );

}

export default Index
