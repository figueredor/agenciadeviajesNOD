import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje,

} from '../controllers/paginascontroller.js';

import {
    guardarTestimonial
} from '../controllers/testimonialcontroller.js';

const router = express.Router();

// req: lo que enviamos o petición. res: lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);


export default router;