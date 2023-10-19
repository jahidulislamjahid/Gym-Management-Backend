import express from 'express';
import { userRole } from '@prisma/client';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './users.controller';
import { UserValidation } from './users.validation';

const router = express.Router();

router.get(
  '/',
  UserController.getAllUsersController
);

router.get(
  '/:userId',
  UserController.getSingleUser
);

router.get(
  '/my-profile/:userId',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN, userRole.USER, userRole.DOCTOR),
  UserController.getMyProfile
);

router.patch(
  '/update-profile/:profileId',
  validateRequest(UserValidation.updateUser),
  UserController.updateProfileInfo
);

export const UserRoutes = router;
