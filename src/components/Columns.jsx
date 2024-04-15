export const COLUMNS = [
    {
        Header : 'WEEK ENDING',
        accessor: 'weekEnding'
    },
    {
        Header : 'RETAIL SALES',
        accessor: 'retailSales',
        Cell: props => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)
    },
    {
        Header : 'WHOLESALE SALES',
        accessor: 'wholesaleSales',
        Cell: props => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)
    },
    {
        Header : 'UNITS SOLD',
        accessor: 'unitsSold',
        Cell: props => new Intl.NumberFormat('en-US').format(props.value)
    },
    {
        Header : 'RETAILER MARGIN',
        accessor: 'retailerMargin',
        Cell: props => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)
    }
]