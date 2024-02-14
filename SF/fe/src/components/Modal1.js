import React, { useState } from 'react';
import './css/Modal.css';

export default function Modal1(props) {
  const { isOpen, closeModal } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, value]);
    } else {
      setSelectedOptions((prevSelectedOptions) => prevSelectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      {isOpen ? (
        <section>
          <header>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>찌개 또는 국 선택</h2>
          </header>
          <main>
            <label>
              <input
                type="checkbox"
                name="taste"
                value="찌개"
                checked={selectedOptions.includes('찌개')}
                onChange={handleOptionChange}
              />
              찌개
            </label>
            <label>
              <input
                type="checkbox"
                name="taste"
                value="국"
                checked={selectedOptions.includes('국')}
                onChange={handleOptionChange}
              />
              국
            </label>
            {/* 나머지 맛 옵션들도 동일한 방식으로 추가 */}
          </main>
        </section>
      ) : null}
    </div>
  );
}
