import { v4 as uuid } from "uuid";

export const inputsFormAddClient = [
  { placeholder: 'Nombre-Apellido', type: 'text', id: uuid(), testId:'nameOfClientForm' },
  { placeholder: '# Pedido', type: 'text', id: uuid(), testId:'accountClientForm' }, 
  { placeholder: 'Dirección', type: 'text', id: uuid(), testId:'addressOfClientForm' },
  { placeholder: 'Celular', type: 'number', id: uuid(), testId:'phoneOfClientForm' },
  { placeholder: 'Referencia', type: 'text', id: uuid(), testId:'nameOfReferenceForm' },
  { placeholder: 'Contacto', type: 'text', id: uuid(), testId:'contactOfReferenceForm' },
  { placeholder: 'Fecha Cuota', type: 'text', id: uuid(), testId:'dateOfPaymentForm' },
  { placeholder: '# Cuotas', type: 'number', id: uuid(), testId:'numberOfPaymentForm' },
];

export const categoriesFormAddClient = [
  {
    label: 'Artículo',
    id: uuid(), 
    testId:'categoriesGalery',
    items: [
      { value:'Cuadro pequeño', itemId:uuid(), name:'Cuadro pequeño' },
      { value:'Cuadro grande', itemId:uuid(), name:'Cuadro grande' },
      { value:'Marmolina', itemId:uuid(), name:'Marmolina' },
      { value:'Cena', itemId:uuid(), name:'Cena' }
    ], 
    
  },
];

export const itemsFormAddClient = [
  {
    label: 'Imágen', 
    items: [
      { value:'Milagrosa', id:uuid(), itemId: uuid(), name:'Cuadro pequeño' },
      { value:'Corazón de Jesús', id:uuid(), itemId: uuid(), name:'Cuadro grande' },
      { value:'Guadalupe', id:uuid(), itemId: uuid(), name:'Marmolina' },
      { value:'Pastor con Ovejas', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Ultima Cena', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Jesús con los niños', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Misericordioso', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Corazón de María', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Miguel Arcángel', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Sagrada Familia', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'Rostro Galileo', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'San Rafael', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'San Gabriel', id:uuid(), itemId: uuid(), name:'Cena' },
      { value:'San Jose', id:uuid(), itemId: uuid(), name:'Cena' },
    ], 
    id: uuid(), 
    testId:'itemsGalery'
  }
];