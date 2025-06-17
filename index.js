const express = require('express')

app = express()

app.use(express.json())


app.get("/", (req,res)=>{
    const data = {
        mensaje: "Hola undo"
    }
    res.status(200).json({data})
})

app.post("/api/webhook", async (req, res)=>{
    console.log(req.body)
    const body = req.body
     res.status(201).json(body)
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000")
})

