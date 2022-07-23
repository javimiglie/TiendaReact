const productos = [
  {
    id: '01',
    name: 'Remera 1',
    description: 'La remera que va con vos',
    price: 750,
    img: '/img/remera1.jpeg',
    stock: 3,
  },
  {
    id: '02',
    name: 'Remera 2',
    description: 'La remera que va con vos',
    price: 950,
    img: '/img/remera2.jpeg',
    stock: 5,
  },
  {
    id: '03',
    name: 'Remera 3',
    description: 'La remera que va con vos',
    price: 1200,
    img: '/img/remera3.jpg',
    stock: 7,
  },
];

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(productos);
    } else {
      reject('salio mal');
    }
  }, 3000);
});
