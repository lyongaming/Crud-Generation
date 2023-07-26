import React from "react";

const Buttons = ({ table }) => {
    ReadData() {
        fetch(`localhost:8080/${table}`)
    }

    return (
        <button onClick={ReadData}>Read</button>
    );

}

export default Buttons;