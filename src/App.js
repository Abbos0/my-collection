
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [links, setLinks] = useState([]);

  // Component yuklangan paytda localStorage dan saqlangan ma'lumotlarni olish
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links'));
    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, []);  // Bu hook faqat sahifa yuklangan paytda ishlaydi.

  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleAddLink = () => {
    if (url.trim() === "") return;
    const newLinks = [...links, { id: Date.now(), url }];
    
    // Linksni state va localStorage ga yangilash
    setLinks(newLinks);
    localStorage.setItem('links', JSON.stringify(newLinks));
    setUrl("");
  };

  const handleDeleteLink = (id) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks)); // O'chirilgandan so'ng localStorage ni yangilash
  };

  return (
    <div className="app">
      <div className="sidebar">
        {links.map((linkItem) => (
          <div key={linkItem.id} className="link-box">
            <a 
              href={linkItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {new URL(linkItem.url).hostname.replace('www.', '')}
            </a>
            <button 
              className="delete-button"
              onClick={() => handleDeleteLink(linkItem.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="todo-container">
        <h2>Todo-List</h2>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a URL..."
            value={url}
            onChange={handleInputChange}
          />
          <button onClick={handleAddLink}>Add</button>
        </div>
        <ul>
          {links.map((linkItem) => (
            <li key={linkItem.id}>
              <a 
                href={linkItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;








// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [links, setLinks] = useState([]);

//   // Load links from localStorage on component mount
//   useEffect(() => {
//     const storedLinks = JSON.parse(localStorage.getItem('links'));
//     if (storedLinks) {
//       setLinks(storedLinks);
//     }
//   }, []);

//   const [url, setUrl] = useState("");

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     const newLinks = [...links, { id: Date.now(), url }];
    
//     // Update state and localStorage
//     setLinks(newLinks);
//     localStorage.setItem('links', JSON.stringify(newLinks));
//     setUrl("");
//   };

//   const handleDeleteLink = (id) => {
//     const updatedLinks = links.filter(link => link.id !== id);
//     setLinks(updatedLinks);
//     localStorage.setItem('links', JSON.stringify(updatedLinks));
//   };

//   return (
//     <div className="app">
//       <div className="sidebar">
//         {links.map((linkItem) => (
//           <div key={linkItem.id} className="link-box">
//             <a 
//               href={linkItem.url}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {new URL(linkItem.url).hostname.replace('www.', '')}
//             </a>
//             <button 
//               className="delete-button"
//               onClick={() => handleDeleteLink(linkItem.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="todo-container">
//         <h2>Todo-List</h2>
//         <div className="input-section">
//           <input
//             type="text"
//             placeholder="Enter a URL..."
//             value={url}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleAddLink}>Add</button>
//         </div>
//         <ul>
//           {links.map((linkItem) => (
//             <li key={linkItem.id}>
//               <a 
//                 href={linkItem.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {linkItem.url}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;










// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [links, setLinks] = useState([]);

//   // Komponent yuklanganda localStorage dan ma'lumotlarni olish
//   useEffect(() => {
//     const storedLinks = JSON.parse(localStorage.getItem('links'));
//     if (storedLinks) {
//       setLinks(storedLinks);
//     }
//   }, []);

//   const [url, setUrl] = useState("");

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     const newLinks = [...links, { id: Date.now(), url }];
    
//     // linklarni state va localStorage da yangilash
//     setLinks(newLinks);
//     localStorage.setItem('links', JSON.stringify(newLinks));
//     setUrl("");
//   };

//   return (
//     <div className="app">
//       <div className="sidebar">
//         {links.map((linkItem) => (
//           <a 
//             key={linkItem.id}
//             href={linkItem.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link-box"
//           >
//             {new URL(linkItem.url).hostname.replace('www.', '')}
//           </a>
//         ))}
//       </div>

//       <div className="todo-container">
//         <h2>Todo-List</h2>
//         <div className="input-section">
//           <input
//             type="text"
//             placeholder="Enter a URL..."
//             value={url}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleAddLink}>Add</button>
//         </div>
//         <ul>
//           {links.map((linkItem) => (
//             <li key={linkItem.id}>
//               <a 
//                 href={linkItem.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {linkItem.url}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
















// // App.js

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [links, setLinks] = useState([]);
//   const [url, setUrl] = useState("");

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     setLinks([...links, { id: Date.now(), url }]);
//     setUrl("");
//   };

//   return (
//     <div className="app">
//       <div className="sidebar">
//         {links.map((linkItem) => (
//           <a 
//             key={linkItem.id}
//             href={linkItem.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link-box"
//           >
//             {new URL(linkItem.url).hostname.replace('www.', '')}
//           </a>
//         ))}
//       </div>

//       <div className="todo-container">
//         <h2>Todo-List</h2>
//         <div className="input-section">
//           <input
//             type="text"
//             placeholder="Enter a URL..."
//             value={url}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleAddLink}>Add</button>
//         </div>
//         <ul>
//           {links.map((linkItem) => (
//             <li key={linkItem.id}>
//               <a 
//                 href={linkItem.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {linkItem.url}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
