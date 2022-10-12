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
                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/2_1.jpg?v=1628347876&width=600" name_product="Oversized Jacket" price_product="$35.00" item="/product2/Oversized-Jacket" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/35h.jpg?v=1628348161&width=600" name_product="Denim Jacket" price_product="$39.00" item="/product2/Denim-Jacket" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/32_69e4270c-14ea-4173-ae9e-0aa3edb9a14f.jpg?v=1628348144&width=600" name_product="Espadrilles Sandals" price_product="$17.00" item="/product2/Espadrilles-Sandals" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/52_bec0360d-64e5-4b79-bb88-9b2dc30f34a2.jpg?v=1628348223&width=600" name_product="Oversized T-shirt" price_product="$11.00" item="/product2/Oversized-T-shirt" />

                    </div>

                    <div class="flex justify-between mt-[90px]">

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/11_d714e9e4-3faa-42f9-9943-1b34df185b0c.jpg?v=1628339784&width=600" name_product="Straw hat" price_product="$10.00" item="/product2/Straw-hat" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/14_41fe7948-e2db-43aa-871d-955f2e026da1.jpg?v=1628348078&width=600" name_product="Brown Leather Belt" price_product="$13.00" item="/product2/Brown-Leather-Belt" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57.jpg?v=1628348251" name_product="Linen-blend Shirt" price_product="$17.00" item="/product2/Linen-blend-Shirt" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/6_2175fb27-821a-4885-a1c7-836459c56ba7.jpg?v=1628347720&width=600" name_product="Cotton bucket hat" price_product="$18.00" item="/product2/Cotton-bucket-hat" />
                    </div>

                    <div class="flex justify-between mt-[90px]">

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/20_dfdca8a7-e237-4f12-87bd-9f3e7782a312.jpg?v=1628348103" name_product="Stripe Cotton Shirt" price_product="$17.00" item="/product2/Stripe-Cotton-Shirt" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/4_6d5ceb2e-331a-4ab7-9cf9-14d63548b4a4.jpg?v=1628348046&width=600" name_product="Check Bag" price_product="$15.00" item="/product2/Check-Bag" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/53_bc12317d-e941-4097-9fd8-cc529c2b0cf1.jpg?v=1628348231&width=600" name_product="Linen Check Blazer" price_product="$40.00" item="/product2/Linen-Check-Blazer" />

                        <Item a_link="" img_link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/59.jpg?v=1628348257&width=600" name_product="Long-sleeve Maxi Dress" price_product="$106.00" item="/product2/Long-sleeve-Maxi-Dress" />

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
