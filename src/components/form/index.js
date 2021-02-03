import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { Item } = Form;
const { Option } = Select;

const FormComponent = ({ loading, onFinish, formItems, formButton }) => {

  const ItemType = ({ itemType, label, name, rules, dropdownOptions }, key) => {
    let jsx = null;
    switch (itemType) {
      case "textfield":
        jsx = (
          <Item className="font-bold" key={key} label={label} name={name} rules={[{ ...rules }]}>
            <Input size="large" className="font-bold" type={name === "password" ? "password" : "text"}></Input>
          </Item>
        );
        break;
      
      case "dropdown":
        jsx = (
          <Item className="font-bold" key={key} label={label} name={name} rules={[{ ...rules }]}>
            <Select size="large" placeholder={`Pilih ${label}`}>
              {dropdownOptions.map((value, key) => 
                <Option key={key} value={value}>{value}</Option>
              )}
            </Select>
          </Item>
        );
        break;

      case "datepicker":
        jsx = (
          <Item className="font-bold" key={key} label={label} name={name} rules={[{ ...rules }]}>
            <DatePicker size="large" className="w-100"/>
          </Item>
        );
        break;

      default:
        break;
    }
    return jsx;
  };

  return (
    <Form className="form__container p-30" layout="vertical" onFinish={onFinish}>
      {formItems.map((value, key) => ItemType(value, key))}
      <Item>
        <Button className="w-100 fs-19" htmlType="submit" loading={loading} type="primary">
          {formButton}
        </Button>
      </Item>
    </Form>
  );
};

export default FormComponent;
