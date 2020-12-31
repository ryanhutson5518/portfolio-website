import React from 'react';


const ContactBody = () => {
    return (
        <div id="contact-body-container" className="container rounded" >
            <div className="row text-center">
                <div className="col-12">
                    <h3><i className="fa fa-home"></i><p className="d-inline"> Plainfield, IL 60585</p></h3>
                </div>
                <div className="col-12">
                    <h3><i className="fa fa-mobile-phone"></i><a className="d-inline alien-color-link" href="tel:18155570075"> 815-557-0075</a></h3>
                </div>
                <div className="col-12">
                    <h3><i className="fa fa-envelope"></i><p className="d-inline"> ryanhutson5518@gmail.com</p></h3>
                </div>
                <div className="col-12">
                    <h3><i className="fa fa-linkedin-square"></i><a className="d-inline alien-color-link" href="https://www.linkedin.com/in/ryanhutson5518/" target="_blank" rel="noreferrer"> linkedin.com</a></h3>
                </div>
                <div className="col-12">
                    <h3><i className="fa fa-github"></i><a className="d-inline alien-color-link" href="https://github.com/ryanhutson5518" target="_blank" rel="noreferrer"> github.com</a></h3>
                </div>
            </div>
        </div>
    );
};

export default ContactBody;
