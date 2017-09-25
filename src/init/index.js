import createUmzug from '../umzug-helper';

export default class BootStrap {
  static async init() {
    const migrations = createUmzug('./migrations', true);
    const seeders = createUmzug('./seeders');
    await migrations.up();
    await seeders.up();
  }
}
