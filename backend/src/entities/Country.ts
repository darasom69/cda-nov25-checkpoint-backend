import { Length } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "varchar", length: 2, unique: true })
  code: string;

  @Field()
  @Column({ type: "varchar", length: 100 })
  name: string;

  @Field()
  @Column({ type: "varchar", length: 10 })
  emoji: string;
}

@InputType()
export class CountryInput {
  @Field()
  @Length(2, 2)
  code: string;

  @Field()
  @Length(2, 100)
  name: string;

  @Field()
  @Length(2, 10)
  emoji: string;
}
