const Contenedor = require('./Contenedor');

const test = new Contenedor('productos.txt');

test.save({
  title: 'Mesa',
  price: 123,
  thumbnail:
    'https://www.pexels.com/photo/round-beige-and-brown-wooden-table-and-chair-447592/',
});

test.save({
  title: 'Silla',
  price: 555,
  thumbnail:
    'https://www.pexels.com/photo/blue-chair-by-the-beige-wall-2258083/',
});

test.save({
  title: 'Lampara',
  price: 234,
  thumbnail: 'https://www.pexels.com/photo/black-metal-desk-lamp-1112598/',
});

console.log(test.getAll);
console.log(test.getById(1));
console.log(test.getById(2));
console.log(test.getById(3));

test();
