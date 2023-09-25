import React, { useContext } from 'react';
import Dropdown from '../atoms/Dropdown';
import Button from '../atoms/Button';
import { Stack, Container,Input } from '@mui/material';
import { inputsFormAddClient, categoriesFormAddClient, itemsFormAddClient } from  '../../helpers/Data';
import { useForm } from 'react-hook-form';
import { TestIdType } from '../../Types/types';
import { useClientInfoContext } from '../../context/clientListContext'; // Import the hook

export interface AddClientFormTypes extends TestIdType {
  placeholder: string;
  type: string;
  // registerName?: "placeholder" | "type" | "testId" | "registerName",
  valueInput: "placeholder" | "type" | "testId" | "valueInput" | string;
}

// const resolver: Resolver<AddClientFormTypes> = async (values) => {
//   return {
//     values: values.valueInput ? values : {},
//     errors: !values.valueInput
//       ? {
//           valueInput: {
//             type: 'required',
//             message: 'Este campo es requerido',
//           },
//         }
//       : {},
//   };
// };
const AddClientForm = () => {
// const form = useForm<AddClientFormTypes>({
//   defaultValues: {
//     values:[{value:''}]
//   }
// })
const clientInfoContext = useClientInfoContext();
const { setClientListState } = clientInfoContext;
const { handleSubmit, register, formState: { errors }} = useForm<AddClientFormTypes>()
  const onSubmit = handleSubmit((data) => {
    setClientListState()
    console.log('ESTA ES LA DATA', data)});

  return (
    <Container fixed>
      <form onSubmit={onSubmit}>
        {
          inputsFormAddClient.map(item => (
            <Stack flexWrap="wrap" spacing={2} key={item.id}>
              <Input 
                aria-label={`Este es un input para ${item.placeholder}`}
                placeholder={item.placeholder} 
                type={item.type} 
                required
                data-testid={item.testId}
                {...register(item.valueInput as any)}
              />
              {errors?.valueInput && <p>{errors.valueInput.message}</p>}
            </Stack>
          ))
        }
        {
          categoriesFormAddClient.map(item => (
            <Stack flexWrap="wrap" spacing={2} key={item.id}>
            <Dropdown
              label={item.label}
              id={item.id}
              testId={item.testId}
              items={item.items}
              {...register(item.items.values as any)}
            />
            {errors?.valueInput && <p>{errors.valueInput.message}</p>}
            </Stack>
          ))
        }
        {
          itemsFormAddClient.map(item => (
            <Stack flexWrap="wrap" spacing={2} key={item.id}>
            <Dropdown
              key={item.id}
              label={item.label}
              id={item.id}
              testId={item.testId}
              items={item.items}
              {...register(item.items.values as any)}
            />
            {errors?.valueInput && <p>{errors.valueInput.message}</p>}
            </Stack>
          ))
        }
        <input type="submit" />
        <Button label="Crea un nuevo cliente" testId="newUser">Crear cliente</Button>
      </form>
      </Container>
  );
};

export default AddClientForm;
