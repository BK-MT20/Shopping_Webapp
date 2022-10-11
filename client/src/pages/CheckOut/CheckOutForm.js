import { useState, useEffect } from 'react'
import axios from 'axios'

import CheckOutSelect from "./CheckOutSelect"
import CheckOutInput from "./CheckOutInput"

import { Link } from 'react-router-dom'

import { RiArrowLeftSLine } from 'react-icons/ri';

const CheckOutForm = () => {

	const optionsAddress = [
		{
			code: "0",
			name: "Default address"
		},
		{
			code: "1",
			name: "New address"
		}
	]

	const [provinceList, setProvinceList] = useState([])
	const [districtList, setDistrictList] = useState([])
	const [wardList, setWardList] = useState([])

	useEffect(() => {
		axios.get('https://provinces.open-api.vn/api/p/')
			.then(res => {
				const response = res.data
				let curArr = []
				response.map(item => {
					curArr.push({ code: item.code, name: item.name })
				})
				setProvinceList(response)
			})
	}, [])

	const onChangeProvinceValue = (provinceCode) => {
		setDistrictList([])
		setWardList([])
		axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
			.then(res => {
				const response = res.data.districts
				let curArr = []
				response.map(item => {
					curArr.push({ code: item.code, name: item.name })
				})
				setDistrictList(response)
			})
	}

	const onChangeDistrictValue = (districtCode) => {
		axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
			.then(res => {
				const response = res.data.wards
				let curArr = []
				response.map(item => {
					curArr.push({ code: item.code, name: item.name })
				})
				setWardList(response)
			})
	}

	const onChangeWardValue = (districtCode) => {

	}
	return (
		<div className="lg:pr-10">
			<p className="text-2xl pt-4 lg:pt-0 pb-4">Shipping address</p>
			<div className="mb-6">
				<CheckOutSelect title="Saves address" options={optionsAddress} />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mb-6">
				<CheckOutSelect title="Province" options={provinceList} onChange={onChangeProvinceValue} />
				<CheckOutSelect title="District" options={districtList} onChange={onChangeDistrictValue} />
				<CheckOutSelect title="Wards" options={wardList} onChange={onChangeWardValue} />
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