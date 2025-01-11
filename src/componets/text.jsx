import React, { useState } from 'react'

const Text = () => {

  const [text, setText] = useState("");

  const handleUpperCase = () => {

    const newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleLowerCase = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
  }
  const handlleCopy = () => {
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text copied successfully");
  }
  const handleRemoveExtraSpaces = () => {
    const newtext = text.split(/[ ] +/);
    setText(newtext.join(" "));
  }
  const handleOnChange = (event) => {

    setText(event.target.value);
  }

  return (
    <>
      <center>


        <h1>Text analysis</h1>
        <textarea type="text" name="text" id="text" rows="5" value={text} onChange={handleOnChange}  ></textarea>
        <br />
        <br />
        <button onClick={handleUpperCase}>UPPERCASE</button>
        <br />
        <br />
        <button onClick={handleLowerCase}>lowercase</button>
        <br />
        <br />
        <button onClick={handlleCopy} >Copy</button>
        <button onClick={handleRemoveExtraSpaces}>
          Remove extra Spaces
        </button>
        <p>count  character {text.length}</p>
        <h2>Text Preview</h2>
        <h3>{text}</h3>

      </center>
    </>
  )
}

export default Text 