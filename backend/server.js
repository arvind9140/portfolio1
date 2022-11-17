import { app} from "./app.js"
import dotenv from "dotenv"
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

// require('dotenv').config({path:"./config/.env"})
dotenv.config({path:"./backend/config/.env"});
// var PORT = 4000;
connectDatabase();

cloudinary.v2.config({
  cloud_name: 'dfq0ge0zt', 
  api_key: '214435175726284', 
  api_secret: 'PDhOv_RVTqE_G4txGp6W_ubLwzw' 
});

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port: ${process.env.PORT}`)
})