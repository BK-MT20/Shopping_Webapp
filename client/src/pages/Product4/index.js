import { Link } from 'react-router-dom'
import Filter from '../../layouts/components/Filter'
import Item from '../../layouts/components/Item'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { useEffect } from 'react';

const Index = () => {

    const data = [
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/10_d49f949e-99cd-4873-bf56-d45ce90bfec9.jpg?v=1628348069&width=600",
            title: "Straw Shopeer Bag",
            price: "$12.00",
            id: "Straw-Shopeer-Bag",
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
                <Link to="/product3"><div class="flex-none flex w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out"><BiChevronsLeft /></div></Link>
                <Link to="/product1"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder rounded-full hover:cursor-pointer transition ease-in-out">1</div></Link>
                <Link to="/product2"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">2</div></Link>
                <Link to="/product3"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">3</div></Link>
                <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default">4</div>
            </div>
        </div>
    );
}

export default Index
