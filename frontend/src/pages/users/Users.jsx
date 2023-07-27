import React, { useState, useEffect } from "react";

import Table from "../../components/Table/Table";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";

const UsersCrud = (props) => {

    const [columns, setColumns] = useState([]);
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/tables/users");
            const data = await response.json();
            setColumns(data.columns);
        }
        fetchData();
    }, []);

    const GetData = async() => {
        const response = await fetch("localhost:8080/users");
        const data = await response.json();
        setTableRows(data);
    }

    const UpdateData = async() => {
        const response = await fetch("localhost:8080/users", {
            method: "PUT",
            // AQUI VAN LOS DAATOS
            body: JSON.parse({})    
        });
    }

    return (
        <>
            <h1>users</h1>
            <Table columns_name={ columns } table_rows={ tableRows } />
            <Inputs table="users" />
            <Buttons table="users" getData={ GetData } />
        </>
    );

}

export default UsersCrud;