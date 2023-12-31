import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { FeedBackFilterableFields } from './feedbacks.constant';
import { FeedBackFormService } from './feedbacks.service';

const createNewFeedBack = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedBackFormService.createNewFeedBackForm(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FeedBack created successfully!',
    data: result,
  });
});

const getAllFeedBack = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, FeedBackFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await FeedBackFormService.getAllFeedBack(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All FeedBacks fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateFeedBack = catchAsync(async (req: Request, res: Response) => {
  const { feedbackId } = req.params;
  const result = await FeedBackFormService.updateFeedBack(feedbackId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Updated successfully',
    data: result,
  });
});

const singleFeedBackDelete = catchAsync(async (req: Request, res: Response) => {
  const { feedbackId } = req.params;
  const result = await FeedBackFormService.SingleFeedbackDelete(feedbackId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result?.feedbackComment} Deleted successfully`,
  });
});

export const FeedBackController = {
  createNewFeedBack,
  getAllFeedBack,
  singleFeedBackDelete,
  updateFeedBack,
};
