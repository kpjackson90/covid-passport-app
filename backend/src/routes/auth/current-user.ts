import express, { Request, Response } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { NotAuthorizedError } from '../../middlewares/errors/not-authorized-error';
import { User } from '../../models/user';

const router = express.Router();

router.get(
  '/api/users/current',
  requireAuth,
  async (req: Request, res: Response) => {
    try {
      const user = await User.findOne({ id: req.user?.id, isVerified: true });
      return res.status(200).send(user);
    } catch (err) {
      throw new NotAuthorizedError();
    }
  }
);

export { router as currentUserRouter };