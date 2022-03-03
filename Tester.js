const test = new Contenedor('productos.txt');

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

console.log(test.getAll());
console.log(test.getById(3));
