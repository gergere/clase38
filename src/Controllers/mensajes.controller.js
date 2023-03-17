import { guardarMensaje, traerMensajes } from "../Services/mensajes.services.js"

export const mostrarMensajes = async () => {
  return await traerMensajes();
}

export const onNuevoMensaje = async (mensaje) => {
  await guardarMensaje(mensaje)
}