import { v4 as uuid } from "uuid";

export const inputsFormAddClient = [
  { placeholder: 'Nombre-Apellido', type: 'text', id: uuid(), testId:'nameOfClientForm', value:'nameOfClientForm' },
  { placeholder: '# Pedido', type: 'text', id: uuid(), testId:'accountClientForm', value:'accountClientForm' }, 
  { placeholder: 'Dirección', type: 'text', id: uuid(), testId:'addressOfClientForm', value:'addressOfClientForm' },
  { placeholder: 'Barrio', type: 'text', id: uuid(), testId:'neighborhoodOfClientForm', value:'neighborhoodOfClientForm' },
  { placeholder: 'Celular', type: 'number', id: uuid(), testId:'phoneOfClientForm', value:'phoneOfClientForm' },
  { placeholder: 'Referencia', type: 'text', id: uuid(), testId:'nameOfReferenceForm', value:'nameOfReferenceForm' },
  { placeholder: 'Contacto', type: 'text', id: uuid(), testId:'contactOfReferenceForm', value:'contactOfReferenceForm' },
  { placeholder: 'Fecha Cuota', type: 'text', id: uuid(), testId:'dateOfPaymentForm', value:'dateOfPaymentForm' },
  { placeholder: '# Cuotas', type: 'number', id: uuid(), testId:'numberOfPaymentForm', value:'numberOfPaymentForm' },
  { placeholder: 'Valor', type: 'number', id: uuid(), testId:'valueOfProductForm', value:'valueOfProductForm' },
];

export const categoriesFormAddClient = [
  {
    label: 'Artículo',
    id: uuid(), 
    testId:'categoriesGalery',
    items: [
      { placeholder:'Cuadro pequeño' ,value:'smallPicture', id:uuid(), name:'Cuadro pequeño', testId:'smallPicture' },
      { placeholder:'Cuadro grande', value:'bigPicture', id:uuid(), name:'Cuadro grande', testId:'bigPicture' },
      { placeholder:'Marmolina', value:'marble',id:uuid(), name:'Marmolina', testId:'marble' },
      { placeholder:'Cena', value:'lastMeal',id:uuid(), name:'Cena', testId:'lastMeal' }
    ], 
    
  },
];

export const itemsFormAddClient = [
  {
    label: 'Imágen', 
    id: uuid(), 
    testId:'itemsGalery',
    items: [
      { value:'Milagrosa', id:uuid(),  name:'Milagrosa', testId:'milagrosa'},
      { value:'Corazón de Jesús', id:uuid(), name:'Corazón de Jesús', testId:'corazonJesus'},
      { value:'Guadalupe', id:uuid(), name:'Guadalupe', testId:'guadalupe'},
      { value:'Pastor con Ovejas', id:uuid(), name:'Pastor con Ovejas', testId:'pastorOvejas'},
      { value:'Ultima Cena', id:uuid(), name:'Última Cena', testId:'ultimaCena'},
      { value:'Jesús con los niños', id:uuid(), name:'Jesús con los niños', testId:'jesúsNiños'},
      { value:'Misericordioso', id:uuid(),  name:'Misericordioso', testId:'misericordioso'},
      { value:'Corazón de María', id:uuid(), name:'Corazón de María', testId:'corazónMaría'},
      { value:'Miguel Arcángel', id:uuid(), name:'Miguel Arcángel', testId:'miguel'},
      { value:'Sagrada Familia', id:uuid(), name:'Sagrada Familia', testId:'familia'},
      { value:'Rostro Galileo', id:uuid(), name:'Rostro Galileo', testId:'rostro'},
      { value:'San Rafael', id:uuid(), name:'San Rafael', testId:'sanRafael'},
      { value:'San Gabriel', id:uuid(), name:'San Gabriel', testId:'sanGabriel'},
      { value:'San Jose', id:uuid(), name:'San Jose', testId:'sanJose' },
    ],
  }
];
