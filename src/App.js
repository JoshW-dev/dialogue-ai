import './App.css';
import React, { useState } from 'react';
import { generateText } from './functions/api';
import Chat from './components/chat'


function App() {
  const [text, setText] = useState('');

  const handleClick = async () => {
    console.log("handleClick")

    const prompt = 'Hello, how are you?';
    const response = await generateText(prompt);
    setText(response);
  };

  return (
    <div className="App">
<div>
Header

</div>
<Chat/>


      <button onClick={handleClick}>Generate Text</button>
      <p>{text}</p>

    </div>
  );
}

export default App;
