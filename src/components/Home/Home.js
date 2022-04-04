import React from 'react';
import { Container } from 'react-bootstrap';
import BannerImg from '../../images/banner_car.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import PieCharts from '../PieCharts/PieCharts';


const Home = () => {

    const [reviews, setReviews] = useReviews();

    const threeReviews = reviews.slice(0, 3);


    return (
        <Container fluid>
            <div className='home-section'>
                <div className='row d-flex align-items-center'>
                    <div className="col-lg-6 col-md-6 col-11  d-block m-auto pb-3">
                        <div className='home-titles'>
                            <h2>Save <span className='highLight'>big</span> with our  <br />  car rental  </h2>
                            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            <button>Book Ride <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faCheckCircle} /> </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12  d-block m-auto order-first order-md-last">
                        <div className='banner-img'>
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                <div className='customers-review py-4'>
                    <h2 style={{ textAlign: 'center', padding: '50px 0px' }}>Customers Review (3)</h2>
                    <div className="row">
                        {
                            threeReviews.map(review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                        }
                        <div style={{textAlign:'center'}}>
                            <Link to={'/reviews'} > <button className='all-review-btn'> See all Reviews <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /> </button></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Home;