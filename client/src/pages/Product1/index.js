import { Link } from 'react-router-dom'
import Filter from '../../layouts/components/Filter'
import Item from '../../layouts/components/Item'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { useEffect } from 'react';
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
                <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default">1</div>
                <Link to="/product2"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">2</div></Link>
                <Link to="/product3"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder rounded-full hover:cursor-pointer transition ease-in-out">3</div></Link>
                <Link to="/product4"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">4</div></Link>
                <Link to="/product2"><div class="flex-none flex w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out"><BiChevronsRight /></div></Link>
            </div>
        </div>
    );
}

export default Index
