import React from 'react';
import Input from '../atoms/Input';
import Dropdown from '../atoms/Dropdown';
import Button from '../atoms/Button';
import { Stack, Container } from '@mui/material';
import { inputsFormAddClient, categoriesFormAddClient, itemsFormAddClient } from  '../../helpers/Data';

const AddClientForm = () => {
  return (
    <Container fixed>
      {
        inputsFormAddClient.map(item => (
          <Stack flexWrap="wrap" spacing={2} key={item.id}>
          <Input
            placeholder={item.placeholder}
            type={item.type}
            testId={item.testId}
          />
          </Stack>
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
      <Button label="Crea un nuevo cliente " testId="newUser">Crear cliente</Button>
      </Container>
  );
};

export default AddClientForm;
