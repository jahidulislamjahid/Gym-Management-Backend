import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MedServiceController } from './service.controller';
import { MedServiceValidation } from './service.validation';

const router = express.Router();

router.post(
  '/create-service',
  validateRequest(MedServiceValidation.createService),
  MedServiceController.createNewService
);

router.get(
  '/',
  MedServiceController.getAllServices
);

router.get(
  '/:serviceId',
  MedServiceController.getSingleService
);

router.patch(
  '/:serviceId',
  validateRequest(MedServiceValidation.updateStyle),
  MedServiceController.updateService
);

router.delete(
  '/:serviceId',
  MedServiceController.SingleServiceDelete
);

export const MedServiceRoutes = router;

