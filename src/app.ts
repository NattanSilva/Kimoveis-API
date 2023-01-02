import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import handleError from "./errors/handleError";
import categoryRoutes from "./routes/category.routes";
import propertyRoutes from "./routes/property.routes";
import schedulesRoutes from "./routes/schedules.routes";


const app = express();
app.use(express.json());
app.use("/users" ,userRoutes);
app.use("/login" ,sessionRoutes);
app.use("/properties", propertyRoutes);
app.use("/categories" ,categoryRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleError);

export default app;