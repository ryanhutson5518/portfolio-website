import React from 'react';
import Highschool from '../../img/plainfield_north_highschool.jpg';
import College from '../../img/JJC.jpg';
import js1 from '../../img/certificate-of-completion-for-javascript-basics.pdf';
import jsOOP from '../../img/certificate-of-completion-for-object-oriented-programming-in-javascript.pdf';
import ReactMastery from '../../img/certificate-of-completion-for-mastering-react.pdf';

// if more entries for experience ... copy entire col


const ResumeBody = () => {
    return (
        <div id="resume-body-container" className="container" >
            <div className="row text-center resume-row-border">
                <div className="col-12 col-md-4 mb-5" id="resumeAboutMe">
                    <h1 className="">About me</h1>
                    <p>I am a full stack Web Developer specializing in .NET and React. I am confident in meeting the needs of a client and will go the extra mile to ensure this.</p>
                </div>
                <div className="col-12 col-md-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">Education</h1>
                            </div>
                            <div className="col">
                                <img src={Highschool} alt="" className="education-images" /> <br />
                                <i className="fa fa-asterisk alien-color-link d-inline"></i> Plainfield North Highschool <br />
                                <i className="fa fa-asterisk alien-color-link d-inline"></i> Graduation Year: 2017 <br /><br /><br />
                            </div>
                            <div className="col">
                                <img src={College} alt="" className="education-images" /> <br />
                                <i className="fa fa-asterisk alien-color-link d-inline"></i> Joliet Junior College <br />
                                <i className="fa fa-asterisk alien-color-link d-inline"></i> Computer Programming A.A.S <br />
                                <i className="fa fa-asterisk alien-color-link d-inline"></i> Graduation Year: 2020 <br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center mb-5 mt-5">
                <div className="col-12">
                    <h1>Certifications</h1>
                </div>
                <div className="col-12">
                    <i className="fa fa-asterisk alien-color-link d-inline"></i><a href={js1} target="_blank" rel="noreferer" className="alien-color-link"> JavaScript Mastery Series part 1: Basics</a>
                </div>
                <div className="col-12">
                    <i className="fa fa-asterisk alien-color-link d-inline"></i><a href={jsOOP} target="_blank" rel="noreferer" className="alien-color-link"> JavaScript Mastery Series part 2: Object Oriented Programming</a>
                </div>
                <div className="col-12">
                    <i className="fa fa-asterisk alien-color-link d-inline"></i><a href={ReactMastery} target="_blank" rel="noreferer" className="alien-color-link"> Mastering React</a>
                </div>
            </div>
            <div className="row text-center resume-row-border">
                <div className="col-12">
                    <h1 className="text-center">Experience</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4><span className="experience-title">Web Developer</span></h4>
                    <p className="mt-4">
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Spoon Rivers Designs and Marketing<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Remote<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> May 24, 2020 - September 10, 2020<br />
                    </p>
                    <p className="mt-3 mb-5">My main role here was Front-end and Back-end Website Developer roles. I got to develop a website using Worpress for this company. Hosting was on GoDaddy. The website I created is a little different now, but here is the link <a href="https://www.spoonriverdesigns.com/" className="alien-color-link" target="_blank" rel="noreferrer">Spoon Rivers Designs and Marketing inc.</a></p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4><span className="experience-title">Volunteer IT</span></h4>
                    <p className="mt-4">
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Shorewood Baptist Church<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> @ the church<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> December 1, 2019 - Present<br />
                    </p>
                    <p className="mt-3 mb-5">I handle most of the technical problems here at my church. Sometimes the pastor will need me to add content to the website. I always do this with my own code. An example is I put our welcome video on the website. Each week, I record / live stream the Sunday sermon. I then post the video on YouTube.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4><span className="experience-title">Cart Attendant</span></h4>
                    <p className="mt-4">
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Bolingbrook Golf Club - Seasonal<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Bolingbrook Golf Club<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> August 2018 - November 2019<br />
                    </p>
                    <p className="mt-3 mb-5">
                        - Brought out carts for golfers <br />
                        - We had about 100 active golf members who's names I had memorized <br />
                        - Assisted golfers by carrying their bags to golf cart <br />
                        - Cleaned golfer's clubs</p>
                </div>
                <div className="col-12 col-md-6">
                    <h4><span className="experience-title">Restoration Technician</span></h4>
                    <p className="mt-4">
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Restoronics Inc. - Contract<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Location determined by client<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> January 2017 - October 2018<br />
                    </p>
                    <p className="mt-3 mb-5">
                        - Putting soft goods into bags and carrying them to a van <br />
                        - Making conversation with the client(s). This can be a very hard time for them because part of their house is burnt down. It was important to be uplifting and show them Love and support <br />
                        - Delivering the clean goods back to the client(s) and storing them where the client(s) requested</p>
                </div>
                <div className="col-12 col-lg-6">
                    <h4><span className="experience-title">Cart Attendant</span></h4>
                    <p className="mt-4">
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Tamarack Golf Club - Seasonal<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> Tamarack Golf Club<br />
                        <i className="fa fa-asterisk alien-color-link d-inline"></i> August 2017 - August 2018<br />
                    </p>
                    <p className="mt-3 mb-5">
                        - Work area, parking lot, and paths had to be cleared of all garbage <br />
                        - Cleaned the carts after the golfers were done with their round of golf. <br />
                        - NO trash was to be left in the carts <br />
                        - Carts had to be hosed down completely for at least 3 minutes. NO grass or mud was to be left on the carts <br />
                        - Carts had to be hand dried with towels to ensure there is no water spots in the morning <br />
                        - Carts had to be strategically parked to ensure enough room for the morning workers to get in them <br />
                        - Carts had to have a new set of scorecards, pencils, full sand bottles, and plugged in by the end of the night</p>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default ResumeBody;