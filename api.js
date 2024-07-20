const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')

const app = express()
app.use(express.json())

app.get('/', async (req,resp)=>{
    const db = await dbConnect()
    const result = await db.find().toArray()
    resp.send({result})
})

app.post('/', async (req,resp)=>{
    const db = await dbConnect()
    const response = await db.insertOne(req.body)
    resp.send(response)
    
})

app.put('/:name', async (req,resp)=>{
     const db = await dbConnect()
     const response = await db.updateOne({name: req.params.name}, {$set: req.body})
     resp.send(response)
    
})

app.delete('/:id', async (req,resp)=>{
     const db = await dbConnect()
     const response = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    //  new mongodb.ObjectId(req.params.id)
     resp.send(response)
    
})

app.listen(5000)