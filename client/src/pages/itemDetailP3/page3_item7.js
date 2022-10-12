import Item_detail from '../../layouts/components/Detail_item'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Page3_item7 = () => {
    return (
        <div >
            <div class="flex w-[340px] m-auto mt-[30px] justify-between">
                <p class="flex-none"> <Link to="/">Home</Link> </p>
                <p class="flex-none  mt-[5px]"> <BiChevronRight /> </p>
                <p class="flex-none"><Link to="/product1">Products</Link></p>
                <p class="flex-none  mt-[5px] "> <BiChevronRight /> </p>
                <p class="flex-none ">Espadrille sandals</p>
            </div>
            <Item_detail link="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/33_ecbc9a95-9898-48b3-abe6-6aba72aaedcd.jpg?v=1628348151&width=600" name="Espadrille sandals" price="$19.00" />
        </div>

    );
}

export default Page3_item7