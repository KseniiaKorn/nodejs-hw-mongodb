import { Router } from "express";
import {
    getContactController,
    getContactByIdController,
    createContactController,
    upsertContactController,
    patchContactController,
    deleteContactController,
} from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactsSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController));

router.post('/contacts',
    validateBody(createContactsSchema),
    ctrlWrapper(createContactController)
);

router.put('/contacts/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController));

export default router;