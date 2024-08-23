import { Invoice } from '../models/invoice';

export const invoiceData: any = {
  id: 1,
  name: 'Componentes de PC',
  client: {
    name: 'Juan',
    lastname: 'Rosales',
    address: {
      country: 'España',
      city: 'Madrid',
      street: 'Paseo de la Castellana',
      number: 193,
    },
  },
  company: {
    name: 'VeneCode.sl',
    fiscalNumber: 55896037,
  },
  items: [
    { id: 1, product: 'Cpu Intel i9', price: 685.99, quantity: 2 },
    { id: 2, product: 'Placa Base Asus', price: 299.99, quantity: 1 },
    { id: 3, product: 'Memoria RAM 16GB', price: 89.99, quantity: 4 },
    {
      id: 4,
      product: 'Tarjeta Gráfica RTX 3080',
      price: 999.99,
      quantity: 1,
    },
    { id: 5, product: 'Disco Duro SSD 1TB', price: 119.99, quantity: 2 },
    {
      id: 6,
      product: 'Fuente de Alimentación 750W',
      price: 129.99,
      quantity: 1,
    },
    { id: 7, product: 'Caja ATX', price: 79.99, quantity: 1 },
    { id: 8, product: 'Ventilador CPU', price: 39.99, quantity: 2 },
    { id: 9, product: 'Teclado Mecánico', price: 89.99, quantity: 1 },
    { id: 10, product: 'Ratón Gaming', price: 49.99, quantity: 1 },
  ],
};
