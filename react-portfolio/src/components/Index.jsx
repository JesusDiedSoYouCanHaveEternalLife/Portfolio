import Layout from "./Layout";
import profile from '../assets/profile.png';
import { Link } from "react-router-dom";

function IndexComponent({page}) {
    return ( 
    <Layout page={page}>
        <main>
            <div className="profile-photo">
                <img src={profile} alt="Profile Photo" />
            </div>
            <div className="intro">
                <h2>Hi, I am Mr. Thompson</h2>
                <h3>Full-Stack Developer</h3>
                <p>My mission is to design and develop reliable, high-quality software solutions that solve real-world problems, deliver measurable value to clients, and create seamless user experiences across web, desktop, and mobile platforms. </p>
                <p><b>Mission Statement:</b><br/><i>"I can do all things through Christ which strengtheneth me."</i></p>
                <Link  className="p-button" to="/about"><i className="fa fa-arrow-right"> </i>  Learn More</Link>
            </div>
        </main>
    </Layout>);
}

export default IndexComponent;