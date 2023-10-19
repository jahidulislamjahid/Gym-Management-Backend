import express from 'express';
import auth from '../../middlewares/auth';
import { userRole } from '@prisma/client';
import { ProductsController } from './products.controller';

const router = express.Router();

router.post(
  '/create-product',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
  ProductsController.createNewProduct
);
router.get(
  '/',
  ProductsController.getAllProducts
);

router.get(
  '/:productId',
  ProductsController.getSingleProduct
);

router.patch(
  '/:productId',
  ProductsController.updateProduct
);

router.delete(
  '/:productId',
  ProductsController.singleProductDelete
);

export const ProductsRoutes = router;
