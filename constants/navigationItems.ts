import { order, tracking, transaction, checkout } from "./routes"

const menu = [
    {
        name: 'Order',
        url: order,
    },
    {
        name: 'Transaction',
        url: transaction,
    },
    {
        name: 'Track Order',
        url: tracking,
    },
    {
        name: 'Checkout',
        url: checkout,
    },

]

export { menu }