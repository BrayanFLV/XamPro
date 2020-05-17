const express = require('express');

const router = express.Router();
const pool = require('../database.js');

//Productos play
router.get('/play', async (req, res) => {
  const play = await pool.query('SELECT pro.nombre , pro.precio , pro.foto, cat.categoria, cat.id_categoria FROM productos pro, categoria cat WHERE pro.id_categoria = 1 AND cat.id_categoria = 1');
  res.json(play);

});

router.get('/play1', async (req, res) => {
  const play = await pool.query('SELECT pro.nombre , pro.precio, pro.foto FROM productos pro WHERE pro.id_productos=1');
  res.json(play);
});

router.post('/insertarPlay', async (req, res) => {
  const {nombre,precio,foto,id_categoria} = req.body;
  const newProducto = {nombre,precio,foto,id_categoria};
  await pool.query('insert into productos set ?',[newProducto]);
  console.log(req.body);
  res.send('breve');
});



//productos xbox
router.get('/xbox', async (req, res) => {
  const xbox = await pool.query('SELECT pro.nombre , pro.precio , pro.foto, cat.categoria, cat.id_categoria FROM productos pro, categoria cat WHERE pro.id_categoria = 2 AND cat.id_categoria = 2');
  res.json(xbox);
});

router.post('/insertarXbox', async (req, res) => {
  const {nombre,precio,foto,id_categoria} = req.body;
  const newProducto = {nombre,precio,foto,id_categoria};
  await pool.query('insert into productos set ?',[newProducto]);
  console.log(req.body);
  res.send('breve');
});
  
//productos Nintendo
router.get('/nintendo', async (req, res) => {
  const Nintendo = await pool.query('SELECT pro.nombre , pro.precio , pro.foto, cat.categoria, cat.id_categoria FROM productos pro, categoria cat WHERE pro.id_categoria = 3 AND cat.id_categoria = 3');
  res.json(Nintendo);
});

router.post('/insertarNintendo', async (req, res) => {
  const {nombre,precio,foto,id_categoria} = req.body;
  const newProducto = {nombre,precio,foto,id_categoria};
  await pool.query('insert into productos set ?',[newProducto]);
  console.log(req.body);
  res.send('breve');
});
  

// usuarios
router.get('/usuarios', async (req, res) => {
  const Nintendo = await pool.query('SELECT * FROM usuarios');
  res.json(Nintendo);
});
  
router.get("/usuarios:id",async(req, res) => {
  const { id } = req.params;
  const usuario1 = await pool.query('SELECT * FROM play WHERE id_usuario = ?',[id]);
  res.json(usuario1);
});
module.exports = router;

router.post('/insertarUsuario', async (req, res) => {
  const {nombre,correo,telefono,id_categoria} = req.body;
  const newProducto = {nombre,correo,telefono,id_categoria};
  await pool.query('insert into usuarios set ?',[newProducto]);
  console.log(req.body);
  res.send('breve');
});
  