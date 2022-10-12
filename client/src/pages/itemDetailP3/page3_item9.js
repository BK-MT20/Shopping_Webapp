import Item_detail from '../../layouts/components/Detail_item'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Page3_item9 = () => {
    return (
        <div >
            <div class="flex w-[340px] m-auto mt-[30px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none  mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none"><Link to="/product1">Products</Link></p>
                <p class="flex-none  mt-[5px] "> <BiChevronRight /> </p>
                <p class="flex-none ">Black backpack</p>
            </div>
            <Item_detail link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/prod4_0ada908c-fcf0-410c-8bc1-4d563932167e.jpg?v=1628344923" name="Black backpack" price="$350.00" />
        </div>

    );
}

export default Page3_item9