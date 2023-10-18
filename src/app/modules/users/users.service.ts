import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';

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

export const UserService = {
  getAllUserService,
};
