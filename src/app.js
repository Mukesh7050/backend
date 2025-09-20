import express  from  "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express();

app.use(cors({
    orgine:process.env.CORS_ORGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieparser())



// routes import 
import UserRouter from "./routes/user.router.js" 

// route declaration 

app.use("/api/v1/users",UserRouter)

// http://localhost:8000/api/v1/users/register

export {app}   // or  export default app;