import { buildSchema } from "type-graphql";
import { authChecker } from "./auth";
import CountryResolver from "./resolvers/CountryResolver";
import UserResolver from "./resolvers/UserResolver";

export async function getSchema() {
  return buildSchema({
    resolvers: [UserResolver, CountryResolver],
    authChecker,
  });
}
