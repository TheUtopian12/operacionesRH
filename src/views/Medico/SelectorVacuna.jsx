import React, { } from 'react';
import { Select } from 'antd';
//import '../App.css';
import 'antd/dist/antd.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function SelectorVacuna() {

  const { Option } = Select;
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <>
      <Select defaultValue="Selecciona una vacuna" style={{ width: 240 }} onChange={handleChange}>
        <Option value="Influenza">Influenza</Option>
        <Option value="Tétanos">Tétanos</Option>
      </Select>
    </>
  )
}
export default SelectorVacuna;
