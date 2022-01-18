import express from "express";
import cors from "cors";
import productsRouter from "./src/products/products.router.js";
import dotenv from "dotenv";
dotenv.config();



const app = express()

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter)


const PORT = process.env.PORT || 4567
app.listen(PORT,()=>{
    console.log('server up')
})