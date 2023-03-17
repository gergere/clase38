import { errorLog } from '../Services/logger.js';
import { guardar, listarMensajes } from '../Model/mensajes.model.js';


export const traerMensajes = async () => {
  try {
    return listarMensajes;
  } catch (error) {
    errorLog(`Error al cargar mensajes: ${error.message}`);
    return [];
  }
}

export const guardarMensaje = async (mensaje) => {
  try {
    return await guardar(mensaje);
  } catch (error) {
    errorLog(`Error al guardar el mensaje: ${error.message}`);
  }
}