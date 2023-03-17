import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const renderHome = (req, res) => {
  res.render(('./pages/home'), { nombre: req.session.nombre })
}

export const getProductosVistaTest = (req, res) => {
  res.sendFile(path.join(__dirname, '../../', '../views/productos-vista-test.html'))
}