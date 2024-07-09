const {
  Model
} = require('sequelize');
    module.exports = (sequelize, DataTypes) => {
  class Bookroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookroom.init({
    code: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bookroom',
  });
  return Bookroom;
};