import CheckOutSelect from "./CheckOutSelect"
import CheckOutInput from "./CheckOutInput"

import { Link } from 'react-router-dom'

import { RiArrowLeftSLine } from 'react-icons/ri';

const CheckOutForm = () => {

	const optionsAddress = [
		{
			value: "0",
			title: "Default address"
		},
		{
			value: "1",
			title: "New address"
		}
	]

	return (
		<div className="lg:pr-10">
			<p className="text-2xl pt-4 lg:pt-0 pb-4">Shipping address</p>
			<div className="mb-6">
				<CheckOutSelect title="Saves address" options={optionsAddress} />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mb-6">
				<CheckOutSelect title="City" options={optionsAddress} />
				<CheckOutSelect title="District" options={optionsAddress} />
				<CheckOutSelect title="Village" options={optionsAddress} />
			</div>
			<div className="mb-6">
				<CheckOutInput placeholder="Address" />
			</div>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<CheckOutInput placeholder="First name (optional)" />
				<CheckOutInput placeholder="Last name" />
			</div>
			<div className="">
				<CheckOutInput placeholder="Note" />
			</div>
			<div className="flex items-center justify-between py-3 lg:mt-20">
				<div className="flex items-center text-sky-600 cursor-pointer">
					<span className="text-2xl"><RiArrowLeftSLine /></span>
					<Link to="/">
						<p className="">Return to shipping</p>
					</Link>
				</div>
				<button className="text-white bg-sky-700 p-4 rounded-lg">
					Cofirm order
				</button>
			</div>
		</div>
	)
}

export default CheckOutForm