import React from 'react';

export default function Modal4(props) {
  const { isOpen, closeModal } = props;

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      {isOpen ? (
        <section>
          <header>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>음식 검색</h2>
          </header>
          <main>
            <a>r</a>
          </main>
        </section>
      ) : null}
    </div>
  );
}
