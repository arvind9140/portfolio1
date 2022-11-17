import mongoose  from "mongoose";
export const connectDatabase = () => {
  const MONGO_URI = "mongodb+srv://arvi123:arvi123@arvidarpan.jkk1cpr.mongodb.net/ArviDarpan"
    mongoose
      .connect(MONGO_URI)
      .then((c) => {
        console.log(`Mongodb connect to: ${c.connection.host}`);
      }).catch((e) =>{
        console.log(e);
      })
    };