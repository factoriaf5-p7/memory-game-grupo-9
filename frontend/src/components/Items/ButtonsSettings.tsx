import React from 'react'

interface CustomButtonsSettings { 
    onClick: ()=>void;
    label: string;
    className?: string;
    backgroundImage?: string;
}
export default function ButtonsSettings({onClick, label, className, backgroundImage}: CustomButtonsSettings) {
    const buttonStyle: React.CSSProperties = {
        backgroundImage: "url('/start.jpg')",
        padding: "5px",
      };
    
 return (
<button
      className={`hover:bg-opacity-80 text-black font-bold text-xs rounded mt-2 p-4 bg-no-repeat bg-cover ${className}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
}