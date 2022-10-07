import HomeBestSellerItem from './HomeBestSellerItem'

const HomeBestSeller = () => {

    const data = [
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg?v=1628348214&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49a_345f6a56-aa62-4074-8544-b927fd02cfd2.jpg?v=1628348214&width=360",
            title: "Rounded Sunglasses",
            price: "8",
            color: ["#ffd700", "#000000"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57.jpg?v=1628348251&width=720",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57a.jpg?v=1628348251&width=360",
            title: "Linen-blend Shirt",
            price: "17",
            color: ["#8db4d2", "#ffd1dc"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54a_19dcecf7-cb39-40ad-bbbe-4a658277a243.jpg?v=1628348241&width=360",
            title: "Boxy Denim Jacket",
            price: "25",
            color: ["#b1c5d4", "#063e66"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg?v=1628348214&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49a_345f6a56-aa62-4074-8544-b927fd02cfd2.jpg?v=1628348214&width=360",
            title: "Rounded Sunglasses",
            price: "8",
            color: ["#ffd700", "#000000"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57.jpg?v=1628348251&width=720",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57a.jpg?v=1628348251&width=360",
            title: "Linen-blend Shirt",
            price: "17",
            color: ["#8db4d2", "#ffd1dc"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54a_19dcecf7-cb39-40ad-bbbe-4a658277a243.jpg?v=1628348241&width=360",
            title: "Boxy Denim Jacket",
            price: "25",
            color: ["#b1c5d4", "#063e66"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg?v=1628348214&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49a_345f6a56-aa62-4074-8544-b927fd02cfd2.jpg?v=1628348214&width=360",
            title: "Rounded Sunglasses",
            price: "8",
            color: ["#ffd700", "#000000"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57.jpg?v=1628348251&width=720",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/57a.jpg?v=1628348251&width=360",
            title: "Linen-blend Shirt",
            price: "17",
            color: ["#8db4d2", "#ffd1dc"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54a_19dcecf7-cb39-40ad-bbbe-4a658277a243.jpg?v=1628348241&width=360",
            title: "Boxy Denim Jacket",
            price: "25",
            color: ["#b1c5d4", "#063e66"]
        },
        {
            urlImage: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg?v=1628348214&width=533",
            urlImageHover: "https://cdn.shopify.com/s/files/1/0591/1350/4958/products/49a_345f6a56-aa62-4074-8544-b927fd02cfd2.jpg?v=1628348214&width=360",
            title: "Rounded Sunglasses",
            price: "8",
            color: ["#ffd700", "#000000"]
        },
    ]

    return (
        <div className="">
            <p className="text-3xl text-center mb-10">Best Seller</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {data.map((item, index) => (
                    <HomeBestSellerItem key={index} data={data[index]} />
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <button className="w-full lg:w-auto py-2 px-7 font-medium border border-black rounded hover:text-white hover:bg-black hover:scale-110 transition duration-300">
                    Load More
                </button>
            </div>
        </div>
    )
}

export default HomeBestSeller