import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('player')
class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  server_id: number;

  @Column()
  name: string;

  @Column()
  team: string;
}

export default Player;