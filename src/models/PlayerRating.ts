import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type RoleEnum = "TOP" | "JGL" | "MID" | "BOT" | "SUP";

@Entity('player_rating')
class PlayerRating {
  @PrimaryGeneratedColumn()
  player_id: number;

  @Column()
  player_server_id: number;

  @Column({
    type: "enum",
    enum: ["TOP", "JGL", "MID", "BOT", "SUP"]
  })
  role: RoleEnum;

  @Column()
  trueskill_mu: number;
  
  @Column()
  trueskill_sigma: number;
}

export default PlayerRating;