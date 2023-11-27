const AppointmentService = require('../services/AppointmentsService')

const services = new AppointmentService()

class AppointmentController {
    async GetAppointment(_, res) {
        try {
            const appointments = await services.GetAppointment()
            res.status(200).json({ data: appointments })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async GetAppointmentById(req, res) {
        try {
            const appointment = await services.GetAppointmentById(req.params.id)
            res.status(200).json({ data: appointment })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async CreateAppointment(req, res) {
        try {
            const data = {
                id_cliente: req.body.id_cliente,
                id_adm: req.body.id_adm,
                id_servico: req.body.id_servico,
                is_finished: req.body.is_finished
            }

            const result = await services.CreateAppointment(data)
            res.status(201).json({ data: result })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async UpdateAppointment(req, res) {
        try {
            const data = {
                id_cliente: req.body.id_cliente,
                id_adm: req.body.id_adm,
                id_servico: req.body.id_servico,
                is_finished: req.body.is_finished
            }

            const result = await services.UpdateAppointment(data)
            res.status(200).json({ data: result })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async DeleteAppointment(req, res) {
        try {
            const result = await services.DeleteAppointment(req.params.id)
            res.status(200).json({ data: result })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = AppointmentController