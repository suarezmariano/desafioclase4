const Contenedor = require('./Contenedor');
const test = new Contenedor('productos.txt');

console.log('Agrego tres productos y crea el archivo si este no existe:');

test.save({
  title: 'Mesa',
  price: '123',
  thumbnail: 'www.google.com',
});

test.save({
  title: 'Silla',
  price: '22',
  thumbnail: 'www.google.com',
});

test.save({
  title: 'Cama',
  price: '33',
  thumbnail: 'www.google.com',
});

console.log('Muestro todos los productos:');
console.log(test.getAll());
console.log('Muestro el producto con Id Nro 3:');
console.log(test.getById(3));
console.log('Borro el producto con Id Nro 2:');
console.log(test.deleteByID(2));
console.log(test.getAll());
console.log('Borro todo el contenido del archivo:');
console.log(test.deleteAll());
console.log(test.getAll());
console.log('Elimino el archivo:');
console.log(test.deleteFile());
