import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () => {
    return(
        <div className="sidebar">
            <Link to="/"><i className="fa fa-fw fa-home"></i>Home</Link>
            <Link to="/service"><i className="fa fa-fw fa-wrench"></i>Service</Link>
            <Link to="/contact"><i className="fa fa-fw fa-envelope"></i>Contact</Link>
        </div>
    )
}

export default Navigation;