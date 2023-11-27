const express = require('express')
const authMiddleware = require('../middleware/auth')

const AdmController = require('../controllers/AdmController')

const controller = new AdmController()
const router = express.Router()

router.post('/login', controller.LoginAdm)
router.post('/newadm', authMiddleware(), controller.CreateAdm)
router.get('/', authMiddleware(), controller.GetAdm)
router.get('/:id', authMiddleware(), controller.GetAdmById)
router.put('/:id', authMiddleware(), controller.UpdateAdm)
router.delete('/:id', authMiddleware(), controller.DeleteAdm)

module.exports = router
