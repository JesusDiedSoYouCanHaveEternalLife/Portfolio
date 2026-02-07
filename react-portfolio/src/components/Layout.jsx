import logo from '../assets/logo.webp';
import profile from '../assets/profile.png';

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
                <li><a className={page === 'home' ? 'active' : ''} href="index.html">Home</a></li>
                <li><a className={page === 'about' ? 'active' : ''} href="about.html">About Me</a></li>
                <li><a className={page === 'projects' ? 'active' : ''} href="projects.html">Projects</a></li>
                <li><a className={page === 'services' ? 'active' : ''} href="services.html">Services</a></li>
                <li><a className={page === 'contact' ? 'active' : ''} href="contact.html">Contact</a></li>
            </ul>
        </nav>
	</header>
    {children}
    </> 
    );
}

export default Layout;