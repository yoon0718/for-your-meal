import React from 'react';

export default function Modal2(props) {
  const { isOpen, closeModal } = props;

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      {isOpen ? (
        <section>
          <header>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>종류별 선택</h2>
          </header>
          <main>
            <a>디저트</a>
            <a>메인</a>
            <a>찌개</a>
            <a>국</a>
            <a>반찬</a>
          </main>
        </section>
      ) : null}
    </div>
  );
}
