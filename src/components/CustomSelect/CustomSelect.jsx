import "./CustomSelect.scss";
import { useState } from "react";

export default function CustomSelect({ customStyle, id, placeholder, values, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <label className="select__label" htmlFor={id} style={customStyle}>
        {label}
        <div className="select__wrapper" onClick={toggleOptions}>
          {selectedOption ? (
            selectedOption
          ) : (
            <span className="select__wrapper__placeholder">{placeholder}</span>
          )}

          <span className="select__wrapper__icon"></span>
        </div>
        {isOpen && (
          <div className="select__wrapper__itemsContainer">
            {values.map((option) => (
              <div
                key={option}
                className="select__wrapper__item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </label>
    </>
  );
}
