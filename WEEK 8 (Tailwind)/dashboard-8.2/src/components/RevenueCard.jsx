export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white p-4 rounded-lg shadow-md w-64">
        <div>
            {title}
        </div>
        <div className='flex' justifyContent='space-between'>
            <div className='text-3xl font-bold'>
                {amount}
            </div>
            <div className='text-gray-500'>
                {orderCount} Orders
            </div>
        </div>
    </div>

}