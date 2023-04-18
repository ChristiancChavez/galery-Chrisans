import { v4 as uuid } from "uuid";

export const inputsFormAddClient = [
  { placeholder: 'Nombre-Apellido', type: 'text', id: uuid(), testId:'nameOfClientForm' },
  { placeholder: '# Pedido', type: 'text', id: uuid(), testId:'accountClientForm' }, 
  { placeholder: 'Dirección', type: 'text', id: uuid(), testId:'addressOfClientForm' },
  { placeholder: 'Barrio', type: 'text', id: uuid(), testId:'neighborhoodOfClientForm' },
  { placeholder: 'Celular', type: 'number', id: uuid(), testId:'phoneOfClientForm' },
  { placeholder: 'Referencia', type: 'text', id: uuid(), testId:'nameOfReferenceForm' },
  { placeholder: 'Contacto', type: 'text', id: uuid(), testId:'contactOfReferenceForm' },
  { placeholder: 'Fecha Cuota', type: 'text', id: uuid(), testId:'dateOfPaymentForm' },
  { placeholder: '# Cuotas', type: 'number', id: uuid(), testId:'numberOfPaymentForm' },
  { placeholder: 'Valor', type: 'number', id: uuid(), testId:'valeuOfProductForm' },
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
      { value:'Milagrosa', id:uuid(), itemId: uuid(), name:'Milagrosa' },
      { value:'Corazón de Jesús', id:uuid(), itemId: uuid(), name:'Corazón de Jesús' },
      { value:'Guadalupe', id:uuid(), itemId: uuid(), name:'Guadalupe' },
      { value:'Pastor con Ovejas', id:uuid(), itemId: uuid(), name:'Pastor con Ovejas' },
      { value:'Ultima Cena', id:uuid(), itemId: uuid(), name:'Última Cena' },
      { value:'Jesús con los niños', id:uuid(), itemId: uuid(), name:'Jesús con los niños' },
      { value:'Misericordioso', id:uuid(), itemId: uuid(), name:'Misericordioso' },
      { value:'Corazón de María', id:uuid(), itemId: uuid(), name:'Corazón de María' },
      { value:'Miguel Arcángel', id:uuid(), itemId: uuid(), name:'Miguel Arcángel' },
      { value:'Sagrada Familia', id:uuid(), itemId: uuid(), name:'Sagrada Familia' },
      { value:'Rostro Galileo', id:uuid(), itemId: uuid(), name:'Rostro Galileo' },
      { value:'San Rafael', id:uuid(), itemId: uuid(), name:'San Rafael' },
      { value:'San Gabriel', id:uuid(), itemId: uuid(), name:'San Gabriel' },
      { value:'San Jose', id:uuid(), itemId: uuid(), name:'San Jose' },
    ], 
    id: uuid(), 
    testId:'itemsGalery'
  }
];