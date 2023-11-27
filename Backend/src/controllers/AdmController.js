const AdmService = require('../services/AdmService')
const config = require('../config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const service = new AdmService()

class AdmController {
    async GetAdm(_, res) {
        try {
            const adm = await service.GetAdm()
            if (adm === null) {
                return res.status(404).json({ message: 'Não há administradores cadastrados!' })
            }

            res.status(200).json({ data: adm })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async GetAdmById(req, res) {
        try {
            const adm = await service.GetAdmById(req.params.id)
            if (adm === null) {
                return res.status(404).json({ message: 'Administrador não encontrado!' })
            }

            res.status(200).json({ data: adm })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async CreateAdm(req, res) {
        try {
            if (!req.body.email) {
                return res.status(400).json({ message: 'Email é obrigatório!' })
            }

            await service.CreateAdm(req.body)
            res.status(201).json({ message: 'Administrador criado com sucesso' })
        
        } catch (err) {
            if (err.status && err.message) {
                res.status(err.status).json({ message: err.message })
                
            } else if (err.name === 'SequelizeValidationError') {
                res.status(400).json({ message: err.message })
            
            } else {
                res.status(500).json({ message: 'Erro ao criar administrador' })
            }
        }
    }

    async UpdateAdm(req, res) {
        try {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: 'É necessário informar os dados que serão atualizados!' })
            }

            const result = await service.UpdateAdm(req.params.id, req.body)  

            if (result[0] === 0) {
                return res.status(404).json({ message: 'Administrador não encontrado!' })
            
            } else {
                res.status(200).json({ message: 'Administrador atualizado com sucesso!' })
            }
        }
        catch (err) {
            if (err.status && err.message) {
                res.status(err.status).json({ message: err.message })
            
            } else {
                res.status(500).json({ message: 'Erro ao atualizar administrador' })
            }
        }
    }

    async DeleteAdm(req, res) {
        try {
            const result = await service.DeleteAdm(req.params.id)

            if ( result === null ) {
                return res.status(404).json({ message: 'Administrador não encontrado!' })
            
            } else {
                res.status(200).json({ message: 'Administrador deletado com sucesso!' })
            } 

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async LoginAdm(req, res) {
        try {
            if (!req.body.email || !req.body.senha) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios!' })
            } 
            const { email, senha } = req.body
            const result = await service.GetByEmail(email)

            if (!result || !result.dataValues) {
                return res.status(404).json({ message: 'Administrador não encontrado!' })
            }
            const { dataValues: adm } = result

            if (!(await bcrypt.compare(senha, adm.senha))) {
                return res.status(401).json({ message: 'Email ou senha incorretos!' })
            
            } else {
                const token = jwt.sign(
                    {
                        id: adm.id,
                        email: adm.email
                    },
                    config.secret,
                )
                res.status(200).json({ accessToken: token })
            }
        } catch (err) {
            if (err.status && err.message) {
                res.status(err.status).json({ message: err.message })
            
            } else {
                console.log(err)
                res.status(500).json({ message: 'Erro ao fazer o login' })
            }
        }
    }
    

    async LogoutAdm(req, res) {
        try {
            await service.LogoutAdm(req.body)
            res.status(204).json()
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

module.exports = AdmController
