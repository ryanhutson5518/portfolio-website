import React, { useState, useEffect } from 'react'


const Game = ({ content, handleInput, input }) => {
    const [timer, setTimer] = useState(0);
    let minutes = timer / 60;
    let correctCharacters = 0;
    const [WPM, setWPM] = useState(0);

    const text = content.split("");
    const userInput = input;

    useEffect(() => {
        setTimeout(() => {
            if (correctCharacters !== 0) {
                setTimer(timer + 1);
                if (timer > 0) setWPM(Math.round((correctCharacters / 5) / minutes));
            }
            else setTimer(0);
        }, 1000);
    });

    return (
        <React.Fragment>
            <div className="game-container row justify-content-center">
                <div className="quote-display col-12" id="quoteDisplay">
                    {
                        text.map((character, index) => {
                            let color;
                            if (index < userInput.length) {
                                color = character === userInput[index] ? "correct" : "incorrect";
                            }
                            if (character === userInput[index]) correctCharacters++;

                            return <span key={index} className={color}>{character}</span>
                        })
                    }
                </div>
                <textarea
                    value={input}
                    onInput={event => handleInput(event.target.value)}
                    autoFocus spellCheck="false"
                    autoCapitalize="false"
                    autoCorrect="false"
                    autoComplete="false"
                    className="quote-input col-12 rounded"
                    id="quoteInput"
                >
                </textarea>
                <h1 className="col-12">WPM: {WPM}</h1>
            </div>
        </React.Fragment>
    );
};

export default Game;





// import React from 'react'


// const Game = ({ content, handleInput, input }) => {
//     const text = content.split("");
//     const userInput = input;

//     return (
//         <React.Fragment>
//             <div className="game-container row justify-content-center">
//                 <div className="quote-display col-12" id="quoteDisplay">
//                     {
//                         text.map((character, index) => {
//                             let color;
//                             if (index < userInput.length) {
//                                 color = character === userInput[index] ? "correct" : "incorrect";
//                             }
//                             return <span key={index} className={color}>{character}</span>
//                         })
//                     }
//                 </div>
//                 <textarea
//                     value={input}
//                     onInput={event => handleInput(event.target.value)}
//                     autoFocus spellCheck="false"
//                     autoCapitalize="false"
//                     autoCorrect="false"
//                     autoComplete="false"
//                     className="quote-input col-12 rounded"
//                     id="quoteInput"
//                 >
//                 </textarea>
//                 <div className="timer col-12" id="timer">wpm: </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Game;














// import React from 'react'


// const Game = ({ content, handleInput, input }) => {
//     const text = content.split("");   // this is an array of every character
//     const words = content.split(" ");   // every word of content ... in an array
//     const userInput = input;   // full text of user input
//     const inputWords = userInput.split(" ");   // every word the user types in. This is to compare the value with "words" so that if they are the same, I can add 1 to "correctWordsCounter"
//     let correctWordsCounter = 0;

//     return (
//         <React.Fragment>
//             <div className="game-container row justify-content-center">
//                 <div className="quote-display col-12" id="quoteDisplay">
//                     {
//                         text.map((character, index) => {
//                             let color;
//                             if (index < userInput.length) {
//                                 color = character === userInput[index] ? "correct" : "incorrect";
//                             }
//                             if (color === "correct" && words[index] === inputWords[index]) {   // this is a check to see if the word is correct and both user input and content word is the same
//                                 correctWordsCounter++;
//                             }
//                             return <span key={index} className={color}>{character}</span>
//                         })
//                     }
//                 </div>
//                 <textarea
//                     value={input}
//                     onInput={event => handleInput(event.target.value)}
//                     autoFocus spellCheck="false"
//                     autoCapitalize="false"
//                     autoCorrect="false"
//                     autoComplete="false"
//                     className="quote-input col-12 rounded"
//                     id="quoteInput"
//                 >
//                 </textarea>
//                 <div className="timer col-12" id="timer">wpm: {correctWordsCounter}</div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Game;










// import React from 'react'


// const Game = ({ content, handleInput, input }) => {
//     const text = content.split("");   // this is an array of every character
//     const words = content.split(" ");   // every word of content ... in an array
//     const userInput = input;   // full text of user input
//     const inputWords = userInput.split(" ");   // every word the user types in. This is to compare the value with "words" so that if they are the same, I can add 1 to "correctWordsCounter"
//     let correctWordsCounter = 0;

//     return (
//         <React.Fragment>
//             <div className="game-container row justify-content-center">
//                 <div className="quote-display col-12" id="quoteDisplay">
//                     {
//                         text.map((character, index) => {
//                             let color;
//                             if (index < userInput.length) {
//                                 color = character === userInput[index] ? "correct" : "incorrect";
//                                 console.log(words[index])
//                                 console.log(inputWords[index])
//                             }
//                             if (color === "correct" && words[index] === inputWords[index]) {   // this is a check to see if the word is correct and both user input and content word is the same
//                                 correctWordsCounter++;
//                             }
//                             return <span key={index} className={color}>{character}</span>
//                         })
//                     }
//                 </div>
//                 <textarea
//                     value={input}
//                     onInput={event => handleInput(event.target.value)}
//                     autoFocus spellCheck="false"
//                     autoCapitalize="false"
//                     autoCorrect="false"
//                     autoComplete="false"
//                     className="quote-input col-12 rounded"
//                     id="quoteInput"
//                 >
//                 </textarea>
//                 <div className="timer col-12" id="timer">wpm: {correctWordsCounter}</div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Game;










// import React, { useState, useEffect } from 'react'


// const Game = ({ content, handleInput, input }) => {
//     const [timer, setTimer] = useState(0);
//     let minutes = timer / 60;
//     let correctCharacters = 0;
//     const [WPM, setWPM] = useState(0);

//     const text = content.split("");
//     const userInput = input;

//     useEffect(() => {
//         setTimeout(() => {
//             setTimer(timer + 1);
//             if (correctCharacters !== 0) {
//                 setWPM(Math.round((correctCharacters / 5) / minutes));
//             }
//         }, 1000);
//     }, [timer, correctCharacters, minutes]);

//     return (
//         <React.Fragment>
//             <div className="game-container row justify-content-center">
//                 <div className="quote-display col-12" id="quoteDisplay">
//                     {
//                         text.map((character, index) => {
//                             let color;
//                             if (index < userInput.length) {
//                                 color = character === userInput[index] ? "correct" : "incorrect";
//                             }
//                             if (character === userInput[index]) correctCharacters++;

//                             return <span key={index} className={color}>{character}</span>
//                         })
//                     }
//                 </div>
//                 <textarea
//                     value={input}
//                     onInput={event => handleInput(event.target.value)}
//                     autoFocus spellCheck="false"
//                     autoCapitalize="false"
//                     autoCorrect="false"
//                     autoComplete="false"
//                     className="quote-input col-12 rounded"
//                     id="quoteInput"
//                 >
//                 </textarea>
//                 <h1 className="col-12">WPM: {WPM}</h1>
//                 <h1 className="col-12">timer: {timer}</h1>
//                 <h1 className="col-12">cc: {correctCharacters}</h1>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Game;