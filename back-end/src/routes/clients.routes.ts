import { Router } from "express";
import { authMiddleware } from './../middleware/ensureAuth.middleware';

const clientRoutes = Router()

import clientCreateController from "../controllers/clients/clientCreate.Controller";
import clientDeleteControler from "../controllers/clients/clientDelete.Controller";
import clientListController from "../controllers/clients/clientList.Controller";
import clientListOneController from "../controllers/clients/clientListOne.Controller";
import clientUpdateController from "../controllers/clients/clientUpdate.Controller";

clientRoutes.post("", clientCreateController)
clientRoutes.get("", clientListController)
clientRoutes.get("/me", authMiddleware,clientListOneController)
clientRoutes.patch('/:id', clientUpdateController)
clientRoutes.delete('/:id', clientDeleteControler)

export default clientRoutes