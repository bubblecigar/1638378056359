// 實作 Data Transformer 將下列輸入資料整合成期望的輸出結果。
// 輸入資料:
const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T0', 'T04']
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 },
}
// 輸出結果:
// const result = [ 
//  {
//   user: { id: ‘U01’, name: ‘Tom’ }, 
//   orders: [
//     { id: ‘T01’, name: ‘A’, price: 499 },
//     { id: ‘T02’, name: ‘B’, price: 599 }, 
//   ]
//  },
// ..., ]

const merge = ({
  userIds,
  orderIds, // why do we need this?
  userOrders,
  userData,
  orderData
}) => userIds.map(
  userId => {
    const user = { id: userId, name: userData[userId] }
    const userOrder = userOrders.find(order => order.userId === userId)
    const orderIds = userOrder ? userOrder.orderIds : []
    const orders = orderIds.map(orderId => ({ id: orderId, ...orderData[orderId] }))
    return { user, orders }
  }
)

const result = merge({
  userIds,
  orderIds,
  userOrders,
  userData,
  orderData
})

console.table(result)