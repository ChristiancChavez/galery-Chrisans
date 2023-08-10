import React from 'react';
import { Formik, Form } from 'formik';
import { Stack, Container } from '@mui/material';
import { inputsFormAddClient, categoriesFormAddClient, itemsFormAddClient } from '../../helpers/Data';
import Dropdown, { SelectTypes } from '../atoms/Dropdown';
import InputForm from '../atoms/Input';
import * as Yup from 'yup'; 



const AddClientForm: React.FC = () => {
  interface FormValues {
    nameOfClientForm: string;
    accountClientForm: string;
    addressOfClientForm: string;
    neighborhoodOfClientForm: string;
    phoneOfClientForm: string;
    nameOfReferenceForm: string;
    contactOfReferenceForm: string;
    dateOfPaymentForm: string;
    numberOfPaymentForm: string;
    valueOfProductForm: string;
    categoriesGalery: string;
    itemsGalery: string;
  }
  // Define initial form values here
  const initialValues = {
    nameOfClientForm: '',
    accountClientForm: '',
    addressOfClientForm: '',
    neighborhoodOfClientForm: '',
    phoneOfClientForm: '',
    nameOfReferenceForm: '',
    contactOfReferenceForm: '',
    dateOfPaymentForm: '',
    numberOfPaymentForm: '',
    valueOfProductForm: '',
    categoriesGalery: '',
    itemsGalery: '',
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    nameOfClientForm: Yup.string().required('Name is required'),
    accountClientForm: Yup.string().required('Account is required'),
    addressOfClientForm: Yup.string().required('Address is required'),
    phoneOfClientForm: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must contain only digits'),
  });

  const handleSubmit = (values: FormValues) => {
    // Handle form submission here using the `values` object.
    console.log(values);
  };


  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <Container fixed>
            {inputsFormAddClient.map((item) => (
              <Stack flexWrap="wrap" spacing={2} key={item.id}>
                <InputForm
                  placeholder={item.placeholder}
                  type={item.type}
                  testId={item.testId}
                  value={Formik.initialValues[item.value]}
                />
              </Stack>
            ))}
            {categoriesFormAddClient.map((item: SelectTypes) => (
              <Dropdown
                key={item.id}
                label={item.label}
                id={item.id}
                testId={item.testId}
                items={item.items}
              />
            ))}
            {itemsFormAddClient.map((item: SelectTypes) => (
              <Dropdown
                key={item.id}
                label={item.label}
                id={item.id}
                testId={item.testId}
                items={item.items}
              />
            ))}
            <button type="submit">
              Crear cliente
            </button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AddClientForm;
