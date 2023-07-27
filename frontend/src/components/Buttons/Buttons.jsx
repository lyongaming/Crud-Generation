import React from "react";

const Buttons = ({ table, getData }) => {
    const ReadData = async() => {
        await fetch(`localhost:8080/${table}`)
    }

    return (
        <button onClick={getData}>Read</button>
    );

}

export default Buttons;