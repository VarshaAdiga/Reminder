import React, { useState } from "react";
import styled from 'styled-components';

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
      <InputAreaStyled>
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
    </InputAreaStyled>
  );
}

const InputAreaStyled = styled.div`
.form input {
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.7rem;
  border-bottom-right-radius: 15px 3px;
  border-bottom-left-radius: 3px 15px;
  border: solid 3px transparent;
  border-bottom: dashed 3px #C8C6C6;
  font-family: "Architects Daughter", cursive;
  font-size: 1rem;
  color: hsla(260, 2%, 25%, 0.7);
  width: 70%;
  margin-bottom: 20px;
}

button {
  padding: 0;
  border: none;
  font-family: "Architects Daughter", cursive;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  background-color: #C8C6C6;
}
button span {
  background: #f1f5f8;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid hsl(198, 1%, 29%);
}
`

export default InputArea;
