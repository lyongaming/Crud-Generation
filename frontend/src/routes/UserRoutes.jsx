import { Route } from "react-router-dom";

import UsersCrud from "../pages/UsersCrud"

const UserRoute = () => {
    return <Route path="/users">
        <UsersCrud />
    </Route>
}

export default UserRoute;