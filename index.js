const express = require('express')

const adminRouter = require('./routes/admin.routes')
const universityRouter = require('./routes/university.routes')
const certificateRouter = require('./routes/certificate.routes')
const userRouter = require('./routes/sign-up.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', adminRouter)
app.use('/api', universityRouter)
app.use('/api', certificateRouter)
app.use('/api', userRouter)


app.listen(PORT, () => console.log(`server started on post ${PORT}`))