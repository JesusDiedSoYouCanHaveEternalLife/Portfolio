import Layout from "./Layout";
import profile from '../assets/profile_real.png';
import resume from '../assets/resume.pdf';

//Component for the About page
//A Layout component is used to wrap the content of the page and provide a consistent layout across all pages.
function AboutComponent({page}) {
    return ( 
    <Layout page={page}>
        <main>
		<div className="profile-photo">
            <img src={profile} alt="Profile Photo" />
        </div>
        <div className ="intro">
            <h2>About</h2>
            <p><b>Name: Andrelle Thompson</b><br/> A passionate web developer at heart. I specialize in designing and building web applications, mobile applications and desktop applications. To learn more or to reach me click here. </p>
            <a className="p-button" href={resume} target="_blank" rel="noopener noreferrer"><i className="fa fa-arrow-right"> </i>  View Resume</a>
        </div>
	</main>
    </Layout>);
}

export default AboutComponent;