import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    return (
        <div class=" flex-none">
            <div >
                <Link to={`/product/${item.id}`} state={item}   ><img src={item.urlImage} alt="image here" /></Link>
            </div>
            <div class="text-left mt-5 ">
                <p><Link to={`/product/${item.id}`} state={item} class="font-medium hover:text-gray-500 transition ease-in-out">{item.title}</Link></p>
                <p>{item.price}</p>
            </div>

        </div>
    );
}

export default Item