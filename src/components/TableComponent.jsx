import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table';
import { COLUMNS } from './Columns'

import './TableComponent.css'


function TableComponent({salesData}) {
    //const actualSalesData = salesData.sales;
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => salesData, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, 
    useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

  return (
    <table {...getTableProps()}>
        <thead className='table-header'>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
                                {column.render('Header')} 
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? '  v': '  ^' ): ''}
                                </span>
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...getTableBodyProps}>
            {
                rows.map( row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell, index) => {
                                    return <td {...cell.getCellProps()}>
                                        {
                                            cell.render('Cell')
                                        }
                                        </td>
                                })
                            }
                            
                        </tr>
                    )
                })
            }


        </tbody>
    </table>

  )
}

export default TableComponent