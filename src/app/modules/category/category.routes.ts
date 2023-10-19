import { userRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  CategoryController.createCategory
);

router.get(
  '/',
  CategoryController.getAllCategory
);

router.patch(
  '/:categoryId',
  CategoryController.updateCategory
);

router.delete(
  '/:categoryId',
  CategoryController.singleCategoryDelete
);

export const CategoryRoutes = router;
