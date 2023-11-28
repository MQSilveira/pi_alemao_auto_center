const express = require('express')

const ServicoController = require('../controllers/ServicoController')
const authMiddleware = require('../middleware/auth')

const controller = new ServicoController()
const router = express.Router()

router.get('/', authMiddleware(), controller.GetServico)
router.get('/:id', authMiddleware(), controller.GetServicoById)
router.post('/', authMiddleware(), controller.CreateServico)
router.put('/:id', authMiddleware(), controller.UpdateServico)
router.delete('/:id', authMiddleware(), controller.DeleteServico)

module.exports = router
