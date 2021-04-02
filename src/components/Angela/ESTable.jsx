import React from 'react';
import cars from "./Practice";

const [ honda, tesla ] = cars;
console.log(honda);

function ESTable() {
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top Color</th>
                </tr>
                <tr>
                    <td>{tesla.model}</td>
                    <td>{tesla.TopSpeed}</td>
                    <td>{tesla.topColor}</td>
                </tr>
                <tr>
                    <td>{honda.model}</td>
                    <td>{honda.TopSpeed}</td>
                    <td>{honda.topColor}</td>
                </tr>
            </table>
        </div>
    )
}

export default ESTable
