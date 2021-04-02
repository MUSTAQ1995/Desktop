import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination } from "react-table";
import REQUEST_DATA from "./REQUEST_DATA.json";
import { Link } from 'react-router-dom';
import COLUMNS from "./Columns";
import { BrowserRouter as Router } from "react-router-dom";
import "./Request_Table.css";
import Button from "@material-ui/core/Button";
import axios from "axios";

//This is the table which is created using the react-table library with pagination and the data is local.

function RequestTable() {
    //The commented code is inot in use the data used is lical data from JSON file 
    // const [table, setTable ] = useState([])
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:1337/recruitments")
    //     .then(function(res){
    //         console.log(res.data);
    //         setTable(res.data);
    //     })
    //     .catch(function(err){
    //         //console.log(err)
    //     })
       
    // },[])
    
    // //console.log(typeof(table))
    // const tableData = table;
    // //console.log(tableData)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => REQUEST_DATA, [])

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        pageOptions,
        state,
        setPageSize,
        canNextPage,
        canPreviousPage,
        prepareRow,
    } = useTable({
        columns,
        data,
    }, useSortBy, usePagination)
    const { pageIndex, pageSize } = state

    return (
        <div className="main__table">
            <Router>
              <Link to="/Home">
                <div className="goback__button">
                  <Button   
                    color="primary" 
                    variant="contained"
                    className="back__button"
                    style={{ textDecoration: "none" }}
                >Go Back to Search</Button>
                </div>
              </Link>
            </Router>
            
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? "⏬":"⏫"): ""}
                                    </span>
                                </th>
                            ))
                        }
                        <th></th>
                    </tr>  
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map( cell => {
                                    return <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                                })
                            }
                        <td></td>
                        </tr>
                    )
                })}
              
            </tbody>
        </table>
        <div className="buttons">
            <Button 
              onClick={() => previousPage()}
              variant="contained"
              color="primary"
              disabled={!canPreviousPage}
            >Previous</Button>
            <span>
                Page{" "}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
            </span>
            <select 
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
            >
                {
                    [2,4,8,16,20].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        Show Rows {pageSize}
                        </option>
                    ))
                }
            </select>
            <Button 
              onClick={() => nextPage()}
              variant="contained"
              color="primary"
              disabled={!canNextPage}
            >Next</Button>
        </div>
        </div>
    )
}

export default RequestTable
