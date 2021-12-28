import Navigation from "./Navigation/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/index';
import Service from "./Service/index";
import Contact from "./Contact";
import Post from "./Post";

const Routing = () => {
    return(
        <div>
            <Router>
            <Navigation />
                <Switch>
                    <Route exact path="/" children={()=><Home/>}/>
                    <Route path="/service">
                        <Service/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/post/:id"  children={()=> <Post/>}/>
                </Switch>
            </Router>
        </div>
    )
}
export default Routing;