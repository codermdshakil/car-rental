import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './QuestionAndAnd.css';

const QuestionAndAnd = () => {
    return (
        <div>
            <Container>
                <h1 className='qa-title'> Question and Answers </h1>
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-10 d-block m-auto">
                        <div className="question-box">
                            <h5><b>Question 1. </b> What is context API ?</h5>
                            <p> <b className='anser'>Answer : </b> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. It's make developer life easy.</p>
                        </div>
                        <div className="question-box">
                            <h5><b>Question 2. </b> What is Sementic tag ?</h5>
                            <p> <b className='anser'>Answer : </b>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.  HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster. <b> Examples</b> of semantic elements: <b> {'<form> , <table> , and <article>'}</b> - Clearly defines its content.</p>
                        </div>
                        <div className="question-box3">
                            <h5><b>Question 3. </b> What is the different between Inline Block and Inline Block elements ?</h5>
                            <p> <b className='anser'>Answer : </b>One common use for display: inline-block is to display list items horizontally instead of vertically. <b>display: inline-block</b> allows to set a width and height on the element. Also, with display: inline-block, the top and bottom margins/paddings are respected.  An inline element does not start on a new line and it only takes up as much width as necessary. The {'<div> '}element is a block-level and is often used as a container for other HTML elements. <b>Example </b> of Inline-Block  elements: {' <span>, <a>, <code>, <strong>, <img>, <cite>, <button>, <input>, <textarea>, <select>, <small> are some of the inline tags.'}</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default QuestionAndAnd;