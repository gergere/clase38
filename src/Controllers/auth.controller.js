import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const auth = (req, res, next) => {
  if (req.session?.nombre) {
    next();
  } else {
    res.redirect('/login');
  }
}

export const getHome = (req, res) => {
  res.redirect('/home');
}

export const getLogin = (req, res) => {
  if (req.session?.nombre) {
    res.redirect('/home');
  } else {
    res.sendFile(path.join(__dirname, '../', '../views/login.html'));
  }
}

export const getLogout = (req, res) => {
  res.render('./pages/logout', { nombre: req.session.nombre });
  req.session.destroy();
}

export const postLogin = (req, res) => {
  req.session.nombre = req.body.nombre;
  res.redirect('/home');
}