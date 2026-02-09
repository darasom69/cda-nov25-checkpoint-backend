import { buildSchema } from "type-graphql";
import { authChecker } from "./auth";
import UserResolver from "./resolvers/UserResolver";
import CountryResolver from "./resolvers/CountryResolver";

export async function getSchema() {
  return buildSchema({
    resolvers: [UserResolver, CountryResolver],
    authChecker,
  });
}
