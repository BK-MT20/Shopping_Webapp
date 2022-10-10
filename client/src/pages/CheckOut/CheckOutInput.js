import React from 'react'

const CheckOutInput = ({ placeholder }) => {
    return (
        <div>
            <input
                type="text" className="font-medium px-2 py-3.5 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full"
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default CheckOutInput