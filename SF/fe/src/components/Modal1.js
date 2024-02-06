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
            <h2>맛으로 선택</h2>
          </header>
          <main>
            <label>
              <input
                type="checkbox"
                name="taste"
                value="단맛"
                checked={selectedOptions.includes('단맛')}
                onChange={handleOptionChange}
              />
              단맛
            </label>
            <label>
              <input
                type="checkbox"
                name="taste"
                value="매운맛"
                checked={selectedOptions.includes('매운맛')}
                onChange={handleOptionChange}
              />
              매운 맛
            </label>
            {/* 나머지 맛 옵션들도 동일한 방식으로 추가 */}
          </main>
        </section>
      ) : null}
    </div>
  );
}
