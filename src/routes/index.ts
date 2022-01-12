import { Router } from 'express';
import playerRouter from './player.routes';

const routes = Router();

routes.use('/players', playerRouter);

export default routes;