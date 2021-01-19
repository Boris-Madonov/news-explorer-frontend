import React, { useEffect } from 'react';
import './index.css';

function Popup({
  name,
  isOpen,
  onClose,
  children,
}) {
  useEffect(() => {
    const handlerEsc = e => {
      if(e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("keydown", handlerEsc);

    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const handlerOverlayClose = e => {
      if (e.target.classList.contains('popup')) {
        onClose();
      }
    };

    document.addEventListener("click", handlerOverlayClose);

    return () => {
      document.removeEventListener("click", handlerOverlayClose);
    };
  }, [onClose]);

  return(
    <section className={`popup popup__${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        >
        </button>
        {children}
      </div>
    </section>
  );
}

export default Popup