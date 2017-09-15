export default (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    releasedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    addedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    imbdbLink: DataTypes.STRING,
    format: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
  });
  return Movie;
};
