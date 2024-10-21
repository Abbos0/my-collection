// Books.js
import React from 'react';
import YourComponent from './YourComponent'; // YourComponent ni import qiling
import Message from './Message'
const Books = () => {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between px-4 py-6 "> 
        <YourComponent /> {/* YourComponent ni chaqiring */}
      </div>
      <Message/>
    </div>
  );
};

export default Books;
