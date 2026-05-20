import React from 'react';

const DateSelector = ({ date, setDate }) => {
  return (
    <div className="control-panel">
      <label htmlFor="space-date">Pilih Tanggal: </label>
      <input 
        type="date" 
        id="space-date"
        value={date}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
