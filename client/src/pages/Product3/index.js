import { Link } from 'react-router-dom'
import Filter from '../../layouts/components/Filter'
import Item from '../../layouts/components/Item'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { useEffect } from 'react';

const Index = () => {
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
                    <div class="flex justify-between">
                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/26_80a643e6-7781-402f-b813-c85f2fa3400c.jpg?v=1628347185&width=600" name_product="Wool-blend jacket" price_product="$35.00" item="/product3/Wool-blend-jacket" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/29_ca458f48-34f9-4a89-9c32-b4066c87bdd2.jpg?v=1628347841&width=600" name_product="Ribbed cardigan" price_product="$25.00" item="/product3/Ribbed-cardigan" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/36.jpg?v=1628346789&width=600" name_product="Jacket De Blouse" price_product="$40.00" item="/product3/Jacket-De-Blouse" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/1_6256cf3d-6d25-4976-80a4-707131709f5b.jpg?v=1628348039&width=600" name_product="Oversized Jacket" price_product="$153.00" item="/product3/Oversized-Jacket" />

                    </div>

                    <div class="flex justify-between mt-[90px]">

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/34.jpg?v=1628347206&width=600" name_product="Platform espadrille sandals" price_product="$25.00" item="/product3/Platform-espadrille-sandals" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/7_611bbe55-5bb2-4ec6-b25c-de0fdbe6e047.jpg?v=1628347194&width=600" name_product="Platform sandals" price_product="$35.00" item="/product3/Platform-sandals" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/33_ecbc9a95-9898-48b3-abe6-6aba72aaedcd.jpg?v=1628348151&width=600" name_product="Espadrille sandals" price_product="$19.00" item="/product3/Espadrille-sandals" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/8_63420c57-eb52-4f3d-b637-da02b938fda7.jpg?v=1628347190&width=600" name_product="Braided Sandals" price_product="$15.00" item="/product3/Braided-Sandals" />
                    </div>

                    <div class="flex justify-between mt-[90px]">

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod4_0ada908c-fcf0-410c-8bc1-4d563932167e.jpg?v=1628344923" name_product="Black backpack" price_product="$350.00" item="/product3/Black-backpack" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod3_495841bc-e198-405e-86f1-0b2f4349cbbb.jpg?v=1628344922" name_product="Gray backpack" price_product="$350.00" item="/product3/Gray-backpack" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod2_a803d9b4-3368-4e29-8c51-9a2c319250fc.jpg?v=1628344023" name_product="Mens Gym Bag" price_product="$20.00" item="/product3/Mens-Gym-Bag" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/7_459cabf1-1a14-4cfc-9c43-758c1005ae13.jpg?v=1628344029" name_product="Roller Messenger Bag" price_product="$250.00" item="/product3/Roller-Messenger-Bag" />

                    </div>

                </div>
            </div>
            <div class="switchPage flex w-[225px] justify-between mt-[85px] m-auto mb-[115px]">
                <Link to="/product1"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder rounded-full hover:cursor-pointer transition ease-in-out">1</div></Link>
                <Link to="/product2"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">2</div></Link>
                <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default">3</div>
                <Link to="/product4"><div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out">4</div></Link>
                <Link to="/product4"><div class="flex-none flex w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out"><BiChevronsRight /></div></Link>
            </div>
        </div>
    );
}

export default Index
