const Adm = require('../models/Administrador')
const DataEncrypted = require('../utils/encrypter')

const { Sequelize } = require('sequelize');

const encrypter = new DataEncrypted()


class AdmRepository {
    async GetAdm() {
        try {
            const adm = await Adm.findAll({
                attributes: ['nome_completo', 'email', 'telefone']
            })
            if (adm.length === 0) {
                return null
            }
            return adm
            
        } catch (err) {
            throw err
        }
    }

    async GetAdmById(id, transaction) {
        try {
            const adm = await Adm.findOne({
                where: {
                    id: id
                }
            },
            { transaction }
            )

            if (!adm) {
                return null

            } else {
                const { nome_completo, email, telefone } = adm.dataValues
                return { nome_completo, email, telefone }
            }

        } catch (err) {
            throw err
        }
    }

    async FindAdmById(id, transaction) {
        try {
            const adm = await Adm.findOne({
                where: {
                    id: id
                }
            },
            { transaction }
            )

            if (!adm) {
                return null

            } else {
                const { nome_completo, id } = adm.dataValues
                return { nome_completo, id }
                
                
            }

        } catch (err) {
            throw err
        }
    }

    
    async CreateAdm(data, transaction) {
        try {
            const email = await this.GetByEmail(data.email)
            if (email) {
                throw new Error('Email já cadastrado')
            }

            const hashedsenha = await encrypter.HashPassword(data.senha)
            
            Adm.create(
                {
                    nome_completo: data.nome_completo,
                    email: data.email,
                    senha: hashedsenha,
                    telefone: data.telefone,
                },
                { transaction }
            )
            return null

        } catch (err) {
            throw { status: 409, message: err.message }
        }
    }

    async UpdateAdm(id, data, transaction) {
        try {
            const updateFields = {
                nome_completo: data.nome_completo,
                email: data.email,
                telefone: data.telefone,
                updatedAt : Sequelize.literal('CURRENT_TIMESTAMP')
            }

            if (data.senha) {
                const hashedsenha = await encrypter.HashPassword(data.senha)
                updateFields.senha = hashedsenha
            }

            if (data.email) {
                const email = await this.GetByEmail(data.email)
                if (email) {
                    throw new Error('Email já cadastrado')
                }
            }

            const adm = await Adm.update(
                updateFields,{ 
                    where: { 
                        id: id 
                    }
                },
                { transaction }
            )
            return adm
        
        } catch (err) {
            throw { status: 409, message: err.message }
        }
        
    }

    async DeleteAdm(id, transaction) {
        try {
            const rowsAffected  = await Adm.destroy(
                {
                    where: {
                        id: id
                    }
                },
                { transaction }
            )
            
            if (rowsAffected === 0) {
                return null
            }

            return rowsAffected

        } catch (err) {
            throw { status: 404, message: err.message }
        }
    }

    async GetAdmByEmail(email) {
        try {
            const adm = Adm.findOne({
                where: {
                    email: email
                    }
                }
            )
            return adm

        } catch (err) {
            throw err
        }
    }

    async GetByEmail(email) {
        try {
            return Adm.findOne({
                where: {
                    email: email
                    }
                }
            )
            
        }
        catch (err) {
            throw err
        }
    }

    //  fazer logout
    async LogoutAdm(data, transaction) {
        Adm.update(
            {
                constato: data.constato
            },
            { where: { id: data.id }},
            { transaction }
        )
    }

}

module.exports = AdmRepository
