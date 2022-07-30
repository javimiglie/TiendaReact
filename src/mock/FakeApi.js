const productos = [
  {
    id: '01',
    name: 'Remera 1',
    description: 'La remera que va con vos',
    category: `Remeras`,
    price: 750,
    img: '/img/remera1.jpeg',
    stock: 3,
  },
  {
    id: '02',
    name: 'Remera 2',
    description: 'La remera que va con vos',
    category: `Remeras`,
    price: 950,
    img: '/img/remera2.jpeg',
    stock: 5,
  },
  {
    id: '03',
    name: 'Remera 3',
    description: 'La remera que va con vos',
    category: `Remeras`,
    price: 1200,
    img: '/img/remera3.jpg',
    stock: 7,
  },
  {
    id: '04',
    name: 'Buzo 1',
    description: 'El buzo que va con vos',
    category: `Buzos`,
    price: 1200,
    img: '/img/buzo1.jpg',
    stock: 4,
  },
  {
    id: '05',
    name: 'Buzo 2',
    description: 'El buzo que va con vos',
    category: `Buzos`,
    price: 1200,
    img: '/img/buzo2.jpeg',
    stock: 2,
  },
  {
    id: '06',
    name: 'Campera 1',
    description: 'La campera que va con vos',
    category: `Camperas`,
    price: 1200,
    img: '/img/campera1.jpg',
    stock: 3,
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
