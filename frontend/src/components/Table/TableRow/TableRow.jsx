import React from "react";

const TableRow = ([ table_row ]) => {

    return (
        <tr>
            {
                table_row.map(data => <td>{data}</td>);
            }
        </tr>
    );

}