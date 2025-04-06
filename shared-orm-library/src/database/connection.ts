import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Settings } from "../entities/settings.entity";
import "dotenv/config";

// create and export the AppDataSource
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "my-account",
  entities: [User, Settings],
  synchronize: false,
  migrations: [__dirname + "/../migrations/**/*{.ts,.js}"],
  migrationsRun: true,
});

// initialize the database connection
export const initializeDatabase = async (): Promise<DataSource> => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};
