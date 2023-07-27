import React, { useState, useEffect } from "react";

import Table from "../../components/Table/Table";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";

const PostsCrud = (props) => {

    const [columns, setColumns] = useState([]);
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/tables/posts");
            const data = await response.json();
            setColumns(data.columns);
        }
        fetchData();
    }, []);

    const GetData = async() => {
        const response = await fetch("localhost:8080/posts");
        const data = await response.json();
        setTableRows(data);
    }

    const UpdateData = async() => {
        const response = await fetch("localhost:8080/posts", {
            method: "PUT",
            // AQUI VAN LOS DAATOS
            body: JSON.parse({})    
        });
    }

    return (
        <>
            <h1>posts</h1>
            <Table columns_name={ columns } table_rows={ tableRows } />
            <Inputs table="posts" />
            <Buttons table="posts" getData={ GetData } />
        </>
    );

}

export default PostsCrud;