import CheckOutForm from './CheckOutForm'
import CheckOutSummaryItem from './CheckOutSummaryItem'

const index = () => {
    return (
        <div className="flex lg:flex-row-reverse flex-wrap px-3 lg:pt-4 lg:px-12">
            <div className="w-full lg:w-2/5">
                <CheckOutSummaryItem />
            </div>
            <div className="w-full lg:w-3/5">
                <CheckOutForm />
            </div>
        </div>
    )
}

export default index