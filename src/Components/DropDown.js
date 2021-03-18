import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const renderedList = options.map((color) => {
    if (color.label === selected.content) {
      return null;
    }
    return (
      <div
        key={color.label}
        className='item'
        onClick={() => {
            onSelectedChange(color);
        }}
      >
        {color.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      {showDropdown ? (
        <div className='field'>
          <label className='label'>{label}</label>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedList}
            </div>
          </div>
          <p style={{ color: selected.content }}>
            This text is {selected.label}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;