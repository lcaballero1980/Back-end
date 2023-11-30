var express = require('express');
var router = express.Router();
var tareaModel = require('../models/tareaModel.js');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/tareas', async function (req, res, next) {
    let tareas = await tareaModel.getTarea();

    tareas = tareas.map(tareas => {
        if (tareas.img_id) {
            const imagen = cloudinary.url(tareas.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...tareas,
                imagen
            }
        } else {
            return {
                ...tareas,
                imagen: ''
            }
        }
    });
    res.json(tareas);
});

router.post('/contacto', async (req,res) => {
    const mail ={
        to: 'jachal025@gmail.com',
        subject: 'Contacto web',
        html:`${req.body.nombre} Se contacto a traves de la web, si quiere màs informacion a este correo:${req.
        body.email} <br> Ademas, hizo el comentario: ${req.body.mensaje} <br> Su tel. es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.smtp_host,
        port: process.env.smtp_port,
        auth:{
            user: process.env.smtp_user,
            pass: process.env.smtp_pass
        }
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
})

module.exports = router;