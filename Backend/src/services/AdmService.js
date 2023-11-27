const AdmRepository = require('../repositories/AdmRepository')
const DataValidation = require('../utils/validation')

const verify = new DataValidation()
const repositories = new AdmRepository()


class AdmService {
    async GetAdm() {
        const adm = repositories.GetAdm()
        return adm
    }

    async GetAdmById(id, transaction) {
        const adm = repositories.GetAdmById(id, transaction)
        return adm
    }

    async CreateAdm(data, transaction) {
        const adm = repositories.CreateAdm(data, transaction)
        return adm
    }


    async UpdateAdm(id, data, transaction) {
        const adm = repositories.UpdateAdm(id, data, transaction)
        return adm
    }

    async DeleteAdm(id, transaction) {
        const adm = repositories.DeleteAdm(id, transaction)
        return adm
    }

    async GetByEmail(email) {
        return repositories.GetByEmail(email)
    }

    async LogoutAdm(data, transaction) {
        repositories.LogoutAdm(data, transaction)
    }
}

module.exports = AdmService

