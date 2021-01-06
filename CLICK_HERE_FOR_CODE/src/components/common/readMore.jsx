import React, { useState } from 'react';

// prop array is completely automated ... no need to touch anything in this file
// !!! Might need the implementation of <Card /> to run properly


const ReadMore = ({ readMoreID, array }) => {
    const [readMoreLess, setReadMoreLess] = useState(0);

    const handleState = () => {
        setReadMoreLess(prevState => prevState + 1);
    };

    const moreOrLess = () => {
        if (readMoreLess % 2 === 0) return "More";   // if even
        if (readMoreLess % 2 === 1) return "Less";   // if odd
    };

    const handleReadMore = () => {
        let id = "readMoreToggle-" + readMoreID;
        return id;
    };

    const handleReadMoreHref = () => {
        let href = "#readMoreToggle-" + readMoreID;
        return href;
    };

    return (
        <React.Fragment>
            <div className="collapse" id={handleReadMore()}>{array}</div>   {/* Unfortunately, I cannot change this div tag to a span. Or make it display inline. Otherwise, here would not be that weird spacing you see after clicking the read more button */}
            <a
                className="alien-color-link"
                data-toggle="collapse"
                href={handleReadMoreHref()}   // HAVE to make sure that there is a # in the beginning otherwise this will not work
                role="button"
                aria-expanded="false"
                aria-controls={handleReadMore()}
                onClick={handleState}
            >
                Read {moreOrLess()}
            </a>
        </React.Fragment>
    );
};

export default ReadMore;





