import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { clearJWT, getUsername, isAuthenticated } from './auth/auth-helper';


//Component for the Layout of the pages
//This component is used to wrap the content of the rest of the pages and provide a consistent layout across all pages.
//The header links to the rest of pages and is consistent across all pages. The children prop is used to render the content of the rest of the pages.
function Layout({page, children}) {
    const isLoggedIn = isAuthenticated(); 
    const navigate = useNavigate();
    const username = getUsername();

    const handleLogout = () => {
        clearJWT();
        navigate("/users/signin");
    };

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
                <li><Link className={page === 'projects' ? 'active' : ''} to="/projects/list">Projects</Link></li>
                <li><Link className={page === 'services' ? 'active' : ''} to="/services/list">Services</Link></li>
                <li><Link className={page === 'references' ? 'active' : ''} to="/references/list">References</Link></li>
                <li><Link className={page === 'users' ? 'active' : ''} to="/users/list">Users</Link></li>
                <li><Link className={page === 'contact' ? 'active' : ''} to="/contact">Contact</Link></li>

                {isLoggedIn && (
                    <span className="welcome-msg">
                        Welcome, {getUsername()}!
                    </span>
                )}
                    
                {!isLoggedIn && (
                    <li><Link className={page === 'signin' ? 'active' : ''} to="/users/signin">Sign In</Link></li>
                )}
                {!isLoggedIn && (
                    <li><Link className={page === 'register' ? 'active' : ''} to="/users/register">Register</Link></li>
                )}
                {isLoggedIn && (
                    <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                )}

            </ul>
        </nav>
	</header>
    {children}
    </> 
    );
}

export default Layout;