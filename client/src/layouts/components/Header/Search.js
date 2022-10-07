import { useState, useEffect } from 'react'

import OutsideAlerter from '../../../components/OutsideAlerter'

import { IoMdClose } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'

const Search = ({ setShowSearch }) => {

    const [searchStyle, setSearchStyle] = useState("-translate-y-full")
    const [inputSearch, setInputSearch] = useState("")

    const resultsSearch = [
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/16-a_0350a41c-990c-4cc9-98eb-c7f152efd4dc.jpg?v=1628348649",
            title: "How To Raise A Loaf",
            price: "15",
        },
    ]

    const closeSearch = () => {
        setSearchStyle("-translate-y-full")

        setTimeout(() => {
            setShowSearch(false)
        }, 300);
    }

    useEffect(() => {
        setSearchStyle("translate-y-0")
    }, [])

    return (
        <div className="flex fixed top-0 right-0 w-full h-screen bg-black bg-opacity-30 z-50">
            <OutsideAlerter todo={closeSearch} compStyle={"relative w-full h-full h-full lg:h-fit bg-white px-4 lg:px-12 py-4 md:py-8 transition duration-300 " + searchStyle}>
                <div className="flex justify-between items-center md:hidden mb-2">
                    <h3 className="text-base font-medium">Search our store</h3>
                    <button className="text-black p-2 text-xl" onClick={closeSearch}>
                        <IoMdClose />
                    </button>
                </div>
                <div className="flex justify-center">
                    <div className="w-full md:w-2/3 flex justify-center items-center">
                        <div className="relative w-full md:mx-28 flex border border-black rounded">
                            <input
                                type="text"
                                className="w-full h-11 outline-none px-4"
                                placeholder="Search products"
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                            <button className="absolute top-px right-0 py-3 px-3.5 text-xl">
                                <BiSearch />
                            </button>
                        </div>
                    </div>
                </div>
                {!inputSearch
                    ?
                    <div className="flex md:justify-center mt-3 flex-wrap">
                        <span className="text-[#666] mr-4">Popular Searches:</span>
                        <div className="flex items-center flex-wrap">
                            <a hred="#" className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">T-Shirt</a>
                            <a hred="#" className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">Blue</a>
                            <a hred="#" className="cursor-pointer underline mr-4 hover:text-gray-800 whitespace-nowrap">Jacket</a>
                        </div>
                    </div>
                    :
                    <div className="">
                        <p className="mt-9 mb-7 text-center text-2xl text-slate-400">Results for "<span className="text-black">{inputSearch}</span>"</p>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 overflow-y-auto no-scroll heightCart">
                            {resultsSearch.map((item, index) => (
                                <div key={index}>
                                    <img className="cursor-pointer w-48 mb-3" src={item.urlImage} />
                                    <p className="font-medium">{item.title}</p>
                                    <p className="mt-1">${item.price}.00</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </OutsideAlerter>
        </div>
    )
}

export default Search