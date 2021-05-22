const {Sequelize, DataTypes} = require('sequelize')
const AdminModel = require('../models/AdminModel')
const SessionModel = require('../models/SessionModel')
const UserModel = require('../models/UserModel')
const FileModel = require('../models/FileModel')


const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/usersystem', {
  // logging: e => console.log('SQL:', e)
})
module.exports = postgres()

async function postgres() {
  try {
    let db = {}
    db.users = UserModel(Sequelize, sequelize)
    db.sessions = await SessionModel(Sequelize, sequelize)
    db.admins = await AdminModel(Sequelize, sequelize)
    db.files = await FileModel(Sequelize, sequelize)

    await db.users.hasMany(db.sessions, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      }
    })

    await db.users.hasOne(db.admins, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      }
    })

    await db.users.hasMany(db.files,{
      foreignKey: {
        name: 'user_id',
        allowNull: false 
      }
    })

    // let user = await db.users.create({name: 'John', password: 'salom'})
    // console.log(user);
    // sequelize.sync({force:true})
    return db
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
