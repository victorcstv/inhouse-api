import { Router } from 'express';
import { getPlayerRating } from '../controller/PlayerRatingController';

const playerRatingRouter = Router();

playerRatingRouter.get('/', getPlayerRating)

export default playerRatingRouter;