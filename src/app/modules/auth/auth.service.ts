import { Request } from 'express';

import { IUserCreate } from './auth.interface';

const createNewUser = async (req: Request) => {
  const data = (await req.body) as IUserCreate;
  console.log('data: ', data);
  return data;
};

export const AuthService = {
  createNewUser,
};