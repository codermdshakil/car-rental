import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './About.css';


const About = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-11 d-block m-auto ">
                        <h4 className='about-title'># About of <b>Car Rental</b> website</h4>
                        <ul>
                            <li>This is a Car Review website. In this website I'm used HTML5, CSS3, Bootstrap5, JavaScript and JavaScript library React.</li>
                            <li>In this website for icon I'm used FontAwsome icons</li>
                            <li>To make DeahBoard Chart I'm used Rechart.In this website to make DeshBoard I'm used: 1)Line Charts, 2) Area Chart,  3) Bar Chart,  4) Pie Chart these charts</li>
                            <li>In this website I'm also used React Router. React Router is the best to make single page application(SPA). This website you can visit and used without reload.</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div style={{marginTop:'200px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default About;