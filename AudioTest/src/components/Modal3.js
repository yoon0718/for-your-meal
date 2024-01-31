import React from 'react';

export default function Modal3(props) {
  const { isOpen, closeModal } = props;

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      {isOpen ? (
        <section>
          <header>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>재료로 선택</h2>
          </header>
          <main>
            <a>각종 재료 검색</a>
          </main>
        </section>
      ) : null}
    </div>
  );
}
