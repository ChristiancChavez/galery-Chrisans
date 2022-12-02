import React from 'react';
import Input from '../atoms/Input';
import Dropdown from 'components/atoms/Dropdown';
import { inputsFormAddClient, categoriesFormAddClient, itemsFormAddClient } from  '../../helpers/Data';

const AddClientForm = () => {
  return (
    <div>
      {
        inputsFormAddClient.map(item => (
          <Input
            key={item.id}
            placeholder={item.placeholder}
            type={item.type}
            testId={item.testId}
          />
        ))
      }
      {
        categoriesFormAddClient.map(item => (
          <Dropdown
            key={item.id}
            label={item.label}
            id={item.id}
            testId={item.testId}
            items={item.items}
          />
        ))
      }
      {
        itemsFormAddClient.map(item => (
          <Dropdown
            key={item.id}
            label={item.label}
            id={item.id}
            testId={item.testId}
            items={item.items}
          />
        ))
      }
    </div>
  );
};

export default AddClientForm;
