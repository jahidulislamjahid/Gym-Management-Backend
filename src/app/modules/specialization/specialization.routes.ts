import express from 'express';

import { userRole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { SpecializationController } from './specialization.controller';

const router = express.Router();

router.post(
  '/',
  SpecializationController.createNewSpecialization
);

router.get(
  '/',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN, userRole.DOCTOR),
  SpecializationController.getAllSpecialization
);

router.patch(
  '/:specializationId',
  SpecializationController.updateSpecialization
);

router.delete(
  '/:specializationId',
  SpecializationController.deleteSpecialization
);

export const SpecializationRoutes = router;
