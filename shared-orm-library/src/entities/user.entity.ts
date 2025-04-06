import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Settings } from "./settings.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Settings, (settings) => settings.user)
  settings: Settings;
}
