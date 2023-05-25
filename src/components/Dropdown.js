import React from "react";

export default function Dropdown({ list, handleChooseItem, initialValue }) {
  const [value, setValue] = React.useState('None');

  React.useEffect(() => {
    if (initialValue) {
      const item = list.find(item => item.id === initialValue);
      if (item) {
        setValue(item.text);
      }
    }
  }, [list, initialValue])

  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {list.map((item) => (
        <option
          onClick={() => handleChooseItem(item.id)}
          value={item.text}
          key={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
};
