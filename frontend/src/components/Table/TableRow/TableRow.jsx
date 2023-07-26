import React from "react";

const TableRow = ([ column_data ]) => {

    return (
        <tr>
            {
                column_data.map(data => <td>{data}</td>);
            }
        </tr>
    );

}