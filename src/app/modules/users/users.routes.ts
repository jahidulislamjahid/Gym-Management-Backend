import { userRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './users.controller';
import { UserValidation } from './users.validation';

const router = express.Router();

router.get(
  '/',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  UserController.getAllUsersController
);

router.get(
  '/my-profile',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN, userRole.USER, userRole.DOCTOR),
  UserController.getMyProfile
);

router.get(
  '/:userId',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  UserController.getSingleUser
);

router.patch(
  '/update-my-email-password',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  validateRequest(UserValidation.updateUser),
  UserController.updateMyUserInfo
);

router.patch(
  '/update-profile/:profileId',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  validateRequest(UserValidation.updateUser),
  UserController.updateProfileInfo
);

router.patch(
  '/update-my-profile',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN, userRole.USER, userRole.DOCTOR),
  validateRequest(UserValidation.updateUser),
  UserController.updateMyProfileInfo
);

export const UserRoutes = router;
