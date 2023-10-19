import { userRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FeedBackController } from './feedbacks.controller';
import { FeedBackValidation } from './feedbacks.validation';

const router = express.Router();

router.post(
  '/add-feedback',
  auth(userRole.USER),
  validateRequest(FeedBackValidation.createFeedBack),
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
