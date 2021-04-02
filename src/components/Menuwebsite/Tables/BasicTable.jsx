import React, { useMemo } from 'react';
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./Columns";
import "./Tables.css"

function BasicTable() {
    
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
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
        prepareRow,
    } = useTable({
        columns,data
    });
    //These are basically function and arrays that the useTable hook from
   // the react table package has given to us to enable easy table creation.

    return (
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
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
    )
}

export default BasicTable
