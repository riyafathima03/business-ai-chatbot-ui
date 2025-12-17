import React, { useState } from "react";
import axios from "axios";
import "../styles/table.css"; // <-- Add this for clean table styling

const suggestions = [
  "Show revenue trends for the last 6 months",
  "List top performing clients",
  "What is the average project duration?"
];

export default function ChatArea({ activeService }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // -----------------------------
  // Send message to backend
  // -----------------------------
  const sendMessageToBackend = async (message) => {
    try {
      const response = await axios.post("http://localhost:5001/ask", {
        question: message,
      });

      return response.data.answer;
    } catch (error) {
      console.error("Backend Error:", error);
      return "❌ Backend error. Check server.";
    }
  };

  // -----------------------------
  // Handle send button
  // -----------------------------
  const handleSend = async () => {
    if (!input.trim()) return;

    // add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // call backend
    const reply = await sendMessageToBackend(input);

    // detect table format (backend must return JSON array)
    const isTable =
      typeof reply !== "string" &&
      reply !== null &&
      typeof reply === "object";

    // add bot response
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: reply, isTable }
    ]);

    setInput("");
  };

  return (
    <div className="chat">

      {/* -----------------------------
          MESSAGE DISPLAY AREA
      ------------------------------ */}
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "user" ? "msg user" : "msg bot"}>
            
            {/* If output is table */}
            {msg.isTable && Array.isArray(msg.text) ? (
              <table className="result-table">
                <thead>
                  <tr>
                    {Object.keys(msg.text[0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {msg.text.map((row, rIndex) => (
                    <tr key={rIndex}>
                      {Object.values(row).map((val, cIndex) => (
                        <td key={cIndex}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>{msg.text}</p>
            )}
          </div>
        ))}
      </div>

      {/* -----------------------------
          INPUT BAR
      ------------------------------ */}
      <div className="inputbar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about ${activeService}...`}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {/* -----------------------------
          SUGGESTION BUTTONS
      ------------------------------ */}
      <div className="suggestions">
        {suggestions.map((q) => (
          <button
            key={q}
            onClick={() => {
              setInput(q);
              handleSend();
            }}
          >
            {q}
          </button>
        ))}
      </div>

    </div>
  );
}
