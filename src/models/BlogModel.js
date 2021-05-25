
module.exports = (Sequelize, sequelize) => { 
  return sequelize.define('blog',{
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4()
    },
    title:{ 
      type: Sequelize.DataTypes.STRING(512),
      allowNull: false
    },
    text: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false
    },
    views: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    slugify: {
      type:Sequelize.DataTypes.STRING,
      allowNull: false
    }
  })
}