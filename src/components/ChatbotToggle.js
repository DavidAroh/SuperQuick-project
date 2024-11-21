import React, { useState } from 'react';
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import Chatbot from './Chatbot';
import '../styles/ChatbotToggle.css';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-toggle">
      <button className="toggle-button" onClick={toggleChatbot}>
        {isOpen ? <MdCancel className='cancel'/> : <BiSolidMessageRounded className='msg'/>}
      </button>
      {isOpen && <Chatbot />}
    </div>
  );
};

export default ChatbotToggle;
