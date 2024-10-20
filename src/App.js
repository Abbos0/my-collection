
import React, { useState, useEffect } from 'react';
import './App.css';
import { ref, set, onValue } from 'firebase/database';  // Firebase Realtime Database funksiyalarini import qilamiz
import { database } from './firebase';  // Firebase konfiguratsiyasidan kiritilgan bazani import qilamiz

function App() {
  const [links, setLinks] = useState([]);  // Firebase'dan olingan barcha URL lar
  const [url, setUrl] = useState("");  // Inputdan kiritilgan URL
  const [tempLinks, setTempLinks] = useState([]);  // Vaqtinchalik saqlangan URL lar (Firebase ga yozilmagan)

  // Firebase'dan ma'lumotlarni olish
  useEffect(() => {
    const linksRef = ref(database, 'links');  // 'links' tugunini belgilaymiz
    onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedLinks = Object.values(data);
        setLinks(loadedLinks);  // Firebase'dan olingan ma'lumotlarni o'rnatamiz
      }
    });
  }, []);

  // URL ni vaqtincha qo'shish funksiyasi
  const handleAddLink = () => {
    if (url.trim() === "") return;  // Input bo'sh bo'lsa, hech narsa qilmaydi
    const newLink = { id: Date.now(), url };
    setTempLinks([...tempLinks, newLink]);  // URL ni vaqtinchalik ro'yxatga qo'shamiz
    setUrl("");  // Input maydonini tozalash
  };

  // URL ni Firebase ga saqlash funksiyasi
  const handleSaveLinks = () => {
    tempLinks.forEach((link) => {
      const newLinkRef = ref(database, `links/${link.id}`);
      set(newLinkRef, link);  // Har bir URL ni Firebase ga yozamiz
    });
    setLinks([...links, ...tempLinks]);  // Mahalliy links ga ham qo'shamiz
    setTempLinks([]);  // Vaqtinchalik ro'yxatni tozalaymiz
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);  // Input qiymatini o'zgartirish
  };

  return (
    <div className="app">
      <div className="sidebar">
        {links.map((linkItem) => (
          <a 
            key={linkItem.id}
            href={linkItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-box"
          >
            {new URL(linkItem.url).hostname.replace('www.', '')}
          </a>
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

        {tempLinks.length > 0 && (
          <div className="temp-links">
            <h3>Temporary Links</h3>
            <ul>
              {tempLinks.map((tempLinkItem) => (
                <li key={tempLinkItem.id}>
                  <a 
                    href={tempLinkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tempLinkItem.url}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={handleSaveLinks}>Save</button> {/* Save tugmasini qo'shamiz */}
          </div>
        )}

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
// import { ref, set, onValue } from 'firebase/database';  // Firebase Realtime Database funksiyalarini import qilamiz
// import { database } from './firebase';  // Firebase konfiguratsiyasidan kiritilgan bazani import qilamiz

// function App() {
//   const [links, setLinks] = useState([]);
//   const [url, setUrl] = useState("");

//   // Firebase'dan ma'lumotlarni olish
//   useEffect(() => {
//     const linksRef = ref(database, 'links');  // 'links' tugunini belgilaymiz
//     onValue(linksRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const loadedLinks = Object.values(data);
//         setLinks(loadedLinks);
//       }
//     });
//   }, []);

//   // URL qo'shish funksiyasi
//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     const newLink = { id: Date.now(), url };
    
//     // Yangi linkni Firebase ga yozish
//     const newLinkRef = ref(database, `links/${newLink.id}`);
//     set(newLinkRef, newLink);

//     setLinks([...links, newLink]);  // Mahalliy state'ga qo'shish
//     setUrl("");  // Input maydonini tozalash
//   };

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
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













// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { database } from './firebase'; // Firebase ni import qilamiz

// function App() {
//   const [links, setLinks] = useState([]);
//   const [url, setUrl] = useState("");

//   // Firebase'dan ma'lumotlarni olish
//   useEffect(() => {
//     const linksRef = database.ref('links');
//     linksRef.on('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const loadedLinks = Object.keys(data).map(key => ({
//           id: key,
//           url: data[key].url
//         }));
//         setLinks(loadedLinks);
//       }
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     const newLink = { url };
    
//     // Firebase'ga yangi link qo'shish
//     database.ref('links').push(newLink);
//     setUrl("");
//   };

//   const handleDeleteLink = (id) => {
//     // Firebase'dan linkni o'chirish
//     database.ref(`links/${id}`).remove();
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

//   // Component yuklangan paytda localStorage dan saqlangan ma'lumotlarni olish
//   useEffect(() => {
//     const storedLinks = JSON.parse(localStorage.getItem('links'));
//     if (storedLinks) {
//       setLinks(storedLinks);
//     }
//   }, []);  // Bu hook faqat sahifa yuklangan paytda ishlaydi.

//   const [url, setUrl] = useState("");

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleAddLink = () => {
//     if (url.trim() === "") return;
//     const newLinks = [...links, { id: Date.now(), url }];
    
//     // Linksni state va localStorage ga yangilash
//     setLinks(newLinks);
//     localStorage.setItem('links', JSON.stringify(newLinks));
//     setUrl("");
//   };

//   const handleDeleteLink = (id) => {
//     const updatedLinks = links.filter(link => link.id !== id);
//     setLinks(updatedLinks);
//     localStorage.setItem('links', JSON.stringify(updatedLinks)); // O'chirilgandan so'ng localStorage ni yangilash
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
