import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Fanpage = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/messages');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const addMessage = async () => {
    try {
      await axios.post('http://localhost:5000/messagesadd', { user, text });
      fetchMessages();
      setText('');
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };
  const formattedMessages = messages.map((message, index) => (
    <li className={`message ${index % 2 === 0 ? 'self' : 'other'}`} key={index}>
      <div className="msg">
        <div className="user">{message.username}</div>
        {message.chat.split('\n').map((line, lineIndex) => (
          <p key={lineIndex}>{line}</p>
        ))}
        <time>{new Date(message.date).toLocaleDateString('en-GB')}</time>
      </div>
    </li>
  ));

    return (
        <div className="Chat-app">
          <ol class="chat">
          {formattedMessages}
    </ol>
           <div className="chat-app">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${index % 2 === 0 ? 'left' : 'right'}`}>
            {/* <span className="user">{message.username}:</span> */}
            {/* <p className="text">{message.chat}</p> */}
          </div>
        ))}
      </div>
     
      <div class="typezone">
        <form>
        <input
        className="textarea"
          type="text"
          placeholder="Your Nick Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
         />
          <textarea value={text}
           placeholder="Say something"
           onChange={(e) => setText(e.target.value)}
           />
          <input type="submit" class="send" value="" onClick={addMessage}/></form>
        <div class="emojis"></div>
        </div>
    </div>
        </div>
    )
}
export default Fanpage;