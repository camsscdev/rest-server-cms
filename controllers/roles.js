const { response } = require('express');

const rolesGet = (req, res = response) => {
  const { q, surname } = req.query;

  res.json({ msg: 'get api roles controller', q, surname });
};

const rolesPut = (req, res = response) => {
  const id = req.params.id;
  res.json({ msg: 'put api roles controller', id });
};

module.exports = {
  rolesGet,
  rolesPut,
};
