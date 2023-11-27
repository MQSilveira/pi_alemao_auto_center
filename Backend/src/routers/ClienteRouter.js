const express = require('express')

const ClienteController = require('../controllers/ClienteController')
const authMiddleware = require('../middleware/auth')

const controller = new ClienteController()
const router = express.Router()

router.get('/', authMiddleware, controller.GetCliente)
router.get('/:id', authMiddleware, controller.GetClienteById)
router.post('/', authMiddleware, controller.CreateCliente)
router.put('/:id', authMiddleware, controller.UpdateCliente)
router.delete('/:id', authMiddleware, controller.DeleteCliente)

module.exports = router
