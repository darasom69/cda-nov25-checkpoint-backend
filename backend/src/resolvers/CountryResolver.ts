import { Arg, Mutation, Resolver } from "type-graphql";
import { Country, CountryInput } from "../entities/Country";

@Resolver()
export default class CountryResolver {
 @Mutation(() => Country)
 async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
   const country = Country.create({ ...data })
   country.code = data.code.toUpperCase();
   await country.save();
   return country;
 }
}
