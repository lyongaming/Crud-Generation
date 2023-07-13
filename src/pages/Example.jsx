import React from "react";

const Example = () => {

    return (
        <>
            <h1>Header</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>Daniel</td>
                    <td>884464645</td>
                </tr>
                <tr>
                    <td>Donato</td>
                    <td>884464645</td>
                </tr>
            </table>
            <br />
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
                <br />
                <label htmlFor="phone">Phone: </label>
                <input type="text" name="phone" id="phone" />
            </form>
        </>
    );

}

export default Example;