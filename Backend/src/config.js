require('dotenv').config();


module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_URL,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        timezone: '-03:00',
        define: {
            underscored: true,
            timestamps: false
        }
    },
    secret: process.env.SECRET
}