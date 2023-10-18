import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { IProfileUpdateRequest } from './users.interface';

const getAllUserService = async (options: IPaginationOptions): Promise<any> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);

  const result = await prisma.user.findMany({
    skip,
    take: limit,
    select: {
      userId: true,
      email: true,
      profile: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  const total = await prisma.user.count();

  const totalPage = Math.ceil(total / limit);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    data: result,
  };
};

const getSingleUser = async (userId: string): Promise<any | null> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      userId,
    },
  });

  if (!existingUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not Found !!');
  }

  const result = await prisma.user.findUnique({
    where: {
      userId,
    },
    select: {
      userId: true,
      email: true,
      profile: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not Found !!');
  }

  return result;
};

const updateProfileInfo = async (
  profileId: string,
  payload: IProfileUpdateRequest
): Promise<{
  message: string;
  updatedInfo: IProfileUpdateRequest;
}> => {
  if ('profileId' in payload) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Profile ID cannot be changed');
  }

  const existingProfile = await prisma.profile.findUnique({
    where: {
      profileId,
    },
  });

  if (!existingProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Profile not found!');
  }

  const { firstName, lastName, profileImage, role } = payload;

  const updateData: Partial<IProfileUpdateRequest> = {};

  if (firstName !== undefined) {
    updateData.firstName = firstName;
  }

  if (lastName !== undefined) {
    updateData.lastName = lastName;
  }

  if (profileImage !== undefined) {
    updateData.profileImage = profileImage;
  }

  if (role !== undefined) {
    updateData.role = role;
  }

  if (Object.keys(updateData).length === 0) {
    return {
      message: 'No changes to update',
      updatedInfo: {},
    };
  }

  const result = await prisma.profile.update({
    where: {
      profileId,
    },
    data: updateData,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Profile update failed');
  }

  return {
    message: 'Profile information updated successfully',
    updatedInfo: updateData,
  };
};

const getMyProfile = async (userId: string): Promise<any | null> => {
  console.log('userId', userId);
  const result = await prisma.user.findUnique({
    where: {
      userId,
    },
    select: {
      userId: true,
      email: true,
      profile: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not Found !!');
  }

  return result;
};

export const UserService = {
  getAllUserService,
  getSingleUser,
  updateProfileInfo,
  getMyProfile,
};
