import { Router } from 'express';
import playerRouter from './player.routes';
import playerRatingRouter from './player.rating.routes';

const routes = Router();

routes.use('/players', playerRouter);
routes.use('/player-rating', playerRatingRouter);

export default routes;