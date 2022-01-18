import express from "express";
import { getAllProductsController } from "./products.controller.js";


const router = express.Router();

router.route('/')
    .get(getAllProductsController)

export default router;