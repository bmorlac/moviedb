export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    releasedAt: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    addedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    imbdbLink: Sequelize.STRING,
    format: {
      type: Sequelize.STRING(7),
      allowNull: false,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Movies'),
};
