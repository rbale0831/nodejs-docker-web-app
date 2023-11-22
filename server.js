import express from "express";

const PORT = process.env.PORT || 80;
const app = express(); 

app.get("/", (req, res) => {
    res.json({message:"App is running on docker container"});
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});