import express, {Request, Response, NextFunction} from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
