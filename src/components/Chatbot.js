import React, { useState } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", user: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (message) => {
    const userMessage = { text: message, user: "user" };
    setMessages([...messages, userMessage]);

    const botResponse = getBotResponse(message);
    setMessages([...messages, userMessage, botResponse]);

    setInput("");
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    let response = { text: "I'm not sure how to respond to that.", user: "bot" };

    if (lowerCaseInput.includes("hello")) {
      response = { text: "Hello! How can I assist you?", user: "bot" };
    } else if (lowerCaseInput.includes("hours")) {
      response = { text: "Our store is open from 8 AM to 9 PM every day.", user: "bot" };
    } else if (lowerCaseInput.includes("location")) {
      response = { text: "We are located at 123 Main Street, Anytown.", user: "bot" };
    } else if (lowerCaseInput.includes("delivery")) {
      response = { text: "We offer delivery services from 10 AM to 6 PM. Orders above $50 have free delivery.", user: "bot" };
    } else if (lowerCaseInput.includes("refund")) {
      response = { text: "Our refund policy allows returns within 30 days with a receipt.", user: "bot" };
    } else if (lowerCaseInput.includes("membership")) {
      response = { text: "Our membership program offers a 10% discount on all items. You can sign up online or in-store.", user: "bot" };
    }

    return response;
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
          placeholder="Type your message..."
        />
        <button onClick={() => handleSend(input)}>Send</button>
      </div>
      <div className="chatbot-options">
        <button onClick={() => handleSend("What are your hours?")}>What are your hours?</button>
        <button onClick={() => handleSend("Where are you located?")}>Where are you located?</button>
        <button onClick={() => handleSend("Do you offer delivery?")}>Do you offer delivery?</button>
        <button onClick={() => handleSend("What is your refund policy?")}>What is your refund policy?</button>
        <button onClick={() => handleSend("Tell me about your membership program.")}>Tell me about your membership program.</button>
      </div>
    </div>
  );
};

export default Chatbot;
