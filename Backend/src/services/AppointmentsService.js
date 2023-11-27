const AppointmentRepository = require('../repositories/AppointmentsRepository')
const DataValidation = require('../utils/validation')

const verify = new DataValidation()

const repository = new AppointmentRepository()

class ApontmentServices {
    async GetAppointment() {
        const aponitments = repository.GetAppointment()
        return aponitments
    }
    
    async GetAppointmentById(id, transaction ) {
        verify.isIdValid(id)

        const appointment = repository.GetAppointmentById(id, transaction)
        return appointment
    }

    async CreateAppointment(data, transaction) {
        verify.isIdValid(data.id)
        verify.isItEmpty(data.data)

        const result = repository.CreateAppointment(data, transaction)
        return result
    }

    async UpdateAppointment(data, transaction) {
        verify.isIdValid(data.id)

        const result = repository.UpdateAppointment(data, transaction)
        return result
    }

    async DeleteAppointment(id, transaction) {
        verify.isIdValid(id)

        const result = repository.DeleteAppointment(id, transaction)
        return result
    }
}

module.exports = ApontmentServices
