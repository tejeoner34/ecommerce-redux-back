import {getAllProductsModel} from "./products.model.js";

export async function getAllProductsController(req, res) {
    const products = await getAllProductsModel();
    res.json(products);
}