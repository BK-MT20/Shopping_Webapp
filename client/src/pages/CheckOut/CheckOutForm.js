import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select';

import CheckOutInput from "./CheckOutInput"

import { Link } from 'react-router-dom'

import { RiArrowLeftSLine } from 'react-icons/ri';

const CheckOutForm = () => {

	const defaultProvince = { label: "Tỉnh Bà Rịa - Vũng Tàu", value: "77" }
	const defaultDistrict = { label: "Huyện Xuyên Mộc", value: "751" }
	const defaultWard = { label: "Thị trấn Phước Bửu", value: "26620" }
	const defaultAddress = "88/88 Tran Hung Dao"

	const optionsAddress = [{ label: "Default Address [Customer1]", value: "0" }, { label: "New Address", value: "1" }]

	const selectStyle = "font-medium text-sm"

	const [curOptionProvince, setCurOptionProvince] = useState()
	const [curOptionDistrict, setCurOptionDistrict] = useState()
	const [curOptionWard, setCurOptionWard] = useState()

	const resetAddressDefault = () => {
		setCurOptionProvince(defaultProvince)
		setCurOptionDistrict(defaultDistrict)
		setCurOptionWard(defaultWard)
		setOrderValue((prev) => ({
			...prev,
			address: defaultAddress
		}))
	}

	const handleChangeNewOptionAddress = () => {
		setCurOptionProvince({ label: "", value: "" })
		setCurOptionDistrict({ label: "", value: "" })
		setCurOptionWard({ label: "", value: "" })
		setOrderValue((prev) => ({
			...prev,
			address: ""
		}))
	}

	const [orderValue, setOrderValue] = useState({
		optionAddress: "0",
		address: '',
		firstName: '',
		lastName: '',
		note: '',
	})
	const [provinceList, setProvinceList] = useState([])
	const [districtList, setDistrictList] = useState([])
	const [wardList, setWardList] = useState([])

	const onClickProvince = () => {
		if (provinceList.length) return
		axios.get('https://provinces.open-api.vn/api/p/')
			.then(res => {
				const response = res.data
				let curArr = []
				response.map(item => {
					curArr.push({ label: item.name, value: item.code })
				})
				setProvinceList(curArr)
			})
	}

	const onChangeProvinceValue = (provinceCode) => {
		setDistrictList([])
		setWardList([])
		axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
			.then(res => {
				const response = res.data.districts
				let curArr = []
				response.map(item => {
					curArr.push({ label: item.name, value: item.code })
				})
				setDistrictList(curArr)
			})
	}

	const onChangeDistrictValue = (districtCode) => {
		axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
			.then(res => {
				const response = res.data.wards
				let curArr = []
				response.map(item => {
					curArr.push({ label: item.name, value: item.code })
				})
				setWardList(curArr)
			})
	}

	const handleOnchangeInput = (e) => {
		setOrderValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const confirmOrder = () => {
		console.log(curOptionProvince)
		console.log(curOptionDistrict)
		console.log(curOptionWard)
		console.log(orderValue);
	}

	useEffect(() => {
		resetAddressDefault()
	}, [])

	return (
		<div className="lg:pr-10">
			<p className="text-2xl pt-4 lg:pt-0 pb-4">Shipping address</p>
			<div className="mb-6">
				<Select
					options={optionsAddress}
					defaultValue={optionsAddress[0]}
					onChange={e => {
						setOrderValue((prev) => ({ ...prev, optionAddress: e.value }))
						if (e.value == 0) {
							resetAddressDefault()
						}
						else if (e.value == 1) {
							handleChangeNewOptionAddress()
						}
					}}
					className={selectStyle}
				/>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mb-6">
				<div>
					<p className="mb-1 font-medium">Province</p>
					<div onClick={onClickProvince}>
						<Select
							options={provinceList}
							onChange={(e) => {
								setCurOptionProvince({ label: e.label, value: e.value })
								onChangeProvinceValue(e.value)
							}}
							value={curOptionProvince}
							isDisabled={orderValue.optionAddress == 0}
							className={selectStyle}
						/>
					</div>
				</div>
				<div>
					<p className="mb-1 font-medium">District</p>
					<Select
						options={districtList}
						onChange={(e) => {
							setCurOptionDistrict({ label: e.label, value: e.value })
							onChangeDistrictValue(e.value)
						}}
						value={curOptionDistrict}
						isDisabled={orderValue.optionAddress == 0}
						className={selectStyle}
					/>
				</div>
				<div>
					<p className="mb-1 font-medium">Ward</p>
					<Select
						options={wardList}
						onChange={(e) => setCurOptionWard({ label: e.label, value: e.value })}
						value={curOptionWard}
						isDisabled={orderValue.optionAddress == 0}
						className={selectStyle}
					/>
				</div>
			</div>
			<div className="mb-6">
				<CheckOutInput name="address" value={orderValue.address} disabled={orderValue.optionAddress == 0} placeholder="Address" onChange={handleOnchangeInput} />
			</div>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<CheckOutInput name="firstName" value={orderValue.firstName} placeholder="First name (optional)" onChange={handleOnchangeInput} />
				<CheckOutInput name="lastName" value={orderValue.lastName} placeholder="Last name" onChange={handleOnchangeInput} />
			</div>
			<div className="">
				<CheckOutInput name="note" value={orderValue.note} placeholder="Note" onChange={handleOnchangeInput} />
			</div>
			<div className="flex items-center justify-between py-3 lg:mt-20">
				<div className="flex items-center text-sky-600 cursor-pointer">
					<span className="text-2xl"><RiArrowLeftSLine /></span>
					<Link to="/">
						<p className="">Return to shipping</p>
					</Link>
				</div>
				<button onClick={confirmOrder} className="text-white bg-sky-700 p-4 rounded-lg">
					Cofirm order
				</button>
			</div>
		</div>
	)
}

export default CheckOutForm