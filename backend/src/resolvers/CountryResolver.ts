import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../db";
import { Country, type CountryInput } from "../entities/Country";

@Resolver()
export default class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    const repo = db.getRepository(Country);
    const country = repo.create({ ...data });
    country.code = data.code.toUpperCase();
    await repo.save(country);
    return country;
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    const repo = db.getRepository(Country);
    return repo.find();
  }

  @Query(() => Country, { nullable: true })
  async country(@Arg("code") code: string): Promise<Country | null> {
    const repo = db.getRepository(Country);
    return repo.findOne({
      where: { code: code.toUpperCase() },
    });
  }
}
