import express from "express";
const PORT = 3000;
const app = express();

app.get('/', (req, res)=> {
    res.json({"name": "Parkezy"});
})

app.listen(PORT, ()=> {
    console.log("Server started at Port : "+PORT);
})