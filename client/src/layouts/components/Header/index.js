import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import Search from './Search'
import Cart from './Cart'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { BiSearch } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'


const Header = () => {
    // const user = useSelector(state => state.user)

    const [showSearch, setShowSearch] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const openSearch = () => {
        setShowSearch(true)
    }

    const onClickCart = () => {
        setShowCart(true)
    }

    return (
        <>
            <AnnouncementBar />
            <div className="flex items-center px-4 lg:px-12 py-3 shadow">
                <div className="flex-1 flex items-center">
                    <Navbar />
                </div>
                <div className="w-36">
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/3.png?v=1628328728&width=360" />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-end">
                    <>
                        <Tippy content="Search">
                            <div className="cursor-pointer px-2 lg:px-3" onClick={openSearch}>
                                <BiSearch className="text-xl" />
                            </div>
                        </Tippy>
                        {showSearch &&
                            <Search setShowSearch={setShowSearch} />
                        }
                        {/* ---------------------------------------------------------------- */}
                        <Tippy content="Cart">
                            <div className="relative cursor-pointer px-2 lg:px-3" onClick={onClickCart}>
                                <RiShoppingBagLine className="text-xl" />
                                <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-1 border-white dark:border-gray-900">
                                    0
                                </div>
                            </div>
                        </Tippy>
                        {showCart &&
                            <Cart setShowCart={setShowCart} />
                        }
                        {/* ---------------------------------------------------------------- */}
                        <Link to="/signin">
                            <Tippy content="Account">
                                <div className="hidden lg:flex cursor-pointer px-2 lg:px-3">
                                    <FiUser className="text-xl" />
                                </div>
                            </Tippy>
                        </Link>
                    </>
                </div>
            </div>
        </>
    )
}

export default Header