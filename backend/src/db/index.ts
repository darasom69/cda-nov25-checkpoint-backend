import { DataSource } from "typeorm";
import { Country } from "../entities/Country";
import { User } from "../entities/User";

export default new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  entities: [User, Country],
  synchronize: true,
  logging: false,
});
