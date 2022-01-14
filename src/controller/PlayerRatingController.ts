import { getRepository } from 'typeorm';
import PlayerRating from '../models/PlayerRating';
import { Request, Response } from 'express';

export const getPlayerRating = async (request: Request, response: Response) => {
  const playerRating: any = await getRepository(PlayerRating).find();

  const playerMmr = playerRating.filter((item: any) => {
    if(item.trueskill_sigma && item.trueskill_mu){
      item.mmr = Math.trunc((20 * (item.trueskill_mu - 3 * item.trueskill_sigma + 25)));

      return item;
    }
  });

  Promise.all(playerMmr).then((values) => {
    return response.json(values);
  });
}