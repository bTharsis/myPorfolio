import React from "react";
import TypewriterComponent from "typewriter-effect";

function TypeWriterPCard() {
    return (
        <div className="App">
            <TypewriterComponent
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />
        </div>
    );
}

export default TypeWriterPCard;
