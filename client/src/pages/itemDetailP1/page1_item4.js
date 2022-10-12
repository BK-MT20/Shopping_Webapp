import Item_detail from '../../layouts/components/Detail_item'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Page1_item4 = () => {
    return (
        <div >
            <div class="flex w-[340px] m-auto mt-[30px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none  mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none"><Link to="/product1">Products</Link></p>
                <p class="flex-none  mt-[5px] "> <BiChevronRight /> </p>
                <p class="flex-none ">Drawstring T-shirt Dress</p>
            </div>
            <Item_detail link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/56_0add2002-bded-403e-aeee-2831f93a8bc9.jpg?v=1628348244&width=600" name="Drawstring T-shirt Dress" price="$19.00" />
        </div>

    );
}

export default Page1_item4