import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { UserRoutes } from '../modules/users/users.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { MedServiceRoutes } from '../modules/service/service.routes';
import { FeedBackRoutes } from '../modules/feedbacks/feedbacks.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/services',
    route: MedServiceRoutes,
  },
  {
    path: '/feedback-forms',
    route: FeedBackRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
