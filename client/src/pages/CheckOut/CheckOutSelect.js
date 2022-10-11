import { useState } from 'react'

import { RiArrowDownSFill } from 'react-icons/ri';

const CheckOutSelect = ({ title, options, onChange }) => {

    const [curValue, setCurValue] = useState();

    const handleOnChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="relative">
            <label className="absolute top-1 px-2 text-xs text-gray-500 pointer-events-none">{title}</label>
            <select onChange={handleOnChange} className="font-medium px-2 pt-5 pb-2 appearance-none border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full">
                {options.map((item, index) => (
                    <option className="py-4" key={index} value={item.code}>{item.name}</option>
                ))}
            </select>
            <span style={{ position: 'absolute', top: '50%', right: "0", transform: 'translateY(-50%)' }} className="pointer-events-none px-3 py-1 border-l border-slate-300">
                <RiArrowDownSFill />
            </span>
        </div>
    )
}

export default CheckOutSelect