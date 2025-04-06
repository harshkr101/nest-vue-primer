import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("settings")
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isNotificationEnabled: boolean;

  @Column({ default: false })
  isNewDashboardEnabled: boolean;

  @Column({ default: "UTC" })
  timezone: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
