import Item_detail from '../../layouts/components/Detail_item'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Page1_item11 = () => {
    return (
        <div >
            <div class="flex w-[340px] m-auto mt-[30px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none  mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none"><Link to="/product1">Products</Link></p>
                <p class="flex-none  mt-[5px] "> <BiChevronRight /> </p>
                <p class="flex-none ">BJacket De Blouse</p>
            </div>
            <Item_detail link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/36.jpg?v=1628346789&width=600" name="BJacket De Blouse" price="$40.00" />
        </div>

    );
}

export default Page1_item11