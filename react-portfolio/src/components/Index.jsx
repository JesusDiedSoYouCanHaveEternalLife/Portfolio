import Layout from "./Layout";
import logo from '../assets/logo.webp';
import profile from '../assets/profile.png';

function IndexComponent() {
    return ( 
    <Layout>
        <main>
            <div className="profile-photo">
                <img src={profile} alt="Profile Photo" />
            </div>
            <div className="intro">
                <h2>Hi, I am Mr. Thompson</h2>
                <h3>Full-Stack Developer</h3>
                <p>My mission is to design and develop reliable, high-quality software solutions that solve real-world problems, deliver measurable value to clients, and create seamless user experiences across web, desktop, and mobile platforms. </p>
                <a  className="p-button" href="about.html"><i className="fa fa-arrow-right"> </i>  Learn More</a>
            </div>
        </main>
    </Layout>);
}

export default IndexComponent;