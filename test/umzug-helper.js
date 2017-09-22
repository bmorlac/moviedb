import Umzug from 'umzug';

import models from '../src/models';

export default (path, useStorage) => {
  const { sequelize } = models;
  return new Umzug({
    storage: useStorage ? 'sequelize' : 'none',
    storageOptions: {
      sequelize,
    },

    migrations: {
      params: [
        sequelize.getQueryInterface(), // queryInterface
        sequelize.constructor, // DataTypes
        () => {
          throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
        },
      ],
      path,
      pattern: /\.js$/,
    },

    logging(...args) {
      console.log.apply(null, args);
    },
  });
};
