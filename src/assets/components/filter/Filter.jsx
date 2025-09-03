import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Filter.css";

const Dropdown = ({ options = [], defaultValue = "", onSelect }) => {
  const [selected, setSelected] = useState(defaultValue || options[0] || "");
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    if (listRef.current) {
      const isVisible = listRef.current.style.display === "block";
      listRef.current.style.display = isVisible ? "none" : "block";
    }
  };

  // Handle item selection
  const handleSelect = (value) => {
    setSelected(value);
    if (onSelect) onSelect(value);
    if (listRef.current) listRef.current.style.display = "none";
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      listRef.current
    ) {
      listRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {selected}
        <MdOutlineKeyboardArrowDown className="arrow" />
      </button>

      <ul className="dropdown-list" ref={listRef}>
        {options.map((item) => (
          <li key={item} onClick={() => handleSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
