import axios from 'axios';
import React,{ useState, useEffect,useMemo } from 'react';
import { useTable } from "react-table";
import { COLUMNS } from "./TableColumns";
import "./Request_Table.css";  

function Table() {
const [tabledata, setTableData] = useState([""]);
useEffect((res) => {
    axios.get("https://reqres.in/api/users?page=2")
    .then(res)
    .then((res)=>{
        console.log(res.data)
        setTableData([res.data])
    })
},[])

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => tabledata[0].data, [])
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <>
        <h1>this is a table</h1>
        <table {...getTableProps()}>        
            <thead>
            {headerGroups.map((headerGroup) => {
                <tr {...headerGroup.getHeaderGroupProps()}>
                    { headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            })}
        </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })
                        }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
       
    )
}

export default Table
