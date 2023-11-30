var express = require('express');
var router = express.Router();
var tareaModel = require('../../models/tareaModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


//para listar las tareas
router.get('/', async function (req, res, next) {
  var tareas = await tareaModel.getTarea();

  tareas = tareas.map(tarea => {
    if (tarea.img_id) {
      const imagen = cloudinary.image(tarea.img_id, {
        width: 50,
        height: 50,
        crop: 'fill'
      });
      return {
        ...tarea,
        imagen
      }
    } else {
      return {
        ...tarea,
        imagen: ''
      }
    }
  });



  res.render('admin/principal', { //login.hbs
    layout: 'admin/layout',
    persona: req.session.nombre,
    tareas
  })
});

//agregar tareas
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});



router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await tareaModel.insertTarea({
        ...req.body,
        img_id
      });
      res.redirect('/admin/principal')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo las tareas'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let tarea = await tareaModel.getTareaById(id);
  if (tarea.img_id) {
    await (destroy(tarea.img_id));
  }

  await tareaModel.deleteTareaById(id);
  res.redirect('/admin/principal');
});


router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var tareas = await tareaModel.getTareaById(id);

  // console.log(req.params.id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    tareas
  })
});

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === '1') {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }


    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    console.log(obj);

    await tareaModel.modificarTareaById(obj, req.body.id);
    res.redirect('/admin/principal');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la tarea'
    })
  }
})


module.exports = router;