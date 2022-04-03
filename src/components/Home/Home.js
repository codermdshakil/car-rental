import React from 'react';
import { Container } from 'react-bootstrap';
import BannerImg from '../../images/banner_car.png';
import './Home.css';



const Home = () => {
    return (
        <Container fluid>
            <div className='home-section'>
                <div className='row d-flex align-items-center'>
                    <div className="col-lg-6">
                        <div className='home-titles'>
                            <h2>Save <span className='highLight'>big</span> with our  <br />  car rental  </h2>
                            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            <button>Book Ride </button>
                        </div>
                    </div>
                    <div className="col-lg-6 order-first order-md-last">
                        <div className='banner-img'>
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;