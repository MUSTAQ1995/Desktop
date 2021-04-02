import React, { useMemo } from 'react';
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./Columns";
import "./Tables.css"

function PaginationTable() {
    
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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
        gotoPage,
        pageCount,
        prepareRow,
    } = useTable({
        columns,
        data,
        // initialState: { pageIndex: 2}
    }, usePagination);

    const { pageIndex, pageSize } = state;
    //These are basically function and arrays that the useTable hook from
   // the react table package has given to us to enable easy table creation.

    return (
        <>
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
                  page.map((row) => {
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
      </table>
      <div>
          <span>
              page{' '}
              <strong>
                  {pageIndex+ 1} of { pageOptions.length}
              </strong>{ " "}
          </span>
          <span>
              |Go to Page: {" "}
              <input type="number" defaultValue={pageIndex + 1}
                onChange={ e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }}
                style={{ width: "50px"}}
              />
          </span>
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value)) }>
             {
                 [10, 20, 25, 50].map(pageSize => (
                     <option key={pageSize} value={pageSize}>
                       show{ pageSize}
                     </option>
                 ))
             }
          </select>
          <button onClick={() => gotoPage(0)}  disabled={!canPreviousPage} >{"<<"}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
          <button onClick={() => gotoPage(pageCount - 1 )}  disabled={!canNextPage} >{">>"}</button>
      </div>
      </>
    )
}

export default PaginationTable
