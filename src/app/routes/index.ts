import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { UserRoutes } from '../modules/users/users.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { MedServiceRoutes } from '../modules/service/service.routes';
import { FeedBackRoutes } from '../modules/feedbacks/feedbacks.routes';
import { ReviewAndRatingRoutes } from '../modules/reviews/reviews.route';
import { SpecializationRoutes } from '../modules/specialization/specialization.routes';
import { SlotRoutes } from '../modules/schedules/schedules.routes';

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
  {
    path: '/review-ratings',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
