import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <div className="main">
            <h2>Home Page</h2>
            <ul>
                <li> <Link to="/post/1">Satu</Link></li>
                <li> <Link to="/post/2">Dua</Link></li>
                <li> <Link to="/post/3">Tiga</Link></li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur porro corrupti excepturi unde hic delectus debitis dignissimos at, 
                sequi iusto omnis? Reiciendis alias molestiae, cumque esse explicabo odit expedita obcaecati.
            </p>
        </div>
    )
}
export default Home;