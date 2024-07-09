const {
  Model
} = require('sequelize');
    module.exports = (sequelize, DataTypes) => {
  class BookRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookRoom.init({
    userId: DataTypes.STRING,
    bookRoomId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BookRoom',
  });
  return BookRoom;
};