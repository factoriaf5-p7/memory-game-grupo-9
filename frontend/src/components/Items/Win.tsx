import React from 'react';

interface WinModalProps {
    onClose: () => void;
}

const Win: React.FC<WinModalProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 animate-fadeIn">
            <div className="p-4 rounded-md shadow-md text-center animate-slideIn"  style={{
                        backgroundImage: "url('/carta.jpg')"
                    }}>
                <h2 className="text-2xl font-bold mb-2">¡Felicitaciones!</h2>
                <p>Has completado el memotest.</p>
                <button
                    className="mt-4 px-4 py-2 text-white rounded-md bg-start-button bg-cover bg-center hover:bg-start-button-hover focus:outline-none"
                    onClick={onClose}
                    style={{
                        backgroundImage: "url('/start.jpg')"
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Win;
