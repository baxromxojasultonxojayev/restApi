const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const psql = require('./modules/postgres')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use( async (req, res, next) =>{
  req.psql = await psql
  next()
})

app.use(cors())

app.listen(8010, () => console.log(`Ready at ${8010}`))

fs.readdir(path.join(__dirname, "routes"), (err, files)=>{
  files.forEach(file =>{
    const route = require(path.join(__dirname, "routes", file))
    if(route.path && route.router)app.use(route.path, route.router)
  })

})