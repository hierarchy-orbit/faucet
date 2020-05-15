'use strict';
module.exports = (sequelize, DataTypes) => (
  sequelize.define('analytics', {
    event_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    created_at: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    underscored: true,
  })
);