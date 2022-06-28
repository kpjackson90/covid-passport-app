import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { NotAuthorizedError } from '../middlewares/errors/not-authorized-error';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload | undefined;
    }
  }
}

const requireAuth = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new NotAuthorizedError();
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET!, async (err, payload) => {
    if (err) {
      throw new NotAuthorizedError();
    }

    const user = await User.findById(payload?.id) as UserPayload;
    req.user = user;
    next();
  });
};

export { requireAuth };