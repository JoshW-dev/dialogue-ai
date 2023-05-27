import React, { useState } from 'react';
import axios from 'axios';
import { generateText } from '../functions/api';

import Input from './input'; 
import Message from './message'; 
const apiKey = process.env.REACT_APP_OPENAI_KEY;

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});
function Chat() {
    const [messages, setMessages] = useState([]);
  
    const handleSend = async (text) => {
        setMessages([...messages, { text, isBot1: false }]);
        console.log("handleSend: " + text)
        const response = await generateText(text);
        setMessages(messages => [...messages, { text: response, isBot1: true }]);
    };
      
  
    return (
      <div style={{ padding: '10px', height: '100vh', boxSizing: 'border-box', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isBot1={message.isBot1} />
        ))}
        <Input onSend={handleSend} />
      </div>
    );
  }
  export default Chat;
