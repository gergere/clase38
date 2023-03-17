import mensajesApi from "../api/mensajes.js"
import { normalizarMensajes } from "../Services/normalizarMensajes.js"

export const listarMensajes = async () => {
  return normalizarMensajes(await mensajesApi.listarAll());
}

export const guardar = async (mensaje) => {
  return await mensajesApi.guardar(mensaje);
}