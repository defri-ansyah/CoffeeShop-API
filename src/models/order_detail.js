'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.order_detail.belongsTo(models.order, {
        foreignKey: 'order_id'
      })
      models.order_detail.hasOne(models.products, {
        foreignKey: 'id',
        sourceKey: 'product_id'
      })
    }
  };
  order_detail.init({
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    size: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};