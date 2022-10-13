const mockProductsData = Array(10).fill(1).map((_, index) => ({
  id: `product${index}`,
  createdAt: new Date(),
  confirmAt: new Date(),
  adminId: `admin${index}`,
  price: 1000 + Math.floor(Math.random() * 100),
}))

const mockOrdersData = Array(100).fill(1).map((_, index) => ({
  id: `order${index}`,
  customerId: `customer${index}`,
  createdAt: new Date(),
  confirmAt: new Date(),
  adminId: `admin${index}`,
  status: Math.random() > 0.5 ? 'confirmed' : 'pending',
  amount: 10000 + index * 100,
  products: Array(Math.floor(Math.random() * 10)).fill(1).map(() => ({
    id: `product${Math.floor(Math.random() * 10)}`,
    quantity: Math.floor(Math.random() * 10)
  })),
  address: `address${index}`
}))

export const getProductsData = (id) => {
  return id ? mockProductsData.find(item => item.id === id) : mockProductsData
}

export const getOrdersData = (id) => {
  return id ? mockOrdersData.find(item => item.id === id) : mockOrdersData
}