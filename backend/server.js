const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 500

const app = express()

app.get('/api/goals', (req, res)=>{
    res.status(200).json({message: 'get goals'})
})

app.listen(port, () => console.log(`server started at port ${port}`))
