import { useRef } from "react";

export default function Start({ setUsername }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className="start">
            <p className="backDropImage">Who want to be a winner..</p>
            <input
                className="startInput"
                placeholder="Enter your name"
                ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>
                Begin Quiz  <span>(Good luck)</span>
            </button>
        </div>
    );
}
