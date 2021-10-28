// Importando Router
import { Router } from 'express';
// importando al controlador home

import homeController from '@server/controllers/homeControllers';

// Creando la instancia de un enrutador
const router = new Router();

// GET
router.get('/', homeController.index);

// GET /greeting
router.get('/greeting', homeController.greeting);

// Exportando el router que maneja las subrutas para el controlador
export default router;