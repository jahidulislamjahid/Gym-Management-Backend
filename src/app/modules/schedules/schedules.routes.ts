import express from 'express';
import { SlotController } from './schedules.controller';
import { userRole } from '@prisma/client';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
  '/',
  SlotController.getAllSlots
);
router.post(
  '/create-slot',
  auth(userRole.USER),
  SlotController.createNewSlot
);

router.patch(
  '/:slotId',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  SlotController.updateSlot
);

router.delete(
  '/:slotId',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  SlotController.deleteSlot
);

export const SlotRoutes = router;
