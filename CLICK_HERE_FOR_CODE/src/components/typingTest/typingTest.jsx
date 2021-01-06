import React, { useState, useEffect } from 'react';
import bibleVerses from '../../services/bibleVerses.json';   // bibleVerses is the name of the array that I can use in my code
import Game from './game';
import Finished from './finished';


const TypingTest = () => {
    const [state, setState] = useState(bibleVerses);
    const [content, setContent] = useState("");   // might have to add this back in ... the setContent
    const [input, setInput] = useState("");  // bind this to person typing


    const handleInput = text => {   // This function starts all the other functions ... every time I input a character, this function runs ... so its a good spot to dynamically change the classes
        setInput(text);
        if (text === content) {
            const newState = state.filter(index => index.content !== content);   // string is used here because I need the string value of content
            setState(newState);
            setInput("");
        }
    };

    useEffect(() => {
        setContent(state[Math.floor(Math.random() * state.length)].content);   // This is the updated state
    }, [state]);

    return (
        <div id="content-pages-background">
            <div id="typingTestBody" className="container">

                {
                    state.length === 1 && input.length === content.length - 1 ?
                        <Finished />
                        : <Game
                            content={content}
                            handleInput={handleInput}
                            input={input}
                        />
                }
                
            </div>
        </div>
    );
};

export default TypingTest;


// const [state, setState] = useState(bibleVerses);
// const [content, setContent] = useState("");   // might have to add this back in ... the setContent
// const [input, setInput] = useState("");  // bind this to person typing


// const deleteContent = () => {
//     let arrayToString = content;
//     let string = "";
//     for (let i in arrayToString) {
//         string = string + arrayToString[i].props.children;
//     }
//     const newState = state.filter(index => index.content !== string);   // string is used here because I need the string value of content
//     setState(newState);
// };

// const handleInput = text => {   // This function starts all the other functions ... every time I input a character, this function runs ... so its a good spot to dynamically change the classes
//     setInput(text)
//     inputCharacter = text;
//     console.log(content[0].props.children)
//     console.log(inputCharacter)
// };

// const getClass = character => {

// };

// useEffect(() => {
//     if (content.length === input.length) {
//         deleteContent();
//     }
// }, [input]);

// useEffect(() => {
//     setInput("");
// }, [content]);

// useEffect(() => {
//     setContent(state[Math.floor(Math.random() * state.length)].content.split("").map((character, index) => <span key={index} className={getClass()}>{character}</span>));   // This is the updated state
// }, [state]);