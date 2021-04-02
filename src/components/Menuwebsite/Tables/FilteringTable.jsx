import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./Columns";
import "./Tables.css"
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';

function FilteringTable() {
    
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])
//useMemo hooks ensure that data isn't created on every render.
//    const tableInstance = useTable({
//        //creating a table instance
//         columns,
//         data
//         // columns: columns,
//         // data: data
//     });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({
        columns,data, defaultColumn
    }, useFilters, useGlobalFilter);

    const { globalFilter } = state
    //These are basically function and arrays that the useTable hook from
   // the react table package has given to us to enable easy table creation.

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()}>
          <thead >
              {
                  headerGroups.map(headerGroup => (
                      // Header group is group of header
                      //in our example the every columns belongs to seperate header groups.
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                //for each header we access each column and then for each column we  render the header property.
                                //Header property which corresponds to the column array.
                                <th {...column.getHeaderProps()}>{column.render("Header")}
                                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                                </th>
                            ))
                        }
                    </tr>
                  ))
              }             
          </thead>
          <tbody {...getTableBodyProps} >
              {
                  rows.map((row) => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                            {/* oneach row we access the cell, and with each cell we call 
                            the  render function passing in the ring cell, */}
                            {
                                row.cells.map((cell) => {
                                    return  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })
                                //This gives us the accecess to the individual row cell.
                            }
                         
                        </tr> 
                      )
                  })
              }
              
          </tbody>
          <tfoot>
              {
                  footerGroups.map(footerGroup => (
                      <tr {...footerGroup.getFooterGroupProps()}> 
                        {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps}>
                                   {
                                       column.render("Footer")
                                   }
                                </td>
                            ))
                        }
                      </tr>
                  ))
              }
          </tfoot>
      </table>
      </>
    )
}

export default FilteringTable
