import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BlogRoutes } from '../modules/blogs/blogs.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { FaqRoutes } from '../modules/faq/faq.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { UserRoutes } from '../modules/users/users.routes';
import { MedServiceRoutes } from '../modules/service/service.routes';
import { FeedBackRoutes } from '../modules/feedbacks/feedbacks.routes';
import { ReviewAndRatingRoutes } from '../modules/reviews/reviews.route';
import { SlotRoutes } from '../modules/schedules/schedules.routes';
import { SpecializationRoutes } from '../modules/specialization/specialization.routes';
import { AppointmentBookingRoutes } from '../modules/appointment/appointment.routes';

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
    path: '/feedbacks',
    route: FeedBackRoutes,
  },
  {
    path: '/review-ratings',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
  {
    path: '/appointment-booking',
    route: AppointmentBookingRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/faqs',
    route: FaqRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
