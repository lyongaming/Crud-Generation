import React from "react";

import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

const Table = ({ columns_name, table_rows }) => {

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns_name.map(column_name => <TableHeader column_name={column_name} />)
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        table_rows.map(table_row => <TableRow table_row={table_row} />)
                    }
            </tbody>
        </table>
    );

}

export default Table;