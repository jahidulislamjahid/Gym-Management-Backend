import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
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
