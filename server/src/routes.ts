import express, { json } from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionsController();

//Classes
routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

//Connections
routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
