const fs = require('fs');

class Contenedor {
  contructor(archivo) {
    this.archivo = archivo;
  }

  async save(producto) {
    try {
      const datos = fs.readFileSync(this.archivo);
      const datosParsed = JSON.parse(datos);
      producto[id] = datosParsed[datosParsed.length - 1].id + 1;
      fs.writeFileSync(
        './productos.txt',
        JSON.stringify([...datosParsed, producto])
      );
    } catch (err) {
      fs.writeFileSync(
        './productos.txt',
        JSON.stringify([{ ...producto, id: 0 }])
      );
    }
  }

  getAll() {
    try {
      const datos = fs.readFileSync(this.archivo);
      return JSON.parse(datos);
    } catch (err) {
      console.log('El archivo no pudo ser leido');
    }
  }

  getById(id) {
    try {
      const productos = this.getAll();
      return productos.find((producto) => id === productos.id);
    } catch (err) {
      console.log(err);
    }
  }

  deleteAll() {
    fs.writeFileSync('./productos.txt', '');
  }

  deleteByID(id) {
    try {
      const datos = fs.readFileSync(this.archivo);
      const datosParsed = JSON.parse(datos);
      const idToDelete = datosParsed.indexOf(id);
      datosParsed.splice(idToDelete, 1);
      fs.writeFileSync('./productos.txt', JSON.stringify(datosParsed));
    } catch (err) {
      console.log('El ID no pudo ser eliminado');
    }
  }
}

Module.exports = Contenedor;
