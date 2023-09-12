import React from 'react';
import { useFormik } from 'formik';
import { Stack, Container, Button } from '@mui/material';
import Dropdown from '../atoms/Dropdown';
import { inputsFormAddClient, categoriesFormAddClient, itemsFormAddClient } from '../../helpers/Data';
import InputForm2 from '../atoms/InputForms2';
import * as Yup from 'yup'; 

const AddClientForm2 = () => {
  const validationSchema = Yup.object({
    nameOfClientForm: Yup.string().required('Name is required'),
    accountClientForm: Yup.string().required('Account is required'),
    addressOfClientForm: Yup.string().required('Address is required'),
    phoneOfClientForm: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must contain only digits'),
  });

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

  const onSubmit = (values) => {
    console.log(values); // Handle form submission here
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container fixed>
        {inputsFormAddClient.map((item) => (
          <Stack flexWrap="wrap" spacing={2} key={item.id}>
            <InputForm2
              placeholder={item.placeholder}
              type={item.type}
              testId={item.testId}
              name={item.value}
              value={formik.values[item.value]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[item.value] && Boolean(formik.errors[item.value])}
            />
          </Stack>
        ))}
        {categoriesFormAddClient.map((item) => (
          <Dropdown
            key={item.id}
            label={item.placeholder}
            id={item.id}
            testId={item.testId}
            items={item.items}
            value={formik.values[item.items.value]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[item.value] && Boolean(formik.errors[item.items.value])}
            helperText={formik.touched[item.value] && formik.errors[item.value]}
          />
        ))}
        {itemsFormAddClient.map((item) => (
          <Dropdown
            key={item.id}
            label={item.label}
            id={item.id}
            testId={item.testId}
            items={item.items}
            value={formik.values[item.items.value]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[item.value] && Boolean(formik.errors[item.items.value])}
            helperText={formik.touched[item.value] && formik.errors[item.value]}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Crear cliente
        </Button>
      </Container>
    </form>
  );
};

export default AddClientForm2;
