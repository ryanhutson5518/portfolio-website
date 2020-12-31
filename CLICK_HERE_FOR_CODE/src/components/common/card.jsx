import React, { useState } from 'react';
import AlienButton from '../common/alienButton';
import ReadMore from '../common/readMore';

// parameters are for the title of the card, and text = description
// Auto uses <ReadMore /> ... so if you do not want it, some code needs to be commented out

// Look at projectsBody.jsx for a sample of how to generate a card


const Card = ({ header, title, text, readMoreID, buttonID, name, sendUserTo, externalLink, targetValue, pageOnWebsite }) => {
    const [wordCounter] = useState(text.split(" ").length);

    const handleFirstHalf = text => {
        const finalArray = [];

        if (text.split(" ").length >= 20) {   // change all appearances of 20 if you want the text to be shorter or longer before the read more button appears
            const textArray = text.split(" ", 20);   // no space grabs every letter. A space grabs every word
            for (let i in textArray) {
                finalArray.push(textArray[i] + " ");
            }

            const secondHalf = handleSecondHalf(text, wordCounter);
            const returnArray = [finalArray, secondHalf];
            return returnArray;
        }

        else return text;
    };

    const handleSecondHalf = (text, wordCounter) => {
        const finalArray = [];

        const howManyToSplice = wordCounter - 20;   // this value determines how many words to splice

        const textArray = text.split(" ", wordCounter);
        const spliceArray = textArray.splice(20, howManyToSplice);   // starting position = 20 ... howManyToSplice = words to splice

        for (let i in spliceArray) {
            finalArray.push(spliceArray[i] + " ");
        }

        return <ReadMore
            key={readMoreID}
            readMoreID={readMoreID}
            array={finalArray}
        />   // readMoreID is a property from projectsBody.jsx that gives the card component a key. But I also want to pass that id value to readMore
    };

    // HTML return
    return (
        <div className="card container" id="projects-card">
            <div className="card-header text-left" id="cardHeader">{header}</div>
            <div className="card-body row">
                <h5 className="card-title col-12">{title}</h5>
                <div className="card-text col-12">{handleFirstHalf(text)}</div>
                <div className="col-12 text-center">
                    <AlienButton
                        key={buttonID}
                        name={name}
                        sendUserTo={sendUserTo}
                        externalLink={externalLink}
                        targetValue={targetValue}
                        pageOnWebsite={pageOnWebsite}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;


//{handleSecondHalf(text, wordCounter)}