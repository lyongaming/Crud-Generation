import React from "react";

import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

const Table = ({ columns }) => {

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map(column => <TableHeader column_name={column.name} />)
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        column.map(column => <TableRow column_data={column.data} />)
                    }
            </tbody>
        </table>
    );

}

export default Table;