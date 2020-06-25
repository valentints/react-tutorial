import React, { useState } from 'react';

const SearachPanel = ({ onSearchChange }) => {
  const [term, setTerm] = useState(' ');

  const onSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    onSearchChange(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="busqueda"
        className="form-control search-input"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearachPanel;
