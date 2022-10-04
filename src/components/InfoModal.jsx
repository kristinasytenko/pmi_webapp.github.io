import React from 'react';

function InfoModal({ text, open, setOpen }) {
    return (
        <div className={open ? 'modal opened' : 'modal'}>
            <div className="modal__body">
                <div className="modal__close" onClick={() => setOpen(false)}>
                    <span></span>
                    <span></span>
                </div>
                <div className="modal__text">{text}</div>
            </div>
        </div>
    );
}

export default InfoModal;
