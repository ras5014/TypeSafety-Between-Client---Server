/**
 * drizzle-seed is a tool for seeding databases with fake data based
 * on your Drizzle schema. It generates realistic data while
 * respecting your schema's constraints and relationships,
 * making it ideal for testing and development purposes. You can customize
 * the amount of data generated and use a fixed seed for reproducibility.
 */
import { seed, reset } from "drizzle-seed";
import db from "../db/connection";
import * as schema from "../db/schema";

async function main() {
  console.log("Starting database seeding...");
  console.log("Resetting database...");
  // optional: clear all tables first
  await reset(db, schema);
  /**
   * basic deterministic seed
   * count: 20 = target amount of generated records per table pattern
   * (exact distribution depends on relations).
   * seed: 20260304 = fixed random seed, so generated data is reproducible.
   * Same schema + same seed gives same fake data each run.
   */
  console.log("Seeding database with fake data...");
  await seed(db, schema, { count: 20, seed: 20260304 });
}

main()
  .then(() => {
    console.log("Seeding completed successfully.");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
