import React, { useState } from 'react';

function Input({ onSend }) {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSend(text);
      setText('');
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px', backgroundColor: 'white' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '50%', marginRight: '10px' }}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
  export default Input;
