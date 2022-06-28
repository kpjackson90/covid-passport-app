import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { BadRequestError } from '../../middlewares/errors/bad-request-error';
import { validateRequest } from '../../middlewares/validate-requests';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  '/api/users/verify',
  [
    body('id').trim().notEmpty(),
    body('token').trim().notEmpty(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { id, token } = req.body;
    const verified = await jwt.verify(token, process.env.JWT_SECRET!);

    if (!verified) {
      throw new BadRequestError('User is not verified');
    }

    await User.updateOne(
      { id },
      { $set: { isVerified: true } }
    );

    return res.status(200).send({
      token,
      message: 'Email successfully verified',
    });
  }
);

export { router as verifyUserRouter };