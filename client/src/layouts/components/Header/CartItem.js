import { useState } from 'react'

import { HiMinusSm } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'

const CartItem = ({ data }) => {

    const [amount, setAmount] = useState(data.amount)

    return (
        <div className="flex items-center mb-2">
            <img className="w-24" src={data.urlImage} />
            <div className="pl-4">
                <p className="font-medium hover:underline">{data.title}</p>
                <p className=""><span className="font-medium">Color: </span>{data.color}</p>
                <p className="">${data.price}.00</p>
                <div className="flex items-center mt-2.5">
                    <div className="flex items-center overflow-hidden rounded bg-slate-200">
                        <button className="p-2" onClick={() => setAmount(prev => prev - 1 < 1 ? 1 : prev - 1)}>
                            <HiMinusSm />
                        </button>
                        <input className="w-9 text-center bg-slate-200 outline-none" type="number" value={amount} min="0" onChange={(e) => setAmount(e.target.value)} />
                        <button className="p-2" onClick={() => setAmount(prev => +prev + 1)}>
                            <IoMdAdd />
                        </button>
                    </div>
                    <button className="opacity-80 text-sm underline p-2 ml-2">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem