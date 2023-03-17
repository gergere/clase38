import { mostrarMensajes, onNuevoMensaje } from "../../Controllers/mensajes.controller.js";


export default async function configurarSocket(socket, sockets) {
  socket.emit('mensajes', await mostrarMensajes());

  socket.on('nuevoMensaje', async mensaje => {
    await onNuevoMensaje(mensaje);
    sockets.emit('mensajes', await mostrarMensajes());
  })
}