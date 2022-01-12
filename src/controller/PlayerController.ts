import { getRepository } from 'typeorm';
import Player from '../models/Player';
import { Request, Response } from 'express';

export const getPlayers = async (request: Request, response: Response) => {
  const player: any = await getRepository(Player).find();

  return response.json(player);
}