import { Router } from 'express';
import { getPlayers } from '../controller/PlayerController';

const playerRouter = Router();

playerRouter.get('/', getPlayers)

export default playerRouter;