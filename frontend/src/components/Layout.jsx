import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

//Component for the Layout of the pages
//This component is used to wrap the content of the rest of the pages and provide a consistent layout across all pages.
//The header links to the rest of pages and is consistent across all pages. The children prop is used to render the content of the rest of the pages.
function Layout({page, children}) {
    return ( 
    <>
    <header>
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>Mr. Thompson</h1>
            </div>
            <ul>
                <li><Link className={page === 'home' ? 'active' : ''} to="/">Home</Link></li>
                <li><Link className={page === 'about' ? 'active' : ''} to="/about">About Me</Link></li>
                <li><Link className={page === 'projects' ? 'active' : ''} to="/projects">Projects</Link></li>
                <li><Link className={page === 'services' ? 'active' : ''} to="/services">Services</Link></li>
                <li><Link className={page === 'contact' ? 'active' : ''} to="/contact">Contact</Link></li>
            </ul>
        </nav>
	</header>
    {children}
    </> 
    );
}

export default Layout;