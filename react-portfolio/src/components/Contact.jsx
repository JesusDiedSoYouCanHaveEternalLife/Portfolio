import Layout from "./Layout";
import logo from '../assets/logo.webp';
import profile from '../assets/profile_real.png';

function ContactComponent() {
    return ( 
    <Layout>
    <main className="custom-page">
		<div className="heading">
            <h2 className="heading-back">Contact</h2>
            <h2 className="heading-txt"><span className="txt-white">Get</span> in Touch</h2>
        </div>
        <div className="body">
            <div className="contact-left">
                <h2>Contact Information</h2>
                <p>If you have any questions or would like to discuss a project, feel free to reach out to me using the contact information below or by filling out the contact form.
                    <br/>Or contact me at: andrellekthompson@gmail.com
                </p>
            </div>
            <div className="contact-right">
                <form className="contact-form" >
                    <input type="text" id="name" name="name" required placeholder="Enter Your Name" />
                    <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
                    <textarea id="message" name="message" rows="5" required placeholder="Enter Your Message"></textarea>
                    <a  className="p-button" href="about.html"><i className="fa fa-arrow-right"> </i>  Send Message</a>
                </form>
            </div>
        </div>
	</main>
    </Layout>);
}

export default ContactComponent;