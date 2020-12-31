import React from 'react';
import AlienButton from '../common/alienButton';


const HomeBody = () => {
    return (
        <div id="home-body-container" className="container rounded">
            <div className="row justify-content-center">
                <div className="col text-center">
                    <h3>Hi, I'm Ryan</h3>
                    <p>
                        I love writing code to build cool applications. Click the button to check out my personal favorite!
                    </p>
                    <AlienButton
                        name="Typing Speed Test"
                        sendUserTo="/typing-test"
                        externalLink={false}
                        targetValue="_blank"
                        pageOnWebsite={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeBody;