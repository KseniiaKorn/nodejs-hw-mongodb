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
import { authenticate } from "../middlewares/authenticate.js";


const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactController));

router.get('/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController));

router.post('/',
    validateBody(createContactsSchema),
    ctrlWrapper(createContactController)
);

router.put('/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(upsertContactController));

router.patch('/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(patchContactController));

router.delete('/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController));

export default router;