const Appointments = require('../models/Appointments')

class AppointmentRepository {
    async GetAppointment() {
        const appointments = await Appointments.findAll()
        return appointments
    }

    async GetAppointmentById(id, transaction) {
        const appointment = await Appointments.findOne(
            {
                where: {id}
            },
            { transaction }
        )
        return appointment
    }

    async CreateAppointment(data, transaction) {
        Appointments.create(
            {
                id_cliente: data.id_cliente,
                id_adm: data.id_adm,
                id_servico: data.id_servico,
                is_finished: data.is_finished,
                created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            },
            { transaction }
        )
    }

    async UpdateAppointment(data, transaction) {
        Appointments.update(
            {
                id_cliente: data.id_cliente,
                id_adm: data.id_adm,
                id_servico: data.id_servico,
                is_finished: data.is_finished,
                updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
            },
            {
                where: { id: data.id }
            },
            { transaction }
        )
    }

    async DeleteAppointment(id, transaction) {
        Appointments.destroy(
            {
                where: { id }
            },
            { transaction }
        )
    }
}

module.exports = AppointmentRepository