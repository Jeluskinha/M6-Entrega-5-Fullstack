import { authMiddleware } from './../middleware/ensureAuth.middleware';
import { Router } from "express";
import contactCreateController from '../controllers/contacts/contactsCreate.Controller';
import contactListController from '../controllers/contacts/contactsList.controller';
import contactUpdatedController from '../controllers/contacts/contactUpdate.Controller';
import contactsDeleteController from '../controllers/contacts/contactDelete.Controller';

const contactsRoutes = Router()

contactsRoutes.post("", authMiddleware, contactCreateController)
contactsRoutes.get("", authMiddleware, contactListController)
contactsRoutes.patch("/:id", authMiddleware, contactUpdatedController)
contactsRoutes.delete("/:id", authMiddleware, contactsDeleteController)

export default contactsRoutes