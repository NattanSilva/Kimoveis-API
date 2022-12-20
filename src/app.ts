import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import handleError from "./errors/handleError";


const app = express()
app.use(express.json())
app.use("/users",userRoutes)
app.use("/login",sessionRoutes)

app.use(handleError);

export default app