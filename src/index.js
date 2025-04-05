import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
connectDB()
.then(()=>{
    AudioParamMap.listen(process.env.PORT || 8080, () => {
        console.log(`server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !! ", err);
})