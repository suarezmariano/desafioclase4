const fs = require('fs');

class Contenedor {
  constructor(nombre) {
    this.archivo = nombre;
  }

  async save(producto) {
    try {
      const datos = fs.readFileSync(this.archivo);
      const datosParsed = JSON.parse(datos);
      producto['id'] = datosParsed[datosParsed.length - 1].id + 1;
      fs.writeFileSync(
        `./${this.archivo}`,
        JSON.stringify([...datosParsed, producto], null, 2)
      );
    } catch (err) {
      fs.writeFileSync(
        `./${this.archivo}`,
        JSON.stringify([{ ...producto, id: 1 }])
      );
    }
  }

  getAll() {
    try {
      const contenido = fs.readFileSync(this.archivo);
      return JSON.parse(contenido);
    } catch (error) {
      console.log('No se pudo leer el archivo');
    }
  }

  getById(id) {
    try {
      const productos = fs.readFileSync(this.archivo);
      let productosParsed = JSON.parse(productos);
      return productosParsed.find((producto) => id === producto.id);
    } catch (err) {
      console.log('Error');
    }
  }

  deleteAll() {
    fs.writeFileSync('./productos.txt', '');
  }

  deleteByID(id) {
    try {
      const datos = fs.readFileSync('productos.txt');
      const datosParsed = JSON.parse(datos);
      const idToDelete = datosParsed.map((producto) => producto.id).indexOf(id);
      datosParsed.splice(idToDelete, 1);
      fs.writeFileSync('./productos.txt', JSON.stringify(datosParsed));
    } catch (err) {
      console.log('El ID no pudo ser eliminado');
    }
  }
}

const test = new Contenedor('productos.txt');
/*
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
});*/

//console.log(test.deleteByID(1));

//console.log(test.getAll());
//console.log(test.getById(3));

//console.log(test.deleteAll());
