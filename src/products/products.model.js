import { MongoClient } from "mongodb";
import {URI} from "../config/config.js"

const client = new MongoClient(URI);


export async function getAllProductsModel(){
    try{
        await client.connect();
        const db = client.db('ecommerce');
        const products = db.collection('products');
        return await products.find().toArray()

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}