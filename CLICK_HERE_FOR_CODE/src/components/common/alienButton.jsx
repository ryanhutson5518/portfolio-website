import React from 'react';
import { Link } from 'react-router-dom';

// *** MUST have the alien-button styles for this to work
// Look at parameters to see what will be included
/* Example = 4 props total ... 1 has a default value
        <AlienButton 
            name="Typing Speed Test"   // Text on the button
            sendUserTo="https://onlinegdb.com/r1BexqSov" // IMPORTANT ... sending to external link, you cannot have / in the beginning ... sending to a path on the site, make sure to have / in the beginning
            externalLink="true"   // true or false if it is an external link or not
            targetValue="_blank"   // IMPORTANT ... external links MUST have _blank in order to work ... Cut out this code if you want user to stay on the page and not open in a new tab or window
        />
*/


const AlienButton = ({ name, sendUserTo, externalLink, targetValue = "_self", pageOnWebsite }) => {   // targetValue will default to not open the link in another tab or window
    return (
        <React.Fragment>
            {
                pageOnWebsite === true ?
                    <Link to={handleLink(externalLink, sendUserTo)} target={targetValue} rel="noreferrer">
                        <button id="alien-button">
                            {name}
                        </button>
                    </Link>

                    : <a href={sendUserTo} target={targetValue} rel="noreferrer">
                        <button id="alien-button">
                            {name}
                        </button>
                    </a>
            }
        </React.Fragment>
    );
};

const handleLink = (externalLink, sendUserTo) => {
    if (externalLink) return { pathname: sendUserTo };
    if (!externalLink) return sendUserTo;
};

export default AlienButton;

