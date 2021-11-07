import React from 'react';
import { Select } from 'antd';
//import '../App.css';
import 'antd/dist/antd.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function SelectorSangre() {

  const { Option } = Select;
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <>
      <Select defaultValue="Elige una opción" style={{ width: 170 }} onChange={handleChange}>
        <Option value="A+">A+</Option>
        <Option value="A-">A-</Option>
        <Option value="B+">B+</Option>
        <Option value="B-">B-</Option>
        <Option value="O+">O+</Option>
        <Option value="O-">O-</Option>
        <Option value="AB+">AB+</Option>
        <Option value="AB-">AB-</Option>
      </Select>
    </>
  )
}
export default SelectorSangre;