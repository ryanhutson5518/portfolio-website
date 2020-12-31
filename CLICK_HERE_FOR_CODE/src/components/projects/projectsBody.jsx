import React, { useState } from 'react';
import Card from '../common/card';


// !!! IMPORTANT !!! This is where I add cards. They need to be added into the cards state ... follow the example below and then the program will generate a card by itself
// MUST have unique id for each value ... I just count by 1 each time

// ONLY use a href if sending user to somewhere else in the website ... So set pageOnWebsite to false

// This state data passes it's data to Card, then passes it AlienButton components


const ProjectsBody = () => {
    const [cards] = useState([
        {
            header: "Featured",
            title: "Typing Speed Test",
            text: "My favorite program. See how fast you can type Bible verses in the King James Version!",
            cardID: 1,
            readMoreID: 2,
            // If you want a button
            buttonID: 3,   // This value should be used for the key
            name: "Typing Speed Test",
            sendUserTo: "/typing-test",
            externalLink: false,
            targetValue: "_blank",
            pageOnWebsite: true
        },
        {
            header: "ASP.NET Core",
            title: "MVC, SQL Server, Azure, CRUD",
            text: "Application created using MVC architecture in Visual Studio 2019. Lastest .NET 5 Core used. Up and running SQL Server Database created with Microsoft Azure. This application is also hosted on Microsoft Azure. Implementation of CRUD operations. (Create, Read, Update, Delete).",
            cardID: 20,
            readMoreID: 21,
            // If you want a button
            buttonID: 22,   // This value should be used for the key
            name: ".NET 5 MVC Core",
            sendUserTo: "https://mvcproject.azurewebsites.net/",
            externalLink: true,
            targetValue: "_blank",
            pageOnWebsite: false
        },
        {
            header: "Featured",
            title: "Class Project",
            text: "Built using DreamWeaver. Website was created for a class project.",
            cardID: 4,
            readMoreID: 5,
            // If you want a button
            buttonID: 6,   // This value should be used for the key
            name: "Class Project",
            sendUserTo: "https://ryanhutson5518.github.io/class-project/",
            externalLink: true,
            targetValue: "_blank",
            pageOnWebsite: false
        },
        {
            header: "Java",
            title: "Update Companies",
            text: "This program randomly displays 2 companies. Output first displays the original companies and prices of their stock. Then displays the updated stock price on the same run",
            cardID: 7,
            readMoreID: 8,
            // If you want a button
            buttonID: 9,   // This value should be used for the key
            name: "Update Companies",
            sendUserTo: "https://onlinegdb.com/B1cgzxl3v",
            externalLink: true,
            targetValue: "_blank",
            pageOnWebsite: false
        },
        {
            header: "Java",
            title: "Rock, Paper, Scissors",
            text: "Play against the computer. The computer's move is generated at random. So you have a fair chance of winning.",
            cardID: 10,
            readMoreID: 11,
            // If you want a button
            buttonID: 12,   // This value should be used for the key
            name: "Rock, Paper, Scissors",
            sendUserTo: "https://onlinegdb.com/AsJ4vHL68",
            externalLink: true,
            targetValue: "_blank",
            pageOnWebsite: false
        }
    ]);

    return (
        <div id="projects-body-container" className="container">
            <div className="row">
                <div className="container">
                    <div className="row text-center">
                        {cards.map(card => {
                            return (
                                <div key={card.cardID} className="col-12 col-md-6 col-lg-4">   {/* key has to be on the main parent element in this scenario */}
                                    <Card
                                        readMoreID={card.readMoreID}
                                        header={card.header}
                                        title={card.title}
                                        text={card.text}
                                        // For button
                                        buttonID={card.buttonID}
                                        name={card.name}
                                        sendUserTo={card.sendUserTo}
                                        externalLink={card.externalLink}
                                        targetValue={card.targetValue}
                                        pageOnWebsite={card.pageOnWebsite}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBody;

