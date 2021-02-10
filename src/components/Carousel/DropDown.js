import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const DropDownStyle = styled.select`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

function DropDown({ options, handleDropDownSelect, selectedValue = 0 }) {
  const [value, setValue] = useState(selectedValue);

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleDropDownSelect(event.target.value);
  };

  return (
    <DropDownStyle onChange={handleChange} value={value}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </DropDownStyle>
  );
}

export default DropDown;
