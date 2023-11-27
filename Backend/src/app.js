const express = require('express')

const adm = require('./routers/AdmRouter')
const cliente = require('./routers/ClienteRouter')
const servico = require('./routers/ServicoRouter')
const appointment = require('./routers/AppointmentsRouter')

const app = express()
const port = 3000

app .use(express.json())

app.use('/adm', adm)
app.use('/cliente', cliente)
app.use('/servico', servico)
app.use('/appointment', appointment)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    }
)
