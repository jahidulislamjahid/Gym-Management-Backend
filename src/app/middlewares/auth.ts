import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth = (...requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized user'
        );
      }

      const verifiedUser: JwtPayload = jwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      );

      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        const rolesString = requiredRoles.join(', ');
        throw new ApiError(
          httpStatus.FORBIDDEN,
          `Access Forbidden. Required role(s): ${rolesString}`
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
