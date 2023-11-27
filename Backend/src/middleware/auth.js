const jwt = require('jsonwebtoken')
const config = require('../config')

function authMiddleware() {
    return (req, res, next) => {
        const token = req.headers['authorization']

        console.log(token)


        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' })
        }

        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' })
            }
            
            // const { role } = decoded

            // if (role !== permission && permission !== null) {
            //     return res.status(401).json({ message: 'Você não tem permissão para acessar essa rota' })
            // }


            next()
        })
    }
}

module.exports = authMiddleware