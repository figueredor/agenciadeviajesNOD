import { response } from 'express';
import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    //console.log(req.body) // Va a ser lo que el usuario coloque en el formulario

    // Validar formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio'});
    }
    if(mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio'});
    }
    //console.log(errores)
    if(errores.length > 0){
        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}