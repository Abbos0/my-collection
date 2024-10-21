import React from 'react';

const YourComponent = () => {
  const getButtonTextFromURL = (url) => {
    const cleanURL = url.replace(/https?:\/\//, ''); // https:// dan tozalash
    const parts = cleanURL.split('/'); // / bilan ajratish

    // Agar url 'github.io' bilan tugasa
    if (parts[0].includes('github.io')) {
      return parts[1]; // / gacha bo'lgan so'zni olish
    }

    // Aks holda, agar vercel bo'lsa, faqat URLning birinchi qismidan foydalanamiz
    if (parts[0].includes('.vercel.app')) {
      return parts[0].split('.')[0]; // .vercel.app dan oldingi qism
    }
    
    return parts[0]; // Boshqa hollarda, faqat URLning birinchi qismidan foydalanamiz
  };

  const urls = [
    "https://portfoliouz.vercel.app/",
    "https://sessiya-three.vercel.app/",
    "https://exam-seven-theta.vercel.app/",
    "https://minimal-phi-two.vercel.app/",
    "https://cheki-eta.vercel.app/",
    "https://reach2.vercel.app/",
    "https://examstests.vercel.app/",
    "https://education-nine-coral.vercel.app/",
    "https://abbos0.github.io/contact/",
    "https://abbos0.github.io/coffeeshop/",
    "https://abbos0.github.io/social/",
    "https://abbos0.github.io/ball/",
    "https://abbos0.github.io/christmas/",
    "https://abbos0.github.io/dark-and-light/",
    "https://abbos0.github.io/clip-path/",
    "https://abbos0.github.io/telegrambot/",
    "https://abbos0.github.io/simple/",
    "https://abbos0.github.io/calculator/",
    "https://abbos0.github.io/weather/",
    "https://abbos0.github.io/earth/",
    "https://abbos0.github.io/lamp/",
    "https://abbos0.github.io/tarjimonbot/",
    "https://abbos0.github.io/time/",
    "https://abbos0.github.io/login.git/",
    "https://abbos0.github.io/ox/"
  ];

  return (
    <div className="flex flex-wrap items-start justify-between px-4">
      {urls.map((url, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-green-400 via-teal-500 to-blue-500' : 'from-white via-gray-200 to-gray-400'} text-black font-semibold rounded-md shadow-lg w-1/2 md:w-1/3 px-6 py-3 hover:${index % 2 === 0 ? 'from-blue-500 via-teal-500 to-green-400' : 'from-gray-400 via-gray-200 to-white'} transition-all duration-300 ease-in-out mb-4 flex justify-center items-center `}
        >
          {getButtonTextFromURL(url)}
        </a>
      ))}
    </div>
  );
};

export default YourComponent;
