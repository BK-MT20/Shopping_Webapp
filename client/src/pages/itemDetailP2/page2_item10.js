import Item_detail from '../../layouts/components/Detail_item'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Page2_item10 = () => {
    return (
        <div >
            <div class="flex w-[340px] m-auto mt-[30px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none  mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none"><Link to="/product1">Products</Link></p>
                <p class="flex-none  mt-[5px] "> <BiChevronRight /> </p>
                <p class="flex-none ">Check Bag</p>
            </div>
            <Item_detail link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/4_6d5ceb2e-331a-4ab7-9cf9-14d63548b4a4.jpg?v=1628348046&width=600" name="Check Bag" price="$15.00" />
        </div>

    );
}

export default Page2_item10