import { Container } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './CustomerReview.css';


const CustomerReview = () => {

    const [reviews, setReviews] = useReviews();
    console.log(reviews);

    return (
        <Container>
            <div className='review-container'>
                <h3 className='review-title'> Customers Reviews  </h3>
                <div className='row pt-5'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default CustomerReview;