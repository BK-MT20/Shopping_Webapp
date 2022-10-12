import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div class="w-23/100 flex-none">
            <div >
                <Link to={props.item}><img src={props.img_link} alt="image here" /></Link>
            </div>
            <div class="text-left mt-5 ">
                <p><Link to={props.item} class="font-medium hover:text-gray-500 transition ease-in-out">{props.name_product}</Link></p>
                <p>{props.price_product}</p>
            </div>

        </div>
    );
}

export default Item