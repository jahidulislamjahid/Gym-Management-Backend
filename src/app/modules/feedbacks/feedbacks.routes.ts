import express from 'express';
import { userRole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { FeedBackController } from './feedbacks.controller';

const router = express.Router();

router.post(
  '/add-feedback',
  auth(userRole.USER),
  FeedBackController.createNewFeedBack
);

router.get(
  '/',
  FeedBackController.getAllFeedBack
);

router.patch(
  '/:feedbackId',
  FeedBackController.updateFeedBack
);

router.delete(
  '/:feedbackId',
  FeedBackController.singleFeedBackDelete
);

export const FeedBackRoutes = router;
