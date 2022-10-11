import { useState } from 'react'

import { AiOutlineStar } from 'react-icons/ai';
import { RiShoppingBagLine } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai';
import { TbArrowsDownUp } from 'react-icons/tb';


const HomeBestSellerItem = ({ data }) => {

    const [colorCur, setColorCur] = useState(0)
    const [isHoverCard, setIsHoverCard] = useState(false);
    const [isHoverImage, setIsHoverImage] = useState(false);

    const cardAction = [
        {
            title: "Add to wishlist",
            icon: <AiOutlineStar />
        },
        {
            title: "select options",
            icon: <RiShoppingBagLine />
        },
        {
            title: "Quick view",
            icon: <AiOutlineEye />
        },
        {
            title: "Copare",
            icon: <TbArrowsDownUp />
        }
    ]

    return (
        <div>
            <div className={"cursor-pointer md:px-4 pb-10 transition duration-200 " + (isHoverCard ? "shadow-lg" : "shadow-none	")} onMouseEnter={() => setIsHoverCard(true)} onMouseLeave={() => setIsHoverCard(false)}>
                <div className="relative">
                    <div className="overflow-hidden relative" onMouseEnter={() => setIsHoverImage(true)} onMouseLeave={() => setIsHoverImage(false)}>
                        {/* Cart Image */}
                        <div>
                            {/* Cart Image Main*/}
                            <div>
                                <img className="w-64" src={data.urlImage} />
                            </div>
                            {/* Cart Image Hover*/}
                            <div>
                                <img className={"w-64 absolute top-0 left-0 z-10 transition duration-700 " + (isHoverImage ? "opacity-100" : "opacity-0")} src={data.urlImageHover} />
                            </div>
                        </div>
                        {/* Card Action */}
                        <div className={"hidden md:block w-full absolute -bottom-12 left-0 transition duration-200 z-20	" + (isHoverCard ? "-translate-y-16" : "")}>
                            <div className="flex items-center justify-center">
                                <span className="rounded overflow-hidden shadow-md">
                                    {cardAction.map((item, index) => (
                                        <button key={item.title} className={"p-3.5 bg-white hover:bg-black hover:text-white transition duration-200 " + (index != 0 ? "border-l" : "")}>
                                            {item.icon}
                                        </button>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="font-medium mb-1">{data.title}</p>
                    <p className="">${data.price}.00</p>
                    <div className="mt-3 flex items-center flex-wrap">
                        {data.color.map((item, index) => {
                            if (colorCur == index)
                                return (
                                    <div key={index} onClick={() => setColorCur(index)} className={"w-6 h-6 rounded-full border border-black flex items-center justify-center " + (index != 0 ? "ml-2" : "")}>
                                        <div style={{ backgroundColor: `${item}` }} className="w-4 h-4 rounded-full">
                                        </div>
                                    </div>
                                )
                            else
                                return (
                                    <div onClick={() => setColorCur(index)} key={index} style={{ backgroundColor: `${item}` }} className={"w-6 h-6 rounded-full " + (index != 0 ? "ml-2" : "")}></div>
                                )
                        })}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default HomeBestSellerItem