import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexComponent from './components/Index';
import AboutComponent from './components/About';
import ContactComponent from './components/Contact';
import ProjectsComponent from './components/projects';
import ServicesComponent from './components/Services';
import proj1 from './assets/proj1.png';
import proj2 from './assets/proj2.png';
import proj3 from './assets/proj3.png';
import proj4 from './assets/proj4.png';
import proj5 from './assets/proj5.png';
import proj6 from './assets/proj6.png';
import appdev from './assets/appdev.webp';
import webdev from './assets/webdev.jpg';
import softdev from './assets/softdev.jpg';

function MainRouter() {
    const items  = [
        {
            image: proj1,
            title: 'Eco Landscaping JA',
            description: 'Landscaping website developed for a client in Jamaica.'
        },
        {
            image: proj2,
            title: 'PCA Accounting',
            description: 'Accounting services website developed for a client.'
        },
        {
            image: proj3,
            title: 'St. Aubyn Tree Services',
            description: 'Tree services website developed for a client.'
        },
        {
            image: proj4,
            title: 'HearMe Counselling',
            description: 'Counselling services website developed for a client.'
        },
        {
            image: proj5,
            title: 'KB Web Development',
            description: 'Web development services website developed for a client.'
        },
        {
            image: proj6,
            title: 'Kiki Beauty  Products',
            description: 'Beauty products website developed for a client.'
        }
    ];
    const services = [
        {
            image: webdev,
            title: 'WEBSITE DESIGN / DEVELOPMENT',
            description: 'Get your own professionally built website for your business. We build a wide range of websites using multiple technologies.'
        },
        {
            image: appdev,
            title: 'ANDROID / iOS APP DEVELOPMENT',
            description: 'Develop custom mobile applications for Android and iOS platforms tailored to your business needs.'
        },
        {
            image: softdev,
            title: 'WINDOWS / MAC SOFTWARE DEVELOPMENT',
            description: 'Develop custom software applications for Windows and Mac platforms to meet your specific business requirements.'
        }
    ];
    return ( 
    <Routes>
        <Route path='/' element={<IndexComponent page={"home"} />} />
        <Route path='/about' element={<AboutComponent page="about" />} />
        <Route path='/contact' element={<ContactComponent page="contact" />} />
        <Route path='/projects' element={<ProjectsComponent page="projects" items={items} />} />
        <Route path='/services' element={<ServicesComponent page="services" items={services} />} />
    </Routes> );
}

export default MainRouter;