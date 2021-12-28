import React from "react";
import { Route , Link, Switch, useRouteMatch} from "react-router-dom";
const Service = () => {
    const match = useRouteMatch();
    return (
        <div className="main">
            <h2>Service Page</h2>
            <ul>
                <li> <Link to={`${match.url}/computer`}>Computer</Link></li>
                <li> <Link to={`${match.url}/mobile`}>Mobile</Link></li>
            </ul>
            <hr />
                <Switch>
                    <Route path={`${match.url}/computer`}>
                        PC, Monitor
                    </Route>
                    <Route path={`${match.url}/mobile`}>
                        Asus, Iphone, Samsung
                    </Route>
                </Switch>
        </div>
    )
}
export default Service;