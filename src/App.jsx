// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./App.css";

// // ⚠️ Not secure for production
// const genAI = new GoogleGenerativeAI("AIzaSyBcObRYQsO8Ka2aSzrJdb_stInFQ58E2mk");

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input) return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash-latest",
//   });

//       const result = await model.generateContent(input);
//       const response = await result.response;
//       const text = response.text();

//       const botMessage = { text, sender: "bot" };
//       setMessages((prev) => [...prev, botMessage]);

//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "Hello! I am a Gemini chatbot. Ask me", sender: "bot" },
//       ]);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <h2>Gemini AI Chatbot</h2>

//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className={msg.sender}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="input-area">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask something..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userText = input;
//     setInput("");

//     setMessages((prev) => [
//       ...prev,
//       { text: userText, sender: "user" },
//     ]);

//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: userText }],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       const botReply =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No response from AI";

//       setMessages((prev) => [
//         ...prev,
//         { text: botReply, sender: "bot" },
//       ]);
//     } catch (error) {
//       console.error("FULL ERROR:", error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "Something went wrong 😢", sender: "bot" },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="chat-container">
//       <h1 className="chat-title">MateX AI</h1>

//       <div className="chat-messages">
//   {messages.map((msg, index) => (
//     <div
//       key={index}
//       className={`message ${msg.sender === "user" ? "user" : "bot"}`}
//     >
//       {msg.text}
//     </div>
//   ))}

//   {loading && <div className="message bot">Typing...</div>}
// </div>

//       <div className="input-area">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask something..."
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userText = input;
//     setInput("");

//     setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: userText }] }],
//           }),
//         }
//       );

//       const data = await response.json();

//       const botReply =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No response from AI";

//       setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { text: "Something went wrong 😢", sender: "bot" },
//       ]);
//     }

//     setLoading(false);
//   };

//   // ✅ WELCOME PAGE
//   if (!showChat) {
//   return (
//     <div className="welcome-page">
//       <div className="welcome-content">
//         <h1>Welcome to MateX AI 🤖</h1>
//         <p>Your Intelligent AI Assistant</p>

//         <button
//           className="start-btn"
//           onClick={() => setShowChat(true)}
//         >
//           Start Chat
//         </button>
//       </div>
//     </div>
//   );
// }

//   // ✅ CHATBOT PAGE
//   return (
//   <div className="app-container">

//     {/* Header */}
//     <header className="header">
//       <h1>MateX AI🤖</h1>
//       <p>Your Intelligent AI Assistant</p>
//     </header>

//     {/* Chat Section */}
//     <div className="chat-container">

//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`message ${msg.sender === "user" ? "user" : "bot"}`}
//           >
//             {msg.text}
//           </div>
//         ))}

//         {loading && <div className="message bot">Typing...</div>}
//       </div>

//       {/* Input Area */}
//       <div className="input-area">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask MateX AI..."
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>

//     </div>
//   </div>
// )}

// export default App;


import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {

  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);
<div ref={messagesEndRef}></div>

  const loginUser = () => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!password) {
    alert("Please enter password");
    return;
  }

  setIsLoggedIn(true);
};

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userText }] }],
          }),
        }
      );

      const data = await response.json();

      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong 😢", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  /* ---------------- WELCOME PAGE ---------------- */

  if (showWelcome) {
    return (
      <div className="welcome-page">
        <h1>Welcome to MateX AI</h1>
        <p>Your Intelligent AI Assistant</p>

        <button onClick={() => setShowWelcome(false)}>
          Get Started
        </button>
      </div>
    );
  }

  /* ---------------- LOGIN PAGE ---------------- */

  if (!isLoggedIn) {
    return (
      <div className="auth-page">

        <div className="auth-box">

          <h1>MateX AI</h1>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={loginUser}>Login</button>

        </div>

      </div>
    );
  }
  

  /* ---------------- CHATBOT PAGE ---------------- */

  return (
    <div className="app-container">

      <header className="header">
        <h1>MateX AI</h1>
        <p>Your Intelligent AI Assistant</p>
      </header>

      <div className="chat-container">

        <div className="chat-messages">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}

          {loading && <div className="message bot">Typing...</div>}
          <div ref={messagesEndRef}></div>

        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask MateX AI..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage}>Send</button>
        </div>

      </div>

    </div>
  );
}

export default App;