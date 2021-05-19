const bcrypt = require('bcrypt')


module.exports = (Sequelize, sequelize) => { 
  return sequelize.define('session ',{
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4()
    },
    userAgent: {
      type: Sequelize.DataTypes.STRING(128),
      allowNull: false,
    },
    ipAdress: {
      type: Sequelize.DataTypes.INET
    }
  })
}