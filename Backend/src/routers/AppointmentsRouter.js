const express = require('express')

const AppointmentController = require('../controllers/AppointmentsController')
const authMiddleware = require('../middleware/auth')

const controller = new AppointmentController()
const router = express.Router()

router.get('/', authMiddleware, controller.GetAppointment)
router.get('/:id', authMiddleware, controller.GetAppointmentById)
router.post('/', authMiddleware, controller.CreateAppointment)
router.put('/:id', authMiddleware, controller.UpdateAppointment)
router.delete('/:id', authMiddleware, controller.DeleteAppointment)

module.exports = router

