const { response } = require('express');

const usuariosGet = (req, res = response) => {
  const { q, surname } = req.query;

  res.json({ msg: 'get api controller', q, surname });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({ msg: 'put api controller', id });
};

const usuariosPost = (req, res = response) => {
  const { name, age } = req.body;

  res.json({ msg: 'post api controller', name, age });
};

const usuariosDelete = (req, res = response) => {
  res.json({ msg: 'delete api controller' });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
